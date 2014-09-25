var test = require("tape")

var bowerLess = require("../index")

test("bowerLess is a function", function (assert) {
    assert.equal(typeof bowerLess, "function")
    assert.end()
})
