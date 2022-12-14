import classes from "./Header.module.css";
import mealsImg from "../../assets/meals.jpg";

export default function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="음식 뷔페 이미지" />
      </div>
    </>
  );
}
