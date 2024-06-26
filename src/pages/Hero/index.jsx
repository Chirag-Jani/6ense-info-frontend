import ParticlesComponent from "../../components/ParticlesComponent";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Hero = () => {
  return (
    <div className="  relative ">
      <div className="w-full h-[100vh] absolute -z-10 top-0">
        <div className=" w-full h-full flex ">
          <ParticlesComponent />
        </div>
      </div>
      <div className=" W-full flex justify-center items-center gap-10  flex-wrap lg:flex-nowrap py-10 px-2 md:px-16 z-40">
        <HeroLeft />
        <HeroRight />
      </div>
    </div>
  );
};

export default Hero;
