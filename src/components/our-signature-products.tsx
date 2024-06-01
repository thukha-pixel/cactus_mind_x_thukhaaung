import Image from "next/image";
import MetaCardImg from "@/assets/images/MetalCards.png";
import PVCCardImg from "@/assets/images/PVCCards.png";
import PhoneCardImg from "@/assets/images/PhoneCards.png";

import styles from "./our-sigature-products.module.css";

const OurSignatureProduct: React.FC = () => {
  return (
    <>
      <h2 className={styles.h2}>Our Signature Products</h2>

      <div className={`${styles["products-list-card"]}`}>
        <div className={styles["product-card"]}>
          <h4 className={styles["h4"]}>Meta Business Card</h4>
          <div className={styles["product-image"]}>
            <Image
              src={PhoneCardImg}
              alt="Meta Cards"
              style={{ width: '100%', height: '100%' }}
              priority
            />
          </div>
          <p className={styles["product-info"]}>
            Lorem Ipsum Dolar <br />
            Lorem Ipsum <br />
            DolarLorem Ipsum Dolar <br />
            Lorem Ipsum <br />
            DolarLorem Ipsum Dolar <br />
            Lorem Ipsum Dolar <br />
          </p>
        </div>
        <div className={styles["product-card"]}>
          <h4 className={styles["h4"]}>PVC Business Card</h4>
          <div className={styles["product-image"]}>
            <Image
              src={PVCCardImg}
              alt="Meta Cards"
              style={{ width: '100%', height: '100%' }}
              priority
            />
          </div>
          <p className={styles["product-info"]}>
            Lorem Ipsum Dolar <br />
            Lorem Ipsum <br />
            DolarLorem Ipsum Dolar <br />
            Lorem Ipsum <br />
            DolarLorem Ipsum Dolar <br />
            Lorem Ipsum Dolar <br />
          </p>
        </div>
        <div className={styles["product-card"]}>
          <h4 className={styles["h4"]}>Phone Tags</h4>
          <div className={styles["product-image"]}>
            <Image
              src={PhoneCardImg} alt="Meta Cards"
              style={{ width: '100%', height: '100%' }}
              priority
            />
          </div>
          <p className={styles["product-info"]}>
            Lorem Ipsum Dolar <br />
            Lorem Ipsum <br />
            DolarLorem Ipsum Dolar <br />
            Lorem Ipsum <br />
            DolarLorem Ipsum Dolar <br />
            Lorem Ipsum Dolar <br />
          </p>
        </div>
        <div className={styles["product-card"]}>
          <h4 className={styles["h4"]}> Table Talkers</h4>
          <div className={styles["product-image"]}>
            <Image
              src={MetaCardImg}
              alt="Meta Cards"
              style={{ width: '100%', height: '100%' }}
              priority
            />
          </div>
          <p className={styles["product-info"]}>
            Lorem Ipsum Dolar <br />
            Lorem Ipsum <br />
            DolarLorem Ipsum Dolar <br />
            Lorem Ipsum <br />
            DolarLorem Ipsum Dolar <br />
            Lorem Ipsum Dolar <br />
          </p>
        </div>
      </div>
    </>
  );
};

export default OurSignatureProduct;