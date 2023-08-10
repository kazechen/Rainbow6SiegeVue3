// 解決動態引入圖片時的路徑問題
const getImageUrl = (url) => {
  return new URL(`../assets/images/${url}`, import.meta.url).href;
};

export { getImageUrl };
