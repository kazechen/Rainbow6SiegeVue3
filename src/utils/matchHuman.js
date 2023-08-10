import operators from "../files/operators.json";

const humanData = operators.slice(0, 24);
const humanList = [
  "Sledge",
  "Smoke",
  "Mute",
  "Ash",
  "Thermite",
  "Castle",
  "Pulse",
  "Twitch",
  "Rook",
  "Fuze",
  "Glaz",
  "Kapkan",
  "IQ",
  "Jäger",
  "Bandit",
  "Valkyrie",
];
const human = {}; // 儲存特勤幹員資料中的 Nickname, index
humanData.forEach((item) => {
  if (humanList.includes(item.Nickname)) {
    human[item.Nickname] = item.index;
  }
});

const matchHuman = (arr = []) => {
  const num = arr.join("");

  switch (true) {
    case num <= 1133:
      return [human.Ash, human.Mute];
    case num <= 1112:
      return [human.Ash, human.Pulse];
    case num <= 1231:
      return [human.Bandit, human.Pulse];
    case num <= 1233:
      return [human.Bandit, human.Rook];
    case num <= 1323:
      return [human.Castle, human.Rook];
    case num <= 1333:
      return [human.Sledge, human.Castle];
    case num <= 2133:
      return [human.Sledge, human.Fuze];
    case num <= 2213:
      return [human.Fuze, human.Smoke];
    case num <= 2233:
      return [human.Glaz, human.Smoke];
    case num <= 2321:
      return [human.Glaz, human.Thermite];
    case num <= 3123:
      return [human.IQ, human.Thermite];
    case num === 3131:
      return [human.Thermite, human.Jäger];
    case num <= 3231:
      return [human.Twitch, human.Jäger];
    case num === 3232:
      return [human.Twitch, human.Kapkan];
    case num <= 3331:
      return [human.Valkyrie, human.Kapkan];
    case num <= 3333:
      return [human.Mute, human.Valkyrie];
  }
};

export { matchHuman };
