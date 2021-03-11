const math = {};
math.add = (num1, num2) => num1 + num2;
math.multiply = (num1, num2) => num1 * num2;

math.division = async(num1, num2) => {
    try {
        if(num2 === 0)
            throw "division with zero is not defined";
        if(num1 && num2){
            return await ( num1/num2);
        }else{
            throw "missing params";
        }
    } catch (error) {
        throw error;
    }
    
}
module.exports = math;