import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    rest: restNameInput,
    // 함수를 다른 함수의 입력값으로 넣는 자바스크립트 기능
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    rest: restEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid(true);
  }

  //input 요소에 해당되는 값을 얻고 싶을 때 event 객체를 사용하여 얻는다(자바스크립트가 브라우저에서 작동하는 방식 )

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    // 다음과 같이 return을 해두면 조건에 만족하지 않을 때 뒤에 함수 실행X
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);

    if (!enteredEmailIsValid) {
      return;
    }

    //입력된 값을 초기화하고 싶을 때
    restNameInput();
    restEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control ";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          //입력된 값을 초기화하고 싶을 때
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">Your E-mail</label>
        <input
          type="email"
          id="email"
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          //입력된 값을 초기화하고 싶을 때
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
