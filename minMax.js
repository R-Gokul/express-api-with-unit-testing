

module.exports.minMax = (arr)=>{
    let min = arr[0];
    let max = arr[0];
    arr.forEach(element => {
        if(element > max)
            max = element;

        if(element < min)
            min = element
    });
    return [min, max]
}