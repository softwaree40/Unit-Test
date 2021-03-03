const { expect } = require("@jest/globals")
const subtract = require("./subtract")

test("subtract two value",()=>{

 expect(subtract(6,2)).toBe(4)

})