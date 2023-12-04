const getMessage = require("./getMessage")

describe("getMessage", () => {
  it("returns hello world", () => {
    expect(getMessage()).toEqual("Hello World!")
  })
})