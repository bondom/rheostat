export default {
  getPosition(value, min, max, params) {
    if (params && params.plural) {
      const { idx, handlePercentage } = params;
      if (idx === 0) {
        return ((value - min) / (max - min)) * (100 - handlePercentage);
      }

      if (idx === 1) {
        return ((value - min) / (max - min)) * (100 - handlePercentage) + handlePercentage;
      }
    }

    return ((value - min) / (max - min)) * 100;
  },

  getValue(pos, min, max, params) {
    if (params && params.plural) {
      const { idx, handlePercentage } = params;
      if (idx === 0) {
        const decimal = pos / (100 - handlePercentage);

        if (pos === 0) {
          return min;
        }

        if (pos >= 100 - handlePercentage) {
          return max;
        }

        return Math.round((max - min) * decimal + min);
      }

      if (idx === 1) {
        const decimal = (pos - handlePercentage) / (100 - handlePercentage);

        if (pos <= handlePercentage) {
          return min;
        }

        if (pos === 100) {
          return max;
        }

        return Math.round((max - min) * decimal + min);
      }
    }

    const decimal = pos / 100;

    if (pos === 0) {
      return min;
    }

    if (pos === 100) {
      return max;
    }

    return Math.round((max - min) * decimal + min);
  },
};
