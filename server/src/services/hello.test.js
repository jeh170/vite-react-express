const { getHello, changeHello } = require("./hello")

describe("getHello()", () => {
  it("returns 'Hello World!' by default", () => {
    expect(getHello()).toEqual("Hello World!")
  })
})

describe("changeHello()", () => {
  it("sets the new hello", () => {
    changeHello("Hello Jim!");
    expect(getHello()).toEqual("Hello Jim!")
  })
})