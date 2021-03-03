const { expect } = require("@jest/globals")
const cloneArray = require("./cloneArray")

test("create new array from the old one",()=>{
    const array = [1,2,3,4,5,6]
    expect(cloneArray(array)).toStrictEqual(array)
    expect(cloneArray(array)).not.toBe(array)
})