"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  getPosition: function getPosition(value, min, max, params) {
    if (params && params.plural) {
      var idx = params.idx,
          handlePercentage = params.handlePercentage;

      if (idx === 0) {
        return (value - min) / (max - min) * (100 - handlePercentage);
      }

      if (idx === 1) {
        return (value - min) / (max - min) * (100 - handlePercentage) + handlePercentage;
      }
    }

    return (value - min) / (max - min) * 100;
  },
  getValue: function getValue(pos, min, max, params) {
    if (params && params.plural) {
      var idx = params.idx,
          handlePercentage = params.handlePercentage;

      if (idx === 0) {
        var _decimal = pos / (100 - handlePercentage);

        if (pos === 0) {
          return min;
        }

        if (pos >= 100 - handlePercentage) {
          return max;
        }

        return Math.round((max - min) * _decimal + min);
      }

      if (idx === 1) {
        var _decimal2 = (pos - handlePercentage) / (100 - handlePercentage);

        if (pos <= handlePercentage) {
          return min;
        }

        if (pos === 100) {
          return max;
        }

        return Math.round((max - min) * _decimal2 + min);
      }
    }

    var decimal = pos / 100;

    if (pos === 0) {
      return min;
    }

    if (pos === 100) {
      return max;
    }

    return Math.round((max - min) * decimal + min);
  }
};
exports["default"] = _default;