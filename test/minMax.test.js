const expect = require("chai").expect;
const { minMax}=  require("../minMax");

describe("Min max of array testing", ()=>{
    it("Min Should be 1", ()=>{
        const [min, max] = minMax([1,2,2,3,4,5,8])
        expect(min).to.equals(1);
    })
    it("Maz Should be 8", ()=>{
        const [min, max] = minMax([1,2,2,3,4,5,8])
        expect(max).to.equals(8);
    })
});