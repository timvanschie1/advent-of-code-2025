function part2(data) {
  const banks = data.split("\n");
  let answer = 0;

  banks.forEach((bank) => {
    const indexes = [];

    for (let digit = 1; digit <= 12; digit++) {
      const digitI = digit - 1;
      const maxIndex = bank.length - (12 - digitI - 1);

      const prevIndex = indexes[digitI - 1];
      const startIndex = prevIndex === undefined ? 0 : prevIndex + 1;

      let highestDigitI = startIndex;
      for (let i = startIndex; i < maxIndex; i++) {
        if (Number(bank[i]) > Number(bank[highestDigitI])) {
          highestDigitI = i;
        }
      }

      indexes.push(highestDigitI);
    }

    let joltage = "";
    indexes.forEach((index) => (joltage += bank[index]));

    answer += Number(joltage);
  });

  return answer;
}

module.exports = part2;
