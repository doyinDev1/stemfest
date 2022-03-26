import Header from "../components/Header";

import homeImg from "../images/assets/Typing.JPG";

const Home = () => {
  return (
    <div className="home">
      <Header
        header="Welcome to our school"
        title="A brighter Future <h2>for your kids</h2>"
        image={homeImg}
        about="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut porro corporis mollitia aliquid? Corrupti, laboriosam."
        link="/login"
        linkText="Button"
      />
    </div>
  );
};

export default Home;
