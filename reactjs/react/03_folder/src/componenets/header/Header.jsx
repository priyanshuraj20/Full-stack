import styles from  "./Header.module.css";

const Header = () => {
  return (
    <div>
      <div className={styles.btn}>
        <button>LLogin</button>
      </div>
      <h1>Priyanshu Agrawal</h1>
    </div>
  );
};

export default Header;
