export const convertToCapitalFirstLetter = (value) => {
    return value && value[0].toUpperCase() + value.slice(1);
}

export const splitMisi = (value) => {
    return value.split(";");
}