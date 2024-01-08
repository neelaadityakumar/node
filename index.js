const morseCode = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
};

let inputArray = [];

const convertToArray = (arrayOfObjects) => {
  const convertedArray = arrayOfObjects.map((obj) => obj.data);
  return convertedArray;
};

let count = 1;
let resulted = [];
let timer = setInterval(async () => {
  if (count == 25) {
    clearInterval(timer);
  }
  let resp2 = await fetch(`https://exam.ankush.wiki/data?part=${count++}`, {
    body: null,
    method: "GET",
  });
  resulted.push(resp2);
}, 4000);
const resultArray = convertToArray(resulted);

const decodeMorse = (sequence) => {
  let decoded = "";
  sequence.forEach((symbol) => {
    if (symbol === "➡➡➡") {
      decoded += " ";
    } else {
      decoded += morseCode[symbol] || "";
    }
  });
  return decoded;
};

let ans = "";
resultArray.forEach((part, i) => {
  ans += decodeMorse(part);
  console.log("i", i, ans);
});
