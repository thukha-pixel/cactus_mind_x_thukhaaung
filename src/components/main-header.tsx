import Image from "next/image";
import NavLink from "./nav-link";

import styles from "./main-header.module.css";

const MainHeader: React.FC = () => {
  return (
    <header className={styles.nav} >
      <Image
        src="./shre-logo.svg"
        alt="Shre Logo"
        width={180}
        height={37}
        priority
      />
      <div className={styles["menu-ul"]}>
        <div>
          <NavLink href="/">Home</NavLink>
        </div>
        <div>
          <NavLink href="/pricing">Pricing</NavLink>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;