import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <section
      className="mt-0 md:mt-10 h-[95vh] bg-hero bg-cover bg-center bg-no-repeat"
      id="home"
    >
      <div className="container mx-auto">
        {/* slider */}
        <HeroSlider />
      </div>
    </section>
  );
};

export default Hero;
