//在一个函数里 改变传入的对象本身是不好的
//当value为0的时候 0是一个有效的数字 不能被删掉。
import { useEffect, useState } from "react";

function isFalsy(value: any) {
  return value === 0 ? false : !value;
}

export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });

  return result;
};

/**
 * custom hook
 */

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = <P>(param: P, delay?: number) => {
  const [debouncedParam, setDebouncedParam] = useState(param);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedParam(param);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [param, delay]);
  return debouncedParam;
};
