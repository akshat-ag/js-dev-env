import { expect } from 'chai';
// import fs from 'fs';
// import jsdom from 'jsdom';

describe("Unit test index.js", () => {
  it("this should pass", () => {
    expect(true).to.equal(true);
  })
});

/*
describe("index.html", (done) => {
  it("should say hello", () => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Hello World!");
      done();
      window.close();
    });

  });
});
*/
