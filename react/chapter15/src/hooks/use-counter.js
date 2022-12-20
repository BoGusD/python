import { useEffect, useState } from "react";

// 커스텀 훅 파일은 항상 use로 시작하는 상수로 설정해야된다.(재사용하려는 로직을 추가하면 됨)

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return counter;
};

export default useCounter;
