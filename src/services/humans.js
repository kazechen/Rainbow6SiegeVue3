import axios from "axios";

// 取得特勤幹員資料
const getHumans = () => {
  const url =
    "https://kazechen.github.io/Rainbow6SiegeVue3/files/operators.json";
  try {
    return axios.get(url);
  } catch (error) {
    throw new Error("無法取得特勤幹員資料");
  }
};

export { getHumans };
