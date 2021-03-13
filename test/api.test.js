const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const server = "https://jsonplaceholder.typicode.com/";

describe("Sample api call", async ()=>{
    await describe("should respond with sample Json object", async ()=>{
        const res = await chai.request(server).get("todos/1");
        it("should have 200 status", () =>{
            res.should.have.status(200)
        })
        it("should have title response object", () =>{
            res.should.have.status(200)
        })
        // res.should.have.status(200)
        // console.log("***", res.body);
        // const body = res.body;
        // body.should.have.property('title')
        // expect(res.body).to.have.property('title');
        // done()
    })
})