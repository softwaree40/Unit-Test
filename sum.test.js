const { expect } = require("@jest/globals")
const sum = require("./sum")
test("adding two numbers",()=>{
   
    expect(sum(1,7)).toBe(8)
})