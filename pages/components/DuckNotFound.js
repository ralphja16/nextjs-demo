import styles from "./DuckNotFound.module.css";

const DuckNotFound = () => {
  return (
    <h1 className={`font-bold text-4xl text-center ${styles.title}`}>
      404 - Duck Not Found
    </h1>
  );
};
export default DuckNotFound;
