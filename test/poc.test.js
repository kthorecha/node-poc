const { expect } = require('chai');
const fetch = require('node-fetch');

describe("It should be sum", () => {
    it("should add 2 integers", () => {
        expect(1+2).equals(3);
    })
});

describe("POC test case", () => {
    it("should route to home", () => {
        fetch('http://localhost:8088')
        .then(res => res.text())
        .then(body => {
            // console.log('booddyy',body);
            expect(body).to.be.not.null;
        })
    })
    it("should route to monday", () => {
        fetch('http://localhost:8088/monday')
        .then(res => res.text())
        .then(body => {
            console.log('booddyy',body);
        })
    })
})