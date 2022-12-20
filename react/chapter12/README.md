### 리엑트가 백그라운드에서 어떻게 작용하는지 확인

### ReactDom

전체 Dom을 랜더링하지않고 랜더링하기전과 랜더링될 후 의 코드를 비교하여 바뀐 부분만 랜더링한다.

아래와 같은 코드를 테스트해보면서 p 태그 생성부분만 랜더링되는 부분을 확인

```jsx
import React from "react";
import { useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";

function App() {
  const [showPargraph, setShowPargraph] = useState(false);
  console.log("App Running");

  const toggleParagraphHandler = () => {
    setShowPargraph((prevShowParagraph) => !prevShowParagraph);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showPargraph && <p>This is new!</p>}
      <Button onClick={toggleParagraphHandler}>Toggle Pargraph!</Button>
    </div>
  );
}

export default App;
```

아래와 같은 경우에는 왜 DemoOutPut이 랜더링이 될까?

- DemoOutPut 컴포넌트에 대한 함수를 호출하고 Button 컴포넌트에 대한 함수를 호출하게 되어

이 것이 자식 컴포넌트들 역시 다시 실행되고 재평가되는 이유

- 부모 컴포넌트들이 변경되었기에 자식 컴포넌트도 변경된다.(부모 컴포넌트의 일부분)
- 하지만 컴포넌트가 재평가되었다고 해서 DOM이 실행되는 것은 아니다.

```jsx
import React from "react";
import { useState } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import "./App.css";

function App() {
  const [showPargraph, setShowPargraph] = useState(false);
  console.log("App Running");

  const toggleParagraphHandler = () => {
    setShowPargraph((prevShowParagraph) => !prevShowParagraph);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Toggle Pargraph!</Button>
    </div>
  );
}

export default App;
```

DemoOutPut.js

```jsx
import React from "react";

export default function DemoOutput(props) {
  console.log("DemoOutPut Running");
  return <p>{props.show ? "This is New!" : ""}</p>;
}
```

### React.memo

불필요한 랜더링을 최소화하는 hook

최적화가 가능하지만 해당 resource가 사용되기 때문에 모든 컴포넌트에 사용되지 않는다.

(가장 최상단에 있는 트리 컴포넌트나 메모리가 큰 컴포넌트에 사용됨) 

다음과 같은 양식으로 사용되면 클래스형 컴포넌트에서는 사용 불가

```jsx
import React from "react";

const DemoOutput = (props) => {
  console.log("DemoOutPut Running");
  return <p>{props.show ? "This is New!" : ""}</p>;
};

export default React.memo(DemoOutput);
```

다음과 같은 경우 React. memo를 적용시키고 외관상 보기에 변화되는 값이 없는데 랜더링이 일어나는 이유가 무엇인가?

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dd01b64e-785c-4fca-8385-b9ebe82dc998/Untitled.png)

### Button.js

```jsx
import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  console.log("Button RUNNING");
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
```

App.js

```jsx
import React from "react";
import { useState } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import "./App.css";

function App() {
  const [showPargraph, setShowPargraph] = useState(false);
  console.log("App Running");

  const toggleParagraphHandler = () => {
    setShowPargraph((prevShowParagraph) => !prevShowParagraph);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Toggle Pargraph!</Button>
    </div>
  );
}

export default App;
```

- 원인은 자바스크립트 특성 때문이다.
- 아래 코드에 의하여 특정 함수가 추가되어 이전함수와 비교하게 되지만

자바스크립트 특성상 [1,2,3]===[1,2,3] << false

props.onCLick === props.previous.onClick <<< false

```jsx
  const toggleParagraphHandler = () => {
    setShowPargraph((prevShowParagraph) => !prevShowParagraph);
  };
```

해당 해설 영상

[https://academind.com/tutorials/reference-vs-primitive-values](https://academind.com/tutorials/reference-vs-primitive-values)

 

### UseCallback

- 아래와 같은 로직을 실행하는 역할로 useMemo의 역할을 보완
- 리엑트 내부공간에 객체의 데이터를 저장해 함수 객체가 실행될 때마다 재사용할 수 있게 해준다.

### 다음와 같이 같은 메모리 안에서 같은 위치와 값을 보유했을 때 동일한 값으로 인식

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6c016eef-ec7d-4ba3-82c9-d88563c400ee/Untitled.png)

다음과 같은 양식으로 사용되며 함수 불변을 유지하고 싶을 때 사용

UseEffect와 동일하게 두번째 인자가 필요하며, 두번째 인자는 의존성 배열

```jsx
import React from "react";
import { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import "./App.css";

function App() {
  const [showPargraph, setShowPargraph] = useState(false);
  console.log("App Running");

  const toggleParagraphHandler = useCallback(() => {
    setShowPargraph((prevShowParagraph) => !prevShowParagraph);
  },[]);
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Toggle Pargraph!</Button>
    </div>
  );
}

export default App;
```

 React.memo가 이전값과 비교가 가능하게끔 usecallback을 활용하여 설정해서 Button console.log가 안뜸(Button 재랜더링 안됨)

(https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4c80fc34-7404-4017-bba9-728f1f82ba73/Untitled.png)

다음과 같은경우는  useCallback에 관한 블록 스코프 함수가 된다.

```jsx
const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowPargraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showPargraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling!</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Pargraph!</Button>
    </div>
  );
}

export default App;
```

### UseState

### 왜 useState가 실행됐을 때는 전체적으로 랜더링이 되지 않을까

- Usestate는 리엑트가 제공을 하고 리엑트 자체가 상태를 관리하고 컴포넌트와 연결을 관리하는데 useState에 전달된 기본값에 대해서는 한번만 고려되도록 처리한다. 또 첫 랜더링이 되었을 때 리엑트가 usestate가 어디 메모리에 저장되어있는지 기억한다. 그래서 useState에 해당되는 새로운 상태가 생성되지 않는 것이다.

### 리엑트가 상태에 대한 갱신을 하는 방법

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/31db77df-5752-4c90-8460-80d25d566345/Untitled.png)
