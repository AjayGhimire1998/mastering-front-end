const { describe } = require("node:test");

function sum(a, b){
    return a+b;
}

describe("sum", function(){
    it("sums two legit numbers", function(){
        assert.equal(sum(1,2), 3);
        // assert.equal(sum(66.5, 1.5), 68);
    });
});