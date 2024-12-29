import ReusableCard from "../../components/ReusableCard/ReusableCard";
import styles from "./Technology.module.css";

export type TechnologyCardProps = {
  title: string;
  description: string;
  img: string;
  index?: number;
  setIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
  totalIndex: number;
};

const TechnologyCard = (props: TechnologyCardProps) => {
  const clickHandler = (i: number) => {
    if (i !== props.index) {
      props.setIndex(i);
    }
  };

  return (
    <ReusableCard
      {...props}
      customClass={styles.crewCard}
      clickHandler={clickHandler}
    />
  );
};

export default TechnologyCard;
