// import heroImage from "../assets/hero.png";
import { AiFillStar } from "react-icons/ai";
import heroImage from "../assets/heroimage.png";
const Hero = () => {
  return (
    <section className="bg-secondary w-full">
      <div className="max-w-[1400px] w-[89%] m-auto grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
        {/* left side */}
        <div className="mt-20 md:mt-0 text-center md:text-start">
          <h3 className="text-white text-2xl font-bold drop-shadow-lg">
            Welcome to
          </h3>
          <h2 className="text-white text-6xl font-bold drop-shadow-lg  mb-3">
            Imagine media
          </h2>
          <p className="text-gray-500">
            Elevate your brand with strategic social media solutions.
            Creativity, engagement, and results-driven strategies await.
          </p>
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <a
              href="/"
              className="duration-500 hover:bg-[#f88eb7] py-2 px-6 rounded text-white shadow-lg drop-shadow-lg bg-primary">
              Pricing
            </a>
            <a
              href="/"
              className="duration-500 hover:bg-[#f88eb7] py-2 px-6 rounded text-white shadow-lg drop-shadow-lg bg-primary">
              More info
            </a>
          </div>
        </div>
        {/* right side */}
        <div className="relative w-full">
          <img
            src={heroImage}
            alt="imagine"
            className="w-full lg:h-[550px] h-[450px] object-cover"
          />
          <div className="bg-white rounded-lg shadow-md m3 text-center w-44 p-4 absolute flex flex-col bottom-2 md:bottom-10 lg:bottom-20 left-2 md:left-5">
            <span className="text-3xl font-bold mb-0 text-primary">5000+</span>
            <span className="text-sm text-slate-400 mt-1">Reviews</span>
          </div>
          <div className="absolute right-0 top-5 md:top-10 lg:right-10 p-4 w-44 rounded-lg shadow-md bg-white m-3 text-center">
            <div className="font-semibold text-primary flex justify-center text-[18px]">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <span className="text-sm text-slate-400 mt-1">
              Top Rated Service
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
