function part1(data) {
  const rowStrings = data.split("\n");
  const rows = rowStrings.map((row) => row.split(""));

  let answer = 0;

  for (let r = 0; r < rows.length; r++) {
    for (let c = 0; c < rows[r].length; c++) {
      if (rows[r][c] !== "@") continue;

      let adjacentRolls = 0;
      if (rows?.[r - 1]?.[c - 1] === "@") adjacentRolls++;
      if (rows?.[r - 1]?.[c] === "@") adjacentRolls++;
      if (rows?.[r - 1]?.[c + 1] === "@") adjacentRolls++;
      if (rows?.[r]?.[c - 1] === "@") adjacentRolls++;
      if (rows?.[r]?.[c + 1] === "@") adjacentRolls++;
      if (rows?.[r + 1]?.[c - 1] === "@") adjacentRolls++;
      if (rows?.[r + 1]?.[c] === "@") adjacentRolls++;
      if (rows?.[r + 1]?.[c + 1] === "@") adjacentRolls++;
      if (adjacentRolls < 4) answer += 1;
    }
  }

  return answer;
}

module.exports = part1;
