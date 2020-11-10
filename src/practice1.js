const parseData = (arr) => {
    const column = arr.column.map(item => item.name);
    return arr.data.map((item) => {
        const oneColumn = {}
        column.forEach((element, index) => {
            oneColumn[element] = item[index]
        });
        return oneColumn
    });
}
export { parseData };
