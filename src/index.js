const _Nil = 0;
const _Max = true; //+Infinity;
const _Min = false; // -Infinity;
const _True = [_Max, _Max];
const _False = [_Min, _Min];
const _Paradox = [_Max, _Min];
const _Empty = [];
const _Cipher = [_Nil, _Nil];
const _Ineffable = [NaN, NaN];

function compact(_array) {
  // TODO: fix efficiency.
  return _array.filter( (item, pos, self) => self.indexOf(item) == pos );
};

function makeResult(_result) {
  return _PlurFactory(compact(_result).sort( (a, b) => a < b ));
};

function _PlurFactory (_value) {
  return {

    value: _value,

    and: function(_operand) {
           // TODO: Validate _operand.
           var result = [
             (this.value[0] && _operand.value[0]) && (this.value[0] && _operand.value[1]),
             (this.value[0] && _operand.value[0]) && (this.value[1] && _operand.value[1]),
             (this.value[1] && _operand.value[0]) && (this.value[0] && _operand.value[1]),
             (this.value[1] && _operand.value[0]) && (this.value[1] && _operand.value[1])
           ];

           return makeResult(result);
         },

    or:  function(_operand) {
           // TODO: Validate _operand.
           var result = [
             (this.value[0] || _operand.value[0]) && (this.value[0] || _operand.value[1]),
             (this.value[0] || _operand.value[0]) && (this.value[1] || _operand.value[1]),
             (this.value[1] || _operand.value[0]) && (this.value[0] || _operand.value[1]),
             (this.value[1] || _operand.value[0]) && (this.value[1] || _operand.value[1])
           ];

           return makeResult(result);
         },

    not: function() {
           // TODO: Validate _operand.
           var result = [!this.value[0], !this.value[1]];
           return makeResult(result);
         }
  };
};

export function True() {
  return _PlurFactory(_True);
};

export function False() {
  return _PlurFactory(_False);
};

export function Paradox() {
  return _PlurFactory(_Paradox);
};

export function Empty() {
  return _PlurFactory(_Empty);
};

export function Ineffable() {
  return _PlurFactory(_Ineffable);
};

export function Cipher() {
  return _PlurFactory(_Cipher);
};

export default Cipher();
