const numberToBinary = (num: number, base = 2) => {
  return Number(num).toString(base);
};

const binaryToNumber = (num: string, base = 2) => {
  return parseInt(num, base);
};

const textToBinary = (text: string, base = 2) => {
  let output = "";
  text.split("").forEach((element) => {
    const char = element.charCodeAt(0).toString(base);
    output += ("00000000" + char).slice(-8).concat("");
  });
  return output;
};

console.log(textToBinary("Abbas Boazar"));
