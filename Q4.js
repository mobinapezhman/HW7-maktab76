function getNumberOfArray(array) {
    let ext = [];
    array.forEach(element => {
        for (const value of element) {
            if (value == parseInt(value)) {
                ext.push(element);
                break;
            }
        }
    })

    return ext;
}

console.log(getNumberOfArray(["20" , "k90", "333s33" , "mobina"]));
