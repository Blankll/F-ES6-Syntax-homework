const inject = (origin, section) => {
    section.forEach((value, index) => {
        origin.splice(value.index+index, 0, value.content)
    });
    return origin;
}
export { inject };
