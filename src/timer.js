import React from "react";

function TimerComponet() {
  //1. time에는 기본 값으로 0이 들어갑니다. 신기해 보이는 문법은 ES6의 destructuring입니다 (위에서 언급함)
  const [time, setTime] = React.useState(0);
  console.log("Component 업데이트!"); // time이 업데이트될 때마다 계속 호출됩니다.
  function updateTime() {
    setTime(time + 1);
  }
  function reset() {
    setTime(0);
  }
  return (
    <div>
      <h3>{time}회</h3>
      {/* 클릭할 때마다 setTime으로 state를 업데이트해줍니다. */}
      <button onClick={updateTime}>1씩 올려주세요</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default TimerComponet;
