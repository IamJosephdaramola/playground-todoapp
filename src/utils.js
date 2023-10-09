// Returns false if any key in the object has a falsy value
const validateValues = (data) => {
    return Object.values(data).every((value) => !!value)
}

export { validateValues }