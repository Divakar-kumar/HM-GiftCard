import styles from "./Layout.module.css";
import Image from "next/image";
import OccassionMenu from "../../component/OccassionMenu/OccassionMenu";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <div className={styles.headerLogo}>
          <Image
            src="/images/logo.jpeg" // Route of the image file
            height={44} // Desired size with correct aspect ratio
            width={68} // Desired size with correct aspect ratio
            alt="Logo"
          />
        </div>
      </header>
      <div className={styles.page}>
        <section className={styles.leftSection}>
          {/* <OccassionMenu></OccassionMenu> */}
        </section>
        <section className={styles.container}>{children}</section>
        <section className={styles.rightSection}></section>
      </div>
    </div>
  );
};

export default Layout;
