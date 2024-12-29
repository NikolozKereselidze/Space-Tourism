import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Technology.module.css";
import TechnologyCard, { TechnologyCardProps } from "./TechnologyCard";

const cardProps: Omit<TechnologyCardProps, "setIndex" | "totalIndex">[] = [
  {
    title: "Launch Vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    img: "/src/assets/technology/image-launch-vehicle-portrait.jpg",
    index: 0,
  },
  {
    title: "Spaceport",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    img: "/src/assets/technology/image-spaceport-portrait.jpg",
    index: 1,
  },
  {
    title: "Space Capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    img: "/src/assets/technology/image-space-capsule-portrait.jpg",
    index: 2,
  },
];

const Technology = () => {
  const [index, setIndex] = useState<number | undefined>(0);
  const totalIndex = cardProps.length;

  return (
    <section className={styles.technology}>
      <Navbar />
      <div className={styles.technologyContainer}>
        {cardProps.map((cardProp) =>
          index === cardProp.index ? (
            <TechnologyCard
              key={cardProp.title}
              title={cardProp.title}
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

export default Technology;
