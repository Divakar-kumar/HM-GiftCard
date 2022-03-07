import styles from "./Layout.module.css";
import OccassionMenu from "../../component/OccassionMenu/OccassionMenu";

const Layout = ({ children }) => {
  return (
    <div className={styles.page}>
      <section className={styles.leftSection}>
        {/* <OccassionMenu></OccassionMenu> */}
      </section>
      <section className={styles.container}>{children}</section>
      <section className={styles.rightSection}></section>
    </div>
  );
};

export default Layout;
