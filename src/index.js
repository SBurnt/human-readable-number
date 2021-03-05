module.exports = function toReadable(number) {
  const units = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };

  const dozens = {
    0: "ten",
    1: "eleven",
    2: "twelve",
    3: "thirteen",
    4: "fourteen",
    5: "fifteen",
    6: "sixteen",
    7: "seventeen",
    8: "eighteen",
    9: "nineteen",
  };

  const wholeDozens = {
    0: "",
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety",
  };

  const [unit, dozen, hundred] = number.toString().split("").reverse();

  let answ = "";

  if (hundred) {
    answ = answ + units[hundred] + " hundred ";
  }

  if (dozen) {
    if (dozen != 1) {
      answ = answ + wholeDozens[dozen] + " ";

      if (unit != 0) {
        answ = answ + units[unit];
      }
    }

    if (dozen == 1) {
      answ = answ + dozens[unit] + " ";
    }
  } else {
    answ = units[unit];
  }

  return answ.replace("  ", " ").trim();
};
