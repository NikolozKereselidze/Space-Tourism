import { useState } from "react";
import { destinationObject } from "./Destinations";
import styles from "./Destinations.module.css";

const DestinationCard = ({
  destination,
  planetsArr,
  setPlanet,
}: {
  destination: destinationObject;
  planetsArr: string[];
  setPlanet: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  const { name, description, distance, images, travel } = destination;
  const [loaded, setLoaded] = useState(false);

  const clickHandler = (
    setPlanet: React.Dispatch<React.SetStateAction<string | undefined>>,
    planet: string,
    planetName: string
  ) => {
    if (planet !== planetName) {
      setLoaded(false);
      setPlanet(planet);
    }
  };

  const handleImageLoaded = () => {
    setLoaded(true);
  };

  return (
    <div className={styles.planetsWrapper}>
      <img
        src={images.webp}
        alt=""
        onLoad={handleImageLoaded}
        className={`${styles.planetImage} ${loaded ? styles.visible : ""}`}
      />
      <div className={`${styles.planetInfo} ${loaded ? styles.visible : ""}`}>
        <div className={styles.planetNavbar}>
          <ul>
            {planetsArr.map((planet) => (
              <li
                onClick={() => clickHandler(setPlanet, planet, name)}
                key={planet}
                className={`${name === planet ? `${styles.active}` : ``}`}
              >
                {planet}
              </li>
            ))}
          </ul>
        </div>
        <h2 className={styles.planetName}>{name}</h2>
        <p className={styles.planetDesc}>{description}</p>
        <div className={styles.footerWrapper}>
          <div className={styles.distance}>
            <p className={styles.disTitle}>Avg. Distance</p>
            <p className={styles.disValue}>{distance}</p>
          </div>
          <div className={styles.time}>
            <p className={styles.timeTitle}>Est. Travel Time</p>
            <p className={styles.timeValue}>{travel}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
