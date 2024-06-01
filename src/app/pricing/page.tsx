import HowItWork from "@/components/how-it-work";
import Image from "next/image";
import MetalCardImg from '@/assets/images/MetalCards.png';
import OurSignatureProduct from "@/components/our-signature-products";
import PVCCardImg from '@/assets/images/PVCCards.png';
import PhoneCardImg from '@/assets/images/PhoneCards.png';
import ThreeStackArticle from "@/components/three-stack-articles";

import styles from "./page.module.css";

const Pricing: React.FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles['pricing-our-plans']}>
        <h2 className={styles.h2}>Our Plans</h2>
        <ThreeStackArticle />
      </section>

      <section className={styles['pricing-dbc']}>
        <div className={styles['image']}>
          <Image
            src={PhoneCardImg}
            alt="Phone Cards"
            style={{ width: '100%', height: '100%' }}
            priority
          />
        </div>
        <div className={styles['center']}>
          <h3 className={styles.h3}>Digital Business Cards</h3>
          <p className={styles["buy-now-info"]}>
            Impress everyone you meet with the <br />
            quickest and most effective way to share <br />
            contact details, social media links, and more! <br />
            Designed for both individuals and teams.
          </p>
          <button className={styles['buy-now-btn']}>Get Started</button>
        </div>
      </section>

      <section className={styles['pricing-dbc']}>
        <div className={styles['center']}>
          <h3 className={styles.h3}>From Lead to Deal™</h3>
          <p className={styles["buy-now-info"]}>
            Impress everyone you meet with the <br />
            quickest and most effective way to share <br />
            contact details, social media links, and more! <br />
            Designed for both individuals and teams.
          </p>
          <button className={styles['buy-now-btn']}>Get Started</button>
        </div>
        <div className={styles['image']}>
          <Image
            src={PVCCardImg}
            alt="Meta Cards"
            style={{ width: '100%', height: '100%' }}
            priority
          />
        </div>
      </section>

      <section className={styles['pricing-dbc']}>
        <div className={styles['image']}>
          <Image
            src={MetalCardImg}
            alt="Meta Cards"
            style={{ width: '100%', height: '100%' }}
            priority
          />
        </div>
        <div className={styles['center']}>
          <h3 className={styles.h3}>Seamless CRM Integrations</h3>
          <p className={styles["buy-now-info"]}>
            Impress everyone you meet with the <br />
            quickest and most effective way to share <br />
            contact details, social media links, and more! <br />
            Designed for both individuals and teams.
          </p>
          <button className={styles['buy-now-btn']}>Get Started</button>
        </div>
      </section>

      <section>
        <HowItWork />
      </section>

      <section className={styles['pricing-dbc']}>
        <div className={styles['center']}>
          <h3 className={styles.h3}>The cost-effective networking
            solution</h3>
          <p className={styles["buy-now-info"]}>
            Impress everyone you meet with the <br />
            quickest and most effective way to share <br />
            contact details, social media links, and more! <br />
            Designed for both individuals and teams.
          </p>
        </div>
        <div className={styles['image']}>
          <Image
            src={PhoneCardImg}
            alt="Meta Cards"
            style={{ width: '100%', height: '100%' }}
            priority
          />
        </div>
      </section>

      <section className={styles['pricing-dbc']}>
        <div className={styles['image']}>
          <Image
            src={MetalCardImg}
            alt="Meta Cards"
            style={{ width: '100%', height: '100%' }}
            priority
          />
        </div>
        <div className={styles['center']}>
          <h3 className={styles.h3}>Waste less. Save more</h3>
          <p className={styles["buy-now-info"]}>
            Impress everyone you meet with the <br />
            quickest and most effective way to share <br />
            contact details, social media links, and more! <br />
            Designed for both individuals and teams.
          </p>
        </div>
      </section>

      <section>
        <OurSignatureProduct />
      </section>
    </div>
  );
};

export default Pricing;