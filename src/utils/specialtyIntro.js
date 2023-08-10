const specialtyZhTwName = (arr) => {
  if (!arr) return;

  const ZhTwName = {
    trapper: "陷捕手",
    intel: "情資",
    "anti-gadget": "反裝備",
    support: "支援",
    "front line": "前線",
    "map control": "地圖控制",
    "anti-entry": "反衝鋒",
    breach: "突破",
    "crowd control": "群體控制",
  };
  let result = [];
  arr.forEach((item) => {
    result.push(ZhTwName[item]);
  });

  return result.join("、");
};

// 專長描述
const specialtyIntro = {
  trapper:
    "陷捕手可以用獨特的方式保護目標，並且可以在不必處於現場的情況下，使用具有功能性的能力與裝備。",
  intel:
    "情資特勤幹員可以使用能力、裝備與觀測工具，透過聽覺或視覺回饋提供隊友關於敵方的資訊。",
  "anti-gadget":
    "反裝備特勤幹員可以摧毀或癱瘓對手的裝備，藉此削弱對手並保護隊友。",
  support:
    "支援特勤幹員可以為隊友提供實質保護，或是擁有能完成目標的額外功能性。",
  "front line":
    "前線特勤幹員可以透過能力與裝備的幫助，擔任通過門口的第一線，藉此確保隊友能安全進入室內與抵達目標處。",
  "map control":
    "地圖控制特勤幹員可以殲滅在地圖上游擊的對手，並針對側擊與室外側襲提供實質保護。",
  "anti-entry":
    "反衝鋒特勤幹員可以利用能力、裝備與強化物防止對手進入室內與抵達目標處。",
  breach:
    "突破特勤幹員可以在可破壞或強化表面製造入口和視線，暴露對手位置並協助隊友完成目標。",
  "crowd control":
    "群體控制特勤幹員可以使用具有實質效果的能力與裝備，如減緩行動力或暈眩來干擾對手。",
};

export { specialtyZhTwName, specialtyIntro };
