function part2(data) {
  const [fresh] = data.split("\n\n");

  const freshIdRanges = fresh
    .split("\n")
    .map((range) => range.split("-").map(Number));

  const filteredFreshIdRanges = freshIdRanges.filter(([min, max], i) => {
    const isFullyContainedInOtherRange = freshIdRanges.some(
      ([otherMin, otherMax], j) => {
        return j !== i && min >= otherMin && max <= otherMax;
      },
    );

    return !isFullyContainedInOtherRange;
  });

  return filteredFreshIdRanges.reduce((acc, [min, max], i) => {
    let actualMin = min;
    let actualMax = max;

    for (let k = 0; k < i; k++) {
      const [rangeMin, rangeMax] = filteredFreshIdRanges[k];

      const possibleNewMin =
        rangeMax >= actualMin && rangeMin <= actualMin
          ? rangeMax + 1
          : undefined;

      const possibleNewMax =
        rangeMin <= actualMax && rangeMax >= actualMax
          ? rangeMin - 1
          : undefined;

      actualMin = possibleNewMin !== undefined ? possibleNewMin : actualMin;
      actualMax = possibleNewMax !== undefined ? possibleNewMax : actualMax;
    }

    if (actualMax - actualMin >= 0) {
      return acc + (actualMax - actualMin) + 1;
    }

    return acc;
  }, 0);
}

module.exports = part2;
