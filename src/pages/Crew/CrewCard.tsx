import styles from "./Crew.module.css";

export type CrewCardProps = {
  position: string;
  name: string;
  description: string;
  img: string;
  index?: number;
  setIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
  totalIndex: number;
};

const CrewCard = ({
  position,
  name,
  description,
  img,
  index,
  setIndex,
  totalIndex,
}: CrewCardProps) => {
  return (
    <div className={`sectionWrapper ${styles.crewSection}`}>
      <div className={styles.crewInfo}>
        <h2 className={styles.position}>{position}</h2>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.crewNav}>
          {Array.from({ length: totalIndex }, (_, i) => (
            <div
              key={i}
              className={`${styles.navCircle} ${
                i === index ? styles.active : ""
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
      <div className={styles.crewImg}>
        <img src={img} alt={`${name} - ${position}`} />
      </div>
    </div>
  );
};

export default CrewCard;
