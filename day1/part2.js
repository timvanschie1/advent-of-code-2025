function part2(data) {
  const rows = data.split("\n");
  let answer = 0;
  let pos = 50;

  rows.forEach((instruction) => {
    const dir = instruction.slice(0, 1);
    const absoluteDistance = Number(instruction.slice(1));

    if (dir === "L") {
      const newAbsolutePos = pos - absoluteDistance;

      for (let i = pos - 1; i >= newAbsolutePos; i--) {
        if (i % 100 === 0) {
          answer++;
        }
      }
    } else {
      const newAbsolutePos = pos + absoluteDistance;

      for (let i = pos + 1; i <= newAbsolutePos; i++) {
        if (i % 100 === 0) {
          answer++;
        }
      }
    }

    const relativeDistance = absoluteDistance % 100;
    let newPos = dir === "L" ? pos - relativeDistance : pos + relativeDistance;

    if (dir === "L" && newPos < 0) {
      newPos = 100 + newPos;
    }

    if (dir === "R" && newPos > 99) {
      newPos = newPos - 100;
    }

    pos = newPos;
  });

  return answer;
}

module.exports = part2;
