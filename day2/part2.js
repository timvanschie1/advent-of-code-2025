function part2(data) {
  let answer = 0;
  const ranges = data.split(",");

  ranges.forEach((range) => {
    const [min, max] = range.split("-").map(Number);

    for (let i = min; i <= max; i++) {
      const id = i.toString();

      for (let i = 1; i < id.length; i++) {
        const part = id.slice(0, i);

        if (id.split(part).filter(Boolean).length === 0) {
          answer += Number(id);
          break;
        }
      }
    }
  });

  return answer;
}

module.exports = part2;
