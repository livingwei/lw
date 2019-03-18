var {expect} = require('chai');
var {Contest} = require('../src/contest.js');
describe("contest", function() {

  it("SulfurasFirstTest", function() {
    const contest = new Contest();
    expect(contest.totalWay('Sulfuras', 10, 'SellIn')).to.equal('always');
  });
  it("AgedBrieFirstTest", function() {
    const contest = new Contest();
    expect(contest.totalWay('AgedBrie', 10, 'SellIn')).to.equal(10);
  });
  it("BackstagepassesFirstTest", function() {
    const contest = new Contest();
    expect(contest.totalWay('Backstagepasses', 10, 'SellIn')).to.equal('always');
  });
  it("otherFirstTest", function() {
    const contest = new Contest();
    expect(contest.totalWay('other', 10, 'SellIn')).to.equal(30);
  });

});
