describe("The plurivalent logic test suite", function() {

  var plur = require('../src/plur.js');

  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });

  it("can validate the value True", function() {
    var True = plur.True();
    expect(True).not.toBe(undefined);
    expect(True).not.toBe(null);
    expect(True.value.size).toBe(1);
    expect(True.value.has(true)).toBe(true);
  });

  it("can validate the value False", function() {
    var False = plur.False();
    expect(False).not.toBe(undefined);
    expect(False).not.toBe(null);
    expect(False.value.size).toBe(1);
    expect(False.value.has(false)).toBe(true);
  });

  it("can validate the value Paradox", function() {
    var Paradox = plur.Paradox();
    expect(Paradox).not.toBe(undefined);
    expect(Paradox).not.toBe(null);
    expect(Paradox.value.size).toBe(2);
    expect(Paradox.value.has(true)).toBe(true);
    expect(Paradox.value.has(false)).toBe(true);
  });

  it("can validate the value Empty", function() {
    var Empty = plur.Empty();
    expect(Empty).not.toBe(undefined);
    expect(Empty).not.toBe(null);
    expect(Empty.value.size).toBe(0);
  });

  it("can validate the value Cipher", function() {
    var Cipher = plur.Cipher();
    expect(Cipher).not.toBe(undefined);
    expect(Cipher).not.toBe(null);
    expect(Cipher.value.size).toBe(1);
    expect(Cipher.value.has(0)).toBe(true);
  });

  it("can validate the value Ineffable", function() {
    var Ineffable = plur.Ineffable();
    expect(Ineffable).not.toBe(undefined);
    expect(Ineffable).not.toBe(null);
    expect(Ineffable.value.size).toBe(1);

    // This is also a test of how the underlying implementation
    // handles NaN tests. Traditionally NaN != NaN.
    expect(Ineffable.value.has(NaN)).toBe(true);
  });

  it("can validate AND operations against TRUE", function() {
    var True = plur.True();
    var False = plur.False();
    var Paradox = plur.Paradox();
    var Empty = plur.Empty();
    var Cipher = plur.Cipher();
    var Ineffable = plur.Ineffable();

    expect(True.and(True).value.size).toBe(1);
    expect(True.and(True).value.has(true)).toBe(true);

    expect(True.and(False).value.size).toBe(1);
    expect(True.and(False).value.has(false)).toBe(true);
    expect(False.and(True).value.size).toBe(1);
    expect(False.and(True).value.has(false)).toBe(true);

    expect(True.and(Paradox).value.size).toBe(2);
    expect(True.and(Paradox).value.has(true)).toBe(true);
    expect(True.and(Paradox).value.has(false)).toBe(true);
    expect(Paradox.and(True).value.size).toBe(2);
    expect(Paradox.and(True).value.has(true)).toBe(true);
    expect(Paradox.and(True).value.has(false)).toBe(true);

    expect(True.and(Empty).value.size).toBe(1);
    expect(True.and(Empty).value.has(true)).toBe(true);
    expect(Empty.and(True).value.size).toBe(1);
    expect(Empty.and(True).value.has(true)).toBe(true);
  });

});

/*
var and1 = True.and(True);
console.log('Expect true:');
for (let item of and1.value) console.log(item);

var and2 = True.and(False);
console.log('Expect false:');
for (let item of and2.value) console.log(item);

var and3 = True.and(Paradox);
console.log('Expect true, false:');
for (let item of and3.value) console.log(item);

var and4 = True.and(Empty);
console.log('Expect nothing:');
for (let item of and4.value) console.log(item);

var and5 = True.and(Cipher);
console.log('Expect zero:');
for (let item of and5.value) console.log(item);

var and6 = True.and(Ineffable);
console.log('Expect NaN:');
for (let item of and6.value) console.log(item);

var or1 = True.or(True);
console.log('Expect true:');
for (let item of or1.value) console.log(item);

var or2 = True.or(False);
console.log('Expect true:');
for (let item of or2.value) console.log(item);

var or3 = True.or(Paradox);
console.log('Expect true false:');
for (let item of or3.value) console.log(item);

var or4 = True.or(Empty);
console.log('Expect true:');
for (let item of or4.value) console.log(item);

var or5 = True.or(Cipher);
console.log('Expect true:');
for (let item of or5.value) console.log(item);

var or6 = True.or(Ineffable);
console.log('Expect NaN:');
for (let item of or6.value) console.log(item);

var not1 = True.not(True);
var not2 = True.not(False);
var not3 = True.not(Paradox);
var not4 = True.not(Empty);
var not5 = True.not(Cipher);
var not6 = True.not(Ineffable);

console.log('done');
debugger;*/
