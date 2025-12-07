function part1(data) {
  const [fresh, available] = data.split("\n\n");

  const freshIdRanges = fresh
    .split("\n")
    .map((range) => range.split("-").map(Number));
  const availableIds = available.split("\n").map(Number);

  return availableIds.reduce((acc, id) => {
    for (let [min, max] of freshIdRanges) {
      if (id >= min && id <= max) {
        return acc + 1;
      }
    }
    return acc;
  }, 0);
}

module.exports = part1;
