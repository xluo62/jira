import { useEffect, useRef, useState } from "react";

const Test = () => {
  const ref = useRef();
  const [num, setNum] = useState(1);
  useEffect(() => {
    ref.current = 1;
  }, []);


  return <div>
    这是一个函数组件 - {ref.current}
  </div>
}