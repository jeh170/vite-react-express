let hello = 'Hello World!';
module.exports = {
  getHello() {
    return hello;
  },
  changeHello(newHello) {
    hello = newHello;
  },
}