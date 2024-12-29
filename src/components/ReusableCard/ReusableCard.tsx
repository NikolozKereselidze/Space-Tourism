import styles from "./ReusableCard.module.css";
import { AnimatePresence, motion } from "motion/react";

export type ReusableCardProps = {
  title: string; // Shared property for title
  subtitle?: string; // Optional subtitle (e.g., name or position for Crew)
  description: string; // Shared property for description
  img: string; // Shared property for image
  index?: number; // Active index
  totalIndex: number; // Total number of navigation dots
  customClass?: string; // Optional class to customize layout per card
  clickHandler: (i: number) => void; // onClick function
};

const ReusableCard = ({
  title,
  subtitle,
  description,
  img,
  index,
  totalIndex,
  customClass,
  clickHandler,
}: ReusableCardProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, translateY: "-25px" }}
        animate={{ opacity: 1, translateY: "0" }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.5,
        }}
        className={`sectionWrapper ${styles.reusableCard} ${
          customClass || ""
        } `}
      >
        {!subtitle && (
          <div className={styles.techNav}>
            {Array.from({ length: totalIndex }, (_, i) => (
              <div
                key={i}
                className={`${styles.techCircle} ${
                  i === index ? styles.techActive : ""
                }`}
                onClick={() => clickHandler(i)}
              >
                {i + 1}
              </div>
            ))}
          </div>
        )}
        <div className={`${styles.cardInfo} ${!subtitle && styles.techInfo}`}>
          {subtitle ? (
            <h2 className={styles.subtitle}>{subtitle}</h2>
          ) : (
            <h2 className={styles.techTitle}>The Terminology...</h2>
          )}
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          {subtitle && (
            <div className={styles.crewNav}>
              {Array.from({ length: totalIndex }, (_, i) => (
                <div
                  key={i}
                  className={`${styles.crewCircle} ${
                    i === index ? styles.crewActive : ""
                  }`}
                  onClick={() => clickHandler(i)}
                />
              ))}
            </div>
          )}
        </div>
        <div className={styles.cardImg}>
          <img src={img} alt={`${title} ${subtitle || ""}`} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ReusableCard;
