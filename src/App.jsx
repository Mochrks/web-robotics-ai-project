import styles from "./style";
import {
  SecureData,
  Footer,
  Navbar,
  Hero,
  DataAnalys,
  Services,
  OurProduct,
  Join,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart} md:pb-[200px] pb-10`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <SecureData />
        <Services />
        <DataAnalys />
        <OurProduct />
        <Join />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
