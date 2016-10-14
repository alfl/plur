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
                   result.add(false);
                 } else if ((item === 0 || oper === 0) && (item === true || oper === true)) {
                   // TODO: This is a gross edge case for Paradox && Cipher.
                   result.add(false);
                 } else {
                   result.add(item && oper);
                 }
               }
             }

             // Edge case: figure out if we should NaN this...
             if (result.size === 0) {
               if (this.value.has(NaN) || _operand.value.has(NaN)) {
                 result.add(NaN);
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
                   result.add(false);
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

      is:  function(_operand) {
             // TODO: Validate _operand.
             // Handle the empty set special case. If the sets differ in size
             // they cannot be equal. They must either have identical elements,
             // or be the empty set, to be equal.
             if (this.value.size !== _operand.value.size) return false;
             for (let item of this.value.values()) if (!_operand.value.has(item)) return false;
             return true;
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
