const expect = require('chai').expect;
const { minMax } =  require('../minMax');

describe("Min Max",()=>{
    it("min value 1", ()=>{
        const [min, max] = minMax([1,2,3,3,33,4]);
        expect(min).to.equal(1)
    })
    it("min value -4", ()=>{
        const [min, max] = minMax([-1,1,2,3,3,33,-4]);
        expect(min).to.equal(-4)
    })
    it("max value 0", ()=>{
        const [min, max] = minMax([-1,-2,-3,0]);
        expect(max).to.equal(0)
    })
    it("min value 4", ()=>{
        const [min, max] = minMax([1,2,3,3,-4,4]);
        expect(max).to.equal(4)
    })
})
