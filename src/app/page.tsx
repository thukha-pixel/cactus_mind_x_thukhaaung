import CommonImg from '@/assets/images/Common.png';
import FAQ from "@/components/faq";
import HowItWork from "@/components/how-it-work";
import Image from "next/image";
import MetalCardImg from '@/assets/images/MetalCards.png';
import OurSignatureProduct from "@/components/our-signature-products";
import PVCCardImg from '@/assets/images/PVCCards.png';
import PhoneCardImg from '@/assets/images/PhoneCards.png';
import Tab from "@/components/tab";
import TableTalkImg from '@/assets/images/TableTalkCards.png';
import ThreeStackArticle from "@/components/three-stack-articles";
import styles from "./page.module.css";

const Home: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <section className={styles['our-client-section']}>
          <h2 className={styles.h2}>Our Clients</h2>

          <div className={`${styles["clients-list"]}`}>
            <div className={styles["demo-card"]}>
              <Image
                src={PhoneCardImg}
                alt="Meta Cards"
                style={{ width: '100%', height: '100%' }}
                priority
              />
            </div>
            <div className={styles["demo-card"]}>
              <Image
                src={PVCCardImg}
                alt="Meta Cards"
                style={{ width: '100%', height: '100%' }}
                priority
              />
            </div>
            <div className={styles["demo-card"]}>
              <Image
                src={MetalCardImg}
                alt="Meta Cards"
                style={{ width: '100%', height: '100%' }}
                priority
              />
            </div>
            <div className={styles["demo-card"]}>
              <Image
                src={TableTalkImg}
                alt="Meta Cards"
                style={{ width: '100%', height: '100%' }}
                priority
              />
            </div>
          </div>

          <div className={`${styles["buy-now-card"]}`}>
            <div className={styles["buy-now-image"]}>
              <Image
                src={CommonImg}
                alt="Meta Cards"
                style={{ width: '100%', height: '100%' }}
                priority
              />
            </div>
            <div className={styles["center"]}>
              <h3 className={styles.h3}>Share anything, with a tap or scan!</h3>
              <p className={styles["buy-now-info"]}>
                Impress everyone you meet with the <br />
                quickest and most effective way to share <br />
                contact details, social media links, and more! <br />
                Designed for both individuals and teams.
              </p>
              <button className={styles['buy-now-btn']}>Buy Now</button>
            </div>
          </div>
        </section>

        <section>
          <OurSignatureProduct />
        </section>

        <section>
          <HowItWork />
        </section>

        <section>
          <h2 className={styles.h2}>Get started with SHRE in minutes</h2>

          <div className={styles["video-div"]}>
            <video controls className={styles["video-control"]} autoPlay>
              <source src="https://firebasestorage.googleapis.com/v0/b/test-6bcb7.appspot.com/o/Shre%20Video%203%20V5.mp4?alt=media&amp;token=f83a4c3a-967e-4a8a-be01-e08ccaecd771" type="video/mp4" />
            </video>
          </div>
        </section>

        <section>
          <h2 className={styles.h2}>Our Plans</h2>
          <div className={styles["plans-card"]}>
            <div className={styles["get-your-now-div"]}>
              <h3 className={styles["h3"]}> Lorem Ipsum Dolar</h3>
              <button className={styles["get-your-now-btn"]}>Get Your Now</button>
            </div>
            <ThreeStackArticle />
          </div>
        </section>

        <section>
          <Tab />
        </section>

        <section>
          <FAQ />
        </section>
      </div>
    </>
  );
};

export default Home;
