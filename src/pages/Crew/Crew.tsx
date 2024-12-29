import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Crew.module.css";
import CrewCard, { CrewCardProps } from "./CrewCard";

const cardProps: Omit<CrewCardProps, "setIndex" | "totalIndex">[] = [
  {
    position: "Commander",
    name: "Douglas Hurley",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    img: "/src/assets/crew/image-douglas-hurley.webp",
    index: 0,
  },
  {
    position: "Mission Specialist",
    name: "Mark Shuttleworth",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    img: "/src/assets/crew/image-mark-shuttleworth.webp",
    index: 1,
  },
  {
    position: "Pilot",
    name: "Victor Glover",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    img: "/src/assets/crew/image-victor-glover.webp",
    index: 2,
  },
  {
    position: "Flight Engineer",
    name: "Anousheh Ansari",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    img: "/src/assets/crew/image-anousheh-ansari.webp",
    index: 3,
  },
];

const Crew = () => {
  const [index, setIndex] = useState<number | undefined>(0);
  const totalIndex = cardProps.length;

  return (
    <section className={styles.crew}>
      <Navbar />
      <div className={styles.crewContainer}>
        {cardProps.map((cardProp) =>
          index === cardProp.index ? (
            <CrewCard
              key={cardProp.name}
              position={cardProp.position}
              name={cardProp.name}
              description={cardProp.description}
              img={cardProp.img}
              index={index}
              totalIndex={totalIndex}
              setIndex={setIndex}
            />
          ) : null
        )}
      </div>
    </section>
  );
};

export default Crew;
