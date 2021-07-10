//在一个函数里 改变传入的对象本身是不好的
//当value为0的时候 0是一个有效的数字 不能被删掉。
function isFalsy(value) {
  return value === 0 ? false : !value;
}

export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });

  return result;
};
