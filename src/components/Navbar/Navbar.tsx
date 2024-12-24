import logo from "../../assets/shared/logo.svg";

const navigations: string[] = ["Home", "Destinations", "Crew", "Technology"];

const Navbar = () => {
  return (
    <div className="">
      <img src={logo} alt="Website logo" />
      <div className="">
        {navigations.map((navigation: string) => (
          <h3 key={navigation}>{navigation}</h3>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
