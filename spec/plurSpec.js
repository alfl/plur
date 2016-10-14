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

    expect(True.and(Empty).value.size).toBe(0);
    expect(Empty.and(True).value.size).toBe(0);

    expect(True.and(Cipher).value.size).toBe(1);
    expect(True.and(Cipher).value.has(false)).toBe(true);
    expect(Cipher.and(True).value.size).toBe(1);
    expect(Cipher.and(True).value.has(false)).toBe(true);

    expect(True.and(Ineffable).value.size).toBe(1);
    expect(True.and(Ineffable).value.has(NaN)).toBe(true);
    expect(Ineffable.and(True).value.size).toBe(1);
    expect(Ineffable.and(True).value.has(NaN)).toBe(true);
  });

  it("can validate OR operations against TRUE", function() {
    var True = plur.True();
    var False = plur.False();
    var Paradox = plur.Paradox();
    var Empty = plur.Empty();
    var Cipher = plur.Cipher();
    var Ineffable = plur.Ineffable();

    expect(True.or(True).value.size).toBe(1);
    expect(True.or(True).value.has(true)).toBe(true);

    expect(True.or(False).value.size).toBe(1);
    expect(True.or(False).value.has(true)).toBe(true);
    expect(False.or(True).value.size).toBe(1);
    expect(False.or(True).value.has(true)).toBe(true);

    expect(True.or(Paradox).value.size).toBe(1);
    expect(True.or(Paradox).value.has(true)).toBe(true);
    expect(Paradox.or(True).value.size).toBe(1);
    expect(Paradox.or(True).value.has(true)).toBe(true);

    expect(True.or(Empty).value.size).toBe(1);
    expect(True.or(Empty).value.has(true)).toBe(true);
    expect(Empty.or(True).value.size).toBe(1);
    expect(Empty.or(True).value.has(true)).toBe(true);

    expect(True.or(Cipher).value.size).toBe(1);
    expect(True.or(Cipher).value.has(true)).toBe(true);
    expect(Cipher.or(True).value.size).toBe(1);
    expect(Cipher.or(True).value.has(true)).toBe(true);

    expect(True.or(Ineffable).value.size).toBe(1);
    expect(True.or(Ineffable).value.has(NaN)).toBe(true);
    expect(Ineffable.or(True).value.size).toBe(1);
    expect(Ineffable.or(True).value.has(NaN)).toBe(true);
  });

  it("can validate AND operations against FALSE", function() {
    var False = plur.False();
    var Paradox = plur.Paradox();
    var Empty = plur.Empty();
    var Cipher = plur.Cipher();
    var Ineffable = plur.Ineffable();

    expect(False.and(False).value.size).toBe(1);
    expect(False.and(False).value.has(false)).toBe(true);

    expect(False.and(Paradox).value.size).toBe(1);
    expect(False.and(Paradox).value.has(false)).toBe(true);
    expect(Paradox.and(False).value.size).toBe(1);
    expect(Paradox.and(False).value.has(false)).toBe(true);

    expect(False.and(Empty).value.size).toBe(0);
    expect(Empty.and(False).value.size).toBe(0);

    expect(False.and(Cipher).value.size).toBe(1);
    expect(False.and(Cipher).value.has(false)).toBe(true);
    expect(Cipher.and(False).value.size).toBe(1);
    expect(Cipher.and(False).value.has(false)).toBe(true);

    expect(False.and(Ineffable).value.size).toBe(1);
    expect(False.and(Ineffable).value.has(NaN)).toBe(true);
    expect(Ineffable.and(False).value.size).toBe(1);
    expect(Ineffable.and(False).value.has(NaN)).toBe(true);
  });

  it("can validate OR operations against FALSE", function() {
    var False = plur.False();
    var Paradox = plur.Paradox();
    var Empty = plur.Empty();
    var Cipher = plur.Cipher();
    var Ineffable = plur.Ineffable();

    expect(False.or(False).value.size).toBe(1);
    expect(False.or(False).value.has(false)).toBe(true);

    expect(False.or(Paradox).value.size).toBe(2);
    expect(False.or(Paradox).value.has(true)).toBe(true);
    expect(False.or(Paradox).value.has(false)).toBe(true);
    expect(Paradox.or(False).value.size).toBe(2);
    expect(Paradox.or(False).value.has(true)).toBe(true);
    expect(Paradox.or(False).value.has(false)).toBe(true);

    expect(False.or(Empty).value.size).toBe(1);
    expect(False.or(Empty).value.has(false)).toBe(true);
    expect(Empty.or(False).value.size).toBe(1);
    expect(Empty.or(False).value.has(false)).toBe(true);

    expect(False.or(Cipher).value.size).toBe(1);
    expect(False.or(Cipher).value.has(false)).toBe(true);
    expect(Cipher.or(False).value.size).toBe(1);
    expect(Cipher.or(False).value.has(false)).toBe(true);

    expect(False.or(Ineffable).value.size).toBe(1);
    expect(False.or(Ineffable).value.has(NaN)).toBe(true);
    expect(Ineffable.or(False).value.size).toBe(1);
    expect(Ineffable.or(False).value.has(NaN)).toBe(true);
  });

  it("can validate AND operations against PARADOX", function() {
    var Paradox = plur.Paradox();
    var Empty = plur.Empty();
    var Cipher = plur.Cipher();
    var Ineffable = plur.Ineffable();

    expect(Paradox.and(Paradox).value.size).toBe(2);
    expect(Paradox.and(Paradox).value.has(true)).toBe(true);
    expect(Paradox.and(Paradox).value.has(false)).toBe(true);

    expect(Paradox.and(Empty).value.size).toBe(0);
    expect(Empty.and(Paradox).value.size).toBe(0);

    expect(Paradox.and(Cipher).value.size).toBe(1);
    expect(Paradox.and(Cipher).value.has(false)).toBe(true);
    expect(Cipher.and(Paradox).value.size).toBe(1);
    expect(Cipher.and(Paradox).value.has(false)).toBe(true);

    expect(Paradox.and(Ineffable).value.size).toBe(1);
    expect(Paradox.and(Ineffable).value.has(NaN)).toBe(true);
    expect(Ineffable.and(Paradox).value.size).toBe(1);
    expect(Ineffable.and(Paradox).value.has(NaN)).toBe(true);
  });

  it("can validate OR operations against PARADOX", function() {
    var Paradox = plur.Paradox();
    var Empty = plur.Empty();
    var Cipher = plur.Cipher();
    var Ineffable = plur.Ineffable();

    expect(Paradox.or(Paradox).value.size).toBe(2);
    expect(Paradox.or(Paradox).value.has(true)).toBe(true);
    expect(Paradox.or(Paradox).value.has(false)).toBe(true);

    expect(Paradox.or(Empty).value.size).toBe(2);
    expect(Paradox.or(Empty).value.has(true)).toBe(true);
    expect(Paradox.or(Empty).value.has(false)).toBe(true);
    expect(Empty.or(Paradox).value.size).toBe(2);
    expect(Empty.or(Paradox).value.has(true)).toBe(true);
    expect(Empty.or(Paradox).value.has(false)).toBe(true);

    expect(Paradox.or(Cipher).value.size).toBe(2);
    expect(Paradox.or(Cipher).value.has(true)).toBe(true);
    expect(Paradox.or(Cipher).value.has(false)).toBe(true);
    expect(Cipher.or(Paradox).value.size).toBe(2);
    expect(Cipher.or(Paradox).value.has(true)).toBe(true);
    expect(Cipher.or(Paradox).value.has(false)).toBe(true);

    expect(Paradox.or(Ineffable).value.size).toBe(1);
    expect(Paradox.or(Ineffable).value.has(NaN)).toBe(true);
    expect(Ineffable.or(Paradox).value.size).toBe(1);
    expect(Ineffable.or(Paradox).value.has(NaN)).toBe(true);
  });

  it("can validate AND operations against EMPTY", function() {
    var Empty = plur.Empty();
    var Cipher = plur.Cipher();
    var Ineffable = plur.Ineffable();

    expect(Empty.and(Empty).value.size).toBe(0);

    expect(Empty.and(Cipher).value.size).toBe(0);
    expect(Cipher.and(Empty).value.size).toBe(0);

    expect(Empty.and(Ineffable).value.size).toBe(1);
    expect(Empty.and(Ineffable).value.has(NaN)).toBe(true);
    expect(Ineffable.and(Empty).value.size).toBe(1);
    expect(Ineffable.and(Empty).value.has(NaN)).toBe(true);
  });

  it("can validate OR operations against EMPTY", function() {
    var Empty = plur.Empty();
    var Cipher = plur.Cipher();
    var Ineffable = plur.Ineffable();

    expect(Empty.or(Empty).value.size).toBe(0);

    expect(Empty.or(Cipher).value.size).toBe(1);
    expect(Empty.or(Cipher).value.has(0)).toBe(true);
    expect(Cipher.or(Empty).value.size).toBe(1);
    expect(Cipher.or(Empty).value.has(0)).toBe(true);

    expect(Empty.or(Ineffable).value.size).toBe(1);
    expect(Empty.or(Ineffable).value.has(NaN)).toBe(true);
    expect(Ineffable.or(Empty).value.size).toBe(1);
    expect(Ineffable.or(Empty).value.has(NaN)).toBe(true);
  });

  it("can validate AND operations against CIPHER", function() {
    var Cipher = plur.Cipher();
    var Ineffable = plur.Ineffable();

    expect(Cipher.and(Cipher).value.size).toBe(1);
    expect(Cipher.and(Cipher).value.has(0)).toBe(true);

    expect(Cipher.and(Ineffable).value.size).toBe(1);
    expect(Cipher.and(Ineffable).value.has(NaN)).toBe(true);
    expect(Ineffable.and(Cipher).value.size).toBe(1);
    expect(Ineffable.and(Cipher).value.has(NaN)).toBe(true);
  });

  it("can validate OR operations against CIPHER", function() {
    var Cipher = plur.Cipher();
    var Ineffable = plur.Ineffable();

    expect(Cipher.or(Cipher).value.size).toBe(1);
    expect(Cipher.or(Cipher).value.has(0)).toBe(true);
    expect(Cipher.or(Cipher).value.size).toBe(1);
    expect(Cipher.or(Cipher).value.has(0)).toBe(true);

    expect(Cipher.or(Ineffable).value.size).toBe(1);
    expect(Cipher.or(Ineffable).value.has(NaN)).toBe(true);
    expect(Ineffable.or(Cipher).value.size).toBe(1);
    expect(Ineffable.or(Cipher).value.has(NaN)).toBe(true);
  });

  it("can validate AND operations against INEFFABLE", function() {
    var Ineffable = plur.Ineffable();

    expect(Ineffable.and(Ineffable).value.size).toBe(1);
    expect(Ineffable.and(Ineffable).value.has(NaN)).toBe(true);
  });

  it("can validate OR operations against INEFFABLE", function() {
    var Ineffable = plur.Ineffable();

    expect(Ineffable.or(Ineffable).value.size).toBe(1);
    expect(Ineffable.or(Ineffable).value.has(NaN)).toBe(true);
  });

  it("can validate NOT operations", function() {
    var True = plur.True();
    var False = plur.False();
    var Paradox = plur.Paradox();
    var Empty = plur.Empty();
    var Cipher = plur.Cipher();
    var Ineffable = plur.Ineffable();

    expect(True.not().value.size).toBe(1);
    expect(True.not().value.has(false)).toBe(true);

    expect(False.not().value.size).toBe(1);
    expect(False.not().value.has(true)).toBe(true);

    // TODO: Check if !Paradox == Empty.
    expect(Paradox.not().value.size).toBe(0);

    // TODO: Check if !Empty == Paradox.
    expect(Empty.not().value.size).toBe(2);
    expect(Empty.not().value.has(true)).toBe(true);
    expect(Empty.not().value.has(false)).toBe(true);

    expect(Cipher.not().value.size).toBe(1);
    expect(Cipher.not().value.has(true)).toBe(true);

    expect(Ineffable.not().value.size).toBe(1);
    expect(Ineffable.not().value.has(NaN)).toBe(true);
  });

  it("can validate IS operations", function() {
    var True = plur.True();
    var False = plur.False();
    var Paradox = plur.Paradox();
    var Empty = plur.Empty();
    var Cipher = plur.Cipher();
    var Ineffable = plur.Ineffable();

    expect(True.is(True)).toBe(true);
    expect(True.not().is(True)).toBe(false);

    expect(False.is(False)).toBe(true);
    expect(False.not().is(False)).toBe(false);

    expect(Paradox.is(Paradox)).toBe(true);
    expect(Paradox.not().is(Paradox)).toBe(false);

    expect(Empty.is(Empty)).toBe(true);
    expect(Empty.not().is(Empty)).toBe(false);

    expect(Cipher.is(Cipher)).toBe(true);
    expect(Cipher.not().is(Cipher)).toBe(false);

    // The Ineffable is not Ineffable.
    expect(Ineffable.is(Ineffable)).toBe(true);
    expect(Ineffable.not().is(Ineffable)).toBe(true);
  });
});

