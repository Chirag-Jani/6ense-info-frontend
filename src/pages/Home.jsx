import Hero from "./Hero";
// import Collection from "./Collection";
import ContactUs from "./ContactUs";
import Faq from "./Faq";
import HowToBuy from "./HowToBuy";
import Roadmap from "./Roadmap";
import Token from "./Token";
const Home = () => {
  return (
    <div className="max-w-[1480px] mx-auto w-full">
      <Hero />
      <HowToBuy />
      <Token />
      <Roadmap />
      {/* <Collection /> */}

      <Faq />
      <ContactUs />
    </div>
  );
};

export default Home;
