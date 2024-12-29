import ReusableCard from "../../components/ReusableCard/ReusableCard";
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

const CrewCard = ({ position, name, ...restProps }: CrewCardProps) => {
  const clickHandler = (i: number) => {
    if (i !== restProps.index) {
      restProps.setIndex(i);
    }
  };

  return (
    <ReusableCard
      {...restProps}
      subtitle={name}
      title={position}
      customClass={styles.crewCard}
      clickHandler={clickHandler}
    />
  );
};

export default CrewCard;
