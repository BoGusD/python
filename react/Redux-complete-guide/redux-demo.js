const redux = require("redux");

// 리듀서 함수
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
};
// 어떤 리듀서가 그 저장소를 변경하는지 저장소가 알아야 함
const store = redux.createStore(counterReducer);

//구독
const counterSubscriber = () => {
  //getState()는 createStore()로 생성된 저장소에서 사용할 수 있는 메소드
  const latestState = store.getState();
  console.log(latestState);
};

//counterRedcuer를 실행하지 않고 가리키기만 한 것과 비슷한다.
// 리듀서와 구독 함수를 모두 리덕스가 실행하기 때문이다.
store.subscribe(counterSubscriber);

//action
//type은 자바스크립트 내장 객체
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
