const expect = require('chai').expect;
const math = require("../math");

describe('math.js tests', () => {
    describe('math.add() Test', () => {
        it('should equal 2', () => {
            const result = math.add(1, 1);
            expect(result).to.equal(2);
        });
        it('should equal 4', () => {
            const result = math.add(2, 2);
            expect(result).to.equal(4);
        });
    });
    
    describe('math.multiply() Test', () => {
        it('should equal 3', () => {
            const result = math.multiply(3, 1);
            expect(result).to.equal(3);
        });
        it('should equal 10', () => {
            const result = math.multiply(5, 2);
            expect(result).to.equal(10);
        });
    });
    describe('math.division() Test', () => {
        it('should equal 2', async( ) => {
            const result = await math.division(4, 2);
            expect(result).to.equal(2);
        });
        it('should throw error', async() => {
            try {
                await math.division();
            } catch (error) {
                expect(error).to.equal('missing params');
            }
        });
        it('should throw error division by zero', async() => {
            try {
                await math.division(5, 5);
            } catch (error) {
                console.log(error);
                expect(error).to.equal('division with zero is not defined');
            }
        });
        it('should equal 10', () => {
            const result = math.multiply(5, 2);
            expect(result).to.equal(10);
        });
    });
});