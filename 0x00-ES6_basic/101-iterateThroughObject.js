export default function iterateThroughObject(reportWithIterator) {
    let string = ""
    for (let employee of reportWithIterator) {
        if (string !== "") {
            string += ` | ${employee}`;
        } else {
            string += employee;
        }
    }
    return string;
}