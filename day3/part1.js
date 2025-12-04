function part1(data) {
  const banks = data.split("\n");
  let answer = 0;

  banks.forEach((bank) => {
    let highestFirstDigitI = 0;

    for (let i = 1; i < bank.length - 1; i++) {
      if (Number(bank[i]) > Number(bank[highestFirstDigitI])) {
        highestFirstDigitI = i;
      }
    }

    let highestSecondDigitI = highestFirstDigitI + 1;

    for (let i = highestSecondDigitI; i < bank.length; i++) {
      if (Number(bank[i]) > Number(bank[highestSecondDigitI])) {
        highestSecondDigitI = i;
      }
    }

    const joltage = bank[highestFirstDigitI] + bank[highestSecondDigitI];

    answer += Number(joltage);
  });

  return answer;
}

module.exports = part1;
