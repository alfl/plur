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

  function _PlurFactory (_value) {
    return {

      value: _value,

      and: function(_operand) {
             // TODO: Validate _operand.
             var result = new Set();

             for (let item of this.value) {
               for (let oper of _operand.value) {
                 // TODO: Yup, using NaN was a bad idea.
                 if (Number.isNaN(item) || Number.isNaN(oper)) {
                   result.add(NaN);
                 } else if ((item === 0 || oper === 0) && (item === false || oper === false)) {
                   // TODO: This is a gross edge case for False && Cipher.
                   result.add(0);
                 } else {
                   result.add(item && oper);
                 }
               }
             }

             return _PlurFactory(result);

           },

      or:  function(_operand) {
             // TODO: Validate _operand.
             var result = new Set();

             for (let item of this.value) {
               for (let oper of _operand.value) {
                 // TODO: Yup, using NaN was a bad idea.
                 if (Number.isNaN(item) || Number.isNaN(oper)) {
                   result.add(NaN);
                 } else if ((item === 0 || oper === 0) && (item === false || oper === false)) {
                   // TODO: This is a gross edge case for False || Cipher.
                   result.add(0);
                 } else {
                   result.add(item || oper);
                 }
               }
             }

             // Edge case? Treat as set union.
             if (result.size === 0) {
               result = new Set([...this.value, ..._operand.value]);
             }

             return _PlurFactory(result);
           },

      not: function() {
             var result = [];

             // TODO: Gross special cases for Paradox and Empty.
             // Needs more elegance!
             if (this.value.size === 0) {
               result = _Paradox;
             } else if (this.value.size === 2) {
               result = _Empty;
             } else {
               for (let item of this.value) {
                 // TODO: NaN is bad.
                 if (Number.isNaN(item)) {
                   result.push(NaN);
                 } else {
                   result.push(!item);
                 }
               }
             }
             return _PlurFactory(new Set(result));
           }
    };
  };

  return {
    True: function True() {
      return _PlurFactory(new Set(_True));
    },

    False: function False() {
      return _PlurFactory(new Set(_False));
    },

    Paradox: function Paradox() {
      return _PlurFactory(new Set(_Paradox));
    },

    Empty: function Empty() {
      return _PlurFactory(new Set(_Empty));
    },

    Ineffable: function Ineffable() {
      return _PlurFactory(new Set(_Ineffable));
    },

    Cipher: function Cipher() {
      return _PlurFactory(new Set(_Cipher));
    }
  };

}();
