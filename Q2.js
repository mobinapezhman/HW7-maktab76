function recurIndex(string) {
    if (string == "" || string == null) {
        return {};
    }
    let array = Array.from(string);
    let indices = [];
    let filtered = array.filter((DuplicateElement, index) => 
    array.indexOf(DuplicateElement) !== index);
    let uniqueFiltered = [... new Set(filtered)];
    array.filter((item,index)=>{
        if(item == uniqueFiltered[0])
        indices.push(index);
    });
    return `{${uniqueFiltered[0]}:[${indices[0]},${indices[1]}]}`

}
console.log(recurIndex("AREDCBSDERD"));
// console.log(recurIndex(""));
// console.log(recurIndex(null));