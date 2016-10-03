module.exports = function plur() {

  var _Nil = 0;
  var _Max = true; //+Infinity;
  var _Min = false; // -Infinity;
  var _True = [_Max, _Max];
  var _False = [_Min, _Min];
  var _Paradox = [_Max, _Min];
  var _Empty = [];
  var _Cipher = [_Nil, _Nil];
  var _Ineffable = [NaN, NaN];

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

  return {
    True: function True() {
      return _PlurFactory(_True);
    },

    False: function False() {
      return _PlurFactory(_False);
    },

    Paradox: function Paradox() {
      return _PlurFactory(_Paradox);
    },

    Empty: function Empty() {
      return _PlurFactory(_Empty);
    },

    Ineffable: function Ineffable() {
      return _PlurFactory(_Ineffable);
    },

    Cipher: function Cipher() {
      return _PlurFactory(_Cipher);
    }
  };

}();
