import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Destinations.module.css";
import DestinationCard from "./DestinationCard";
import { AnimatePresence, motion } from "framer-motion";

export type destinationObject = {
  name: string;
  travel: string;
  description: string;
  distance: string;
  images: {
    png: string;
    webp: string;
  };
};

const Destinations = () => {
  const [destinations, setDestinations] = useState<destinationObject[]>([]);
  const [planet, setPlanet] = useState<string | undefined>(undefined);
  const [planets, setPlanets] = useState<string[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((res) => {
        setDestinations(res.destinations);
        setPlanet(res.destinations[0].name);
        setPlanets(
          res.destinations.map(
            (destination: destinationObject) => destination.name
          )
        );
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <section className={styles.destinations}>
        <Navbar />

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, translateY: "100px" }}
            animate={{ opacity: 1, translateY: "0" }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
            className={`${styles.destDiv} divWrapper`}
          >
            <div className={styles.destinationContainer}>
              {destinations.map((destination) =>
                destination.name === planet ? (
                  <DestinationCard
                    key={destination.name}
                    destination={destination}
                    planetsArr={planets}
                    setPlanet={setPlanet}
                  />
                ) : null
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
    </>
  );
};

export default Destinations;
