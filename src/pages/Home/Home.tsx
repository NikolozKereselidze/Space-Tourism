import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.home}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.info}>
          <h3 className={styles.headText}>So, You Want To Travel To</h3>
          <h2 className={styles.mainText}>Space</h2>
          <p className={styles.smallText}>
            Let's face it! if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className={styles.explore}>
          <Link to={"/destinations"} className={styles.exploreButton}>
            <a>Explore</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
