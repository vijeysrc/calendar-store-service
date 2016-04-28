let DateFormatter = (inputDate, format) => {
    let d = inputDate.getDate(),
        D = inputDate.getDay(),
        m = inputDate.getMonth(),
        y = inputDate.getFullYear(),
        days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        formatMap = {
            d: d,
            dd: String(d).length < 2 ? "0" + d : d,
            ddd: days[D].slice(0, 3),
            dddd: days[D],
            m: m + 1,
            mm: String(m + 1).length < 2 ? "0" + (m + 1) : m + 1,
            mmm: months[m].slice(0, 3),
            mmmm: months[m],
            yy: String(y).slice(2),
            yyyy: y
        };

    return format.replace(/d{1,4}|m{1,4}|yy(?:yy)?/g, function ($0) {
        return $0 in formatMap ? formatMap[$0] : "";
    });
};

export default DateFormatter;