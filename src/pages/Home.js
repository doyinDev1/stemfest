import Header from "../components/Header";

import homeImg from "../images/assets/superch.png";

const Home = () => {
  return (
    <div className="home">
      <Header
        header="Welcome to our school"
        title="A brighter Future <h2 class='text-yellow'>for your kids</h2>"
        image={homeImg}
        about="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut porro corporis mollitia aliquid? Corrupti, laboriosam."
        link="/login"
        linkText="Enrol Now"
      />
    </div>
  );
};

export default Home;
