var tap = require('tap')
var plur = require('../src/plur.js')

var True = plur.True()
var False = plur.False()
var Paradox = plur.Paradox()
var Empty = plur.Empty()
var Cipher = plur.Cipher()
var Ineffable = plur.Ineffable()

tap.test('Verify structure of values', function (t) {
  t.equal(True.value.size, 1, 'Truth value set is of size 1.')
  t.ok(True.value.has(true), 'Truth value set contains true.')
  t.pass(...True.iter())

  t.equal(False.value.size, 1, 'False value set is of size 1.')
  t.ok(False.value.has(false), 'False value set contains false.')

  t.equal(Paradox.value.size, 2, 'Paradox value set is of size 2.')
  t.ok(Paradox.value.has(true), 'Paradox value set contains true.')
  t.ok(Paradox.value.has(false), 'Paradox value set contains false.')

  t.equal(Empty.value.size, 0, 'Empty value set is of size 0.')

  t.equal(Cipher.value.size, 1, 'Cipher value set is of size 1.')
  t.ok(Cipher.value.has(0), 'Cipher value set contains zero.')

  t.equal(Ineffable.value.size, 1, 'Ineffable value set is of size 1.')
  t.ok(Ineffable.value.has(NaN), 'Ineffable value set contains NaN.')

  t.end()
})

tap.test('Verify IS comparisons', function (t) {
  t.ok(True.is(True), 'True is True')
  t.ok(False.is(False), 'False is False')
  t.ok(Paradox.is(Paradox), 'Paradox is Paradox')
  t.ok(Empty.is(Empty), 'Empty is Empty')
  t.ok(Cipher.is(Cipher), 'Cipher is Cipher')
  t.ok(Ineffable.is(Ineffable), 'Ineffable is Ineffable')
  t.end()
})

tap.test('Verify AND operations against TRUE', function (t) {
  t.ok(True.and(True).is(True), 'True AND True IS True')
  t.ok(True.and(False).is(False), 'True AND False IS False')
  t.ok(False.and(True).is(False), 'False AND True IS False')
  t.ok(True.and(Paradox).is(Paradox), 'True AND Paradox IS Paradox')
  t.ok(Paradox.and(True).is(Paradox), 'Paradox AND True IS Paradox')
  t.ok(True.and(Empty).is(Empty), 'True AND Empty IS Empty')
  t.ok(Empty.and(True).is(Empty), 'Empty AND True IS Empty')
  t.ok(True.and(Cipher).is(False), 'True AND Cipher IS False')
  t.ok(Cipher.and(True).is(False), 'Cipher AND True IS False')
  t.ok(True.and(Ineffable).is(Ineffable), 'True AND Ineffable IS Ineffable')
  t.ok(Ineffable.and(True).is(Ineffable), 'Ineffable AND True IS Ineffable')
  t.end()
})

tap.test('Verify OR operations against TRUE', function (t) {
  t.ok(True.or(True).is(True), 'True OR True IS True')
  t.ok(True.or(False).is(True), 'True OR False IS True')
  t.ok(False.or(True).is(True), 'False OR True IS True')
  t.ok(True.or(Paradox).is(True), 'True OR Paradox IS True')
  t.ok(Paradox.or(True).is(True), 'Paradox OR True IS True')
  t.ok(True.or(Empty).is(True), 'True OR Empty IS True')
  t.ok(Empty.or(True).is(True), 'Empty OR True IS True')
  t.ok(True.or(Cipher).is(True), 'True OR Cipher IS True')
  t.ok(Cipher.or(True).is(True), 'Cipher OR True IS True')
  t.ok(True.or(Ineffable).is(Ineffable), 'True OR Ineffable IS Ineffable')
  t.ok(Ineffable.or(True).is(Ineffable), 'Ineffable OR True IS Ineffable')
  t.end()
})

tap.test('Verify AND operations against FALSE', function (t) {
  t.ok(False.and(False).is(False), 'False AND False IS False')
  t.ok(False.and(Paradox).is(False), 'False AND Paradox IS False')
  t.ok(Paradox.and(False).is(False), 'Paradox AND False IS False')
  t.ok(False.and(Empty).is(Empty), 'False AND Empty IS Empty')
  t.ok(Empty.and(False).is(Empty), 'Empty AND False IS Empty')
  t.ok(False.and(Cipher).is(False), 'False AND Cipher IS False')
  t.ok(Cipher.and(False).is(False), 'Cipher AND False IS False')
  t.ok(False.and(Ineffable).is(Ineffable), 'False AND Ineffable IS Ineffable')
  t.ok(Ineffable.and(False).is(Ineffable), 'Ineffable AND False IS Ineffable')
  t.end()
})

tap.test('Verify OR operations against FALSE', function (t) {
  t.ok(False.or(False).is(False), 'False OR False IS False')
  t.ok(False.or(Paradox).is(Paradox), 'False OR Paradox IS Paradox')
  t.ok(Paradox.or(False).is(Paradox), 'Paradox OR False IS Paradox')
  t.ok(False.or(Empty).is(False), 'False OR Empty IS False')
  t.ok(Empty.or(False).is(False), 'Empty OR False IS False')
  t.ok(False.or(Cipher).is(False), 'False OR Cipher IS False')
  t.ok(Cipher.or(False).is(False), 'Cipher OR False IS False')
  t.ok(False.or(Ineffable).is(Ineffable), 'False OR Ineffable IS Ineffable')
  t.ok(Ineffable.or(False).is(Ineffable), 'Ineffable OR False IS Ineffable')
  t.end()
})

tap.test('Verify AND operations against PARADOX', function (t) {
  t.ok(Paradox.and(Paradox).is(Paradox), 'Paradox AND Paradox IS Paradox')
  t.ok(Paradox.and(Empty).is(Empty), 'Paradox AND Empty IS Empty')
  t.ok(Empty.and(Paradox).is(Empty), 'Empty AND Paradox IS Empty')
  t.ok(Paradox.and(Cipher).is(False), 'Paradox AND Cipher IS False')
  t.ok(Cipher.and(Paradox).is(False), 'Cipher AND Paradox IS False')
  t.ok(Paradox.and(Ineffable).is(Ineffable), 'Paradox AND Ineffable IS Ineffable')
  t.ok(Ineffable.and(Paradox).is(Ineffable), 'Ineffable AND Paradox IS Ineffable')
  t.end()
})

tap.test('Verify OR operations against PARADOX', function (t) {
  t.ok(Paradox.or(Paradox).is(Paradox), 'Paradox OR Paradox IS Paradox')
  t.ok(Paradox.or(Empty).is(Paradox), 'Paradox OR Empty IS Paradox')
  t.ok(Empty.or(Paradox).is(Paradox), 'Empty OR Paradox IS Paradox')
  t.ok(Paradox.or(Cipher).is(Paradox), 'Paradox OR Cipher IS Paradox')
  t.ok(Cipher.or(Paradox).is(Paradox), 'Cipher OR Paradox IS Paradox')
  t.ok(Paradox.or(Ineffable).is(Ineffable), 'Paradox OR Ineffable IS Ineffable')
  t.ok(Ineffable.or(Paradox).is(Ineffable), 'Ineffable OR Paradox IS Ineffable')
  t.end()
})

tap.test('Verify AND operations against EMPTY', function (t) {
  t.ok(Empty.and(Empty).is(Empty), 'Empty AND Empty IS Empty')
  t.ok(Empty.and(Cipher).is(Empty), 'Empty AND Cipher IS Empty')
  t.ok(Cipher.and(Empty).is(Empty), 'Cipher AND Empty IS Empty')
  t.ok(Empty.and(Ineffable).is(Ineffable), 'Empty AND Ineffable IS Ineffable')
  t.ok(Ineffable.and(Empty).is(Ineffable), 'Ineffable AND Empty IS Ineffable')
  t.end()
})

tap.test('Verify OR operations against EMPTY', function (t) {
  t.ok(Empty.or(Empty).is(Empty), 'Empty OR Empty IS Empty')
  t.ok(Empty.or(Cipher).is(Cipher), 'Empty OR Cipher IS Cipher')
  t.ok(Cipher.or(Empty).is(Cipher), 'Cipher OR Empty IS Cipher')
  t.ok(Empty.or(Ineffable).is(Ineffable), 'Empty OR Ineffable IS Ineffable')
  t.ok(Ineffable.or(Empty).is(Ineffable), 'Ineffable OR Empty IS Ineffable')
  t.end()
})

tap.test('Verify AND operations against CIPHER', function (t) {
  t.ok(Cipher.and(Cipher).is(Cipher), 'Cipher AND Cipher IS Cipher')
  t.ok(Ineffable.and(Cipher).is(Ineffable), 'Ineffable AND Cipher IS Ineffable')
  t.ok(Cipher.and(Ineffable).is(Ineffable), 'Cipher AND Ineffable IS Ineffable')
  t.end()
})

tap.test('Verify OR operations against CIPHER', function (t) {
  t.ok(Cipher.or(Cipher).is(Cipher), 'Cipher OR Cipher IS Cipher')
  t.ok(Ineffable.or(Cipher).is(Ineffable), 'Ineffable OR Cipher Is Ineffable')
  t.ok(Cipher.or(Ineffable).is(Ineffable), 'Cipher OR Ineffable Is Ineffable')
  t.end()
})

tap.test('Verify AND operations against INEFFABLE', function (t) {
  t.ok(Ineffable.and(Ineffable).is(Ineffable), 'Ineffable AND Ineffable IS Ineffable')
  t.end()
})

tap.test('Verify OR operations against INEFFABLE', function (t) {
  t.ok(Ineffable.or(Ineffable).is(Ineffable), 'Ineffable OR Ineffable IS Ineffable')
  t.end()
})

tap.test('Verify NOT operations', function (t) {
  t.ok(True.not().is(False), 'Not True Is False')
  t.ok(False.not().is(True), 'Not False Is True')
  t.ok(Paradox.not().is(Empty), 'Not Paradox Is Empty')
  t.ok(Empty.not().is(Paradox), 'Not Empty Is Paradox')
  t.ok(Cipher.not().is(True), 'Not Cipher Is True')
  t.ok(Ineffable.not().is(Ineffable), 'Not Ineffable Is Ineffable')
  t.end()
})

