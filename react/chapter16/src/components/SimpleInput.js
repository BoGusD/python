import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");

  //input 요소에 해당되는 값을 얻고 싶을 때 event 객체를 사용하여 얻는다(자바스크립트가 브라우저에서 작동하는 방식 )
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
    //입력된 값을 초기화하고 싶을 때
    setEnteredName("");
    //ref로도 가능하긴함 >>리엑트가 아닌 바닐라코드로 DOM을조정하기에 이상적이지 않음
    // nameInputRef.current.value = "";
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          //입력된 값을 초기화하고 싶을 때
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
