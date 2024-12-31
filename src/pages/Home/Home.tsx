import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";
import { AnimatePresence, motion } from "motion/react";

const Home = () => {
  return (
    <section className={styles.home}>
      <Navbar />
      <AnimatePresence>
        <motion.div
          className={styles.container}
          initial={{ opacity: 0, translateX: "-10%" }}
          animate={{ opacity: 1, translateX: "0" }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
          }}
        >
          <div className={styles.info}>
            <h3 className={styles.headText}>So, You Want To Travel To</h3>
            <h2 className={styles.mainText}>Space</h2>
            <p className={styles.smallText}>
              Let's face it! if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className={styles.explore}>
            <Link to={"/destinations"} className={styles.exploreButton}>
              Explore
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Home;
