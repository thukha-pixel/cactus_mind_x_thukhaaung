import Image from "next/image";
import MetaCardImg from "@/assets/images/MetalCards.png";
import PVCCardImg from "@/assets/images/PVCCards.png";
import PhoneCardImg from "@/assets/images/PhoneCards.png";

import styles from "./how-it-work.module.css";

const HowItWork: React.FC = () => {
  return (
    <>
      <h2 className={styles.h2}>How it works</h2>
      <div className={styles["how-it-works-card"]}>
        <div className={styles["how-it-works-image"]}>
          <Image
            src={PhoneCardImg}
            alt="Meta Cards"
            style={{ width: '100%', height: '100%' }}
            priority
          />
        </div>
        <div className={styles["how-it-works-image"]}>
          <Image
            src={PVCCardImg}
            alt="Meta Cards"
            style={{ width: '100%', height: '100%' }}
            priority
          />
        </div>
        <div className={styles["how-it-works-image"]}>
          <Image
            src={PhoneCardImg}
            alt="Meta Cards"
            style={{ width: '100%', height: '100%' }}
            priority
          />
        </div>
        <div className={styles["how-it-works-image"]}>
          <Image
            src={MetaCardImg}
            alt="Meta Cards"
            style={{ width: '100%', height: '100%' }}
            priority
          />
        </div>
      </div>
    </>
  );
};

export default HowItWork;