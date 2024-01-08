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
    headers: {
      accept: "*/*",
      "accept-language": "en-US,en;q=0.6",
      "cache-control": "no-cache",
      pragma: "no-cache",
      "sec-ch-ua": '"Not_A Brand";v="8", "Chromium";v="120", "Brave";v="120"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Linux"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "sec-gpc": "1",
      cookie:
        "connect.sid=s%3AVVYaw3mRZMCwQcNZnouVVI7DaRkHn5mb.DnS1q7%2FzdJE%2Fzu0fZquT8gNErli3HEznQYrRxJRHWRc",
      Referer: "https://exam.ankush.wiki/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
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
