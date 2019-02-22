export function debounce(func, delay) {
  let timer;

  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// 随机初始化
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// 洗牌函数打乱数组顺序
export function shuffle(arr) {
  let _arr = arr.slice(); // 深拷贝arr
  for (let i = 0; i < _arr.length; i++) {
    let j = getRandomInt(0, i);
    let t = _arr[i];
    _arr[i] = _arr[j];
    _arr[j] = t;
  }
  return _arr;
}
