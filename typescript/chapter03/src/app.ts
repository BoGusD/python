const button = document.querySelector("button")!;
//코딩문 끝에 ! 기본적으로 값이 존재하여 반환될 값이 있다고 알려주는 것

// 타입스크립트가 버튼을 찾아낸 것인지 여부를 확신하지 못하기 때문이다.
button.addEventListener("click", () => {
  console.log("Clicked!");
});
