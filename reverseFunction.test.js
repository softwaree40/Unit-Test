const { expect } = require("@jest/globals")
const reverseFunction = require("./reverseFunction")

test("function that reverse a string",()=>{

 expect(reverseFunction("hello")).toEqual("olleh")


})