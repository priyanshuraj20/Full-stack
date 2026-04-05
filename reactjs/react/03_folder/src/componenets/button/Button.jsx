import styles from "./Button.module.css";
const Button = () => {
  return (
    <div className={styles.btn}>
      <h1>Login button</h1>
      <button>Login</button>
    </div>
  );
};

export default Button;
