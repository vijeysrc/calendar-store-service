let util, getStructures, goTo, getStructureByName;

util = {
    getFirstDate: d => new Date(d.getFullYear(), d.getMonth(), 1),
    getLastDate: d => new Date(d.getFullYear(), d.getMonth() + 1, 0),
    cloneDate: d => new Date(d.getTime()),
    areTheySame: (d1, d2) => d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate()
};

getStructures = (base, chosen) => {
    let tmp,
        i = 1,
        firstDate = util.getFirstDate(base),
        lastDate = util.getLastDate(base),
        count = firstDate.getDay() + lastDate.getDate() + (6 - lastDate.getDay()),
        series = [],
        matrix = [];

    firstDate.setDate(-(firstDate.getDay()) + 1);

    for (;i <= count; i++) {
        tmp = util.cloneDate(firstDate);
        series.push({
            date: tmp,
            day: tmp.getDate(),
            month: tmp.getMonth() < base.getMonth() ? "prev" : (tmp.getMonth() === base.getMonth() ? "base" : "next"),
            chosen: util.areTheySame(tmp, chosen),
            today: util.areTheySame(tmp, new Date())
        });
        firstDate.setDate(firstDate.getDate() + 1);
    }

    for (i = 0; i < series.length / 7; i++) {
        matrix.push(series.slice(i * 7, (i * 7) + 7));
    }

    return {
        series: series,
        matrix: matrix
    };
};

getStructureByName = (name, base, chosen, adjacents) => {
    let output = {}, d = new Date(), structures = {}, newBase;

    name = name || "default";
    base = base || d;
    chosen = chosen || d;
    adjacents = adjacents || [];

    structures = getStructures(base, chosen);

    output[name] = {
        name: name,
        base: base,
        chosen: chosen,
        adjacents: adjacents,
        structures: {
            series: structures.series,
            matrix: structures.matrix,
            adjacents: {}
        }
    };

    adjacents.forEach(function (index) {
        newBase = util.cloneDate(base);
        newBase.setMonth(newBase.getMonth() + index);
        structures = getStructures(newBase, chosen);
        output[name].structures.adjacents[String(index)] = {
            base: newBase,
            series: structures.series,
            matrix: structures.matrix
        };
    });

    return output;
};

goTo = (base, type, dir) => {
    var d = util.cloneDate(base), moveBy;

    d.setDate(1);

    if (type === "month") {
        moveBy = 1;
    } else if (type === "year") {
        moveBy = 12;
    }

    if (dir === "next") {
        d.setMonth(d.getMonth() + moveBy);
    } else if (dir === "prev") {
        d.setMonth(d.getMonth() - moveBy);
    }

    return d;
};

export {getStructureByName, goTo};