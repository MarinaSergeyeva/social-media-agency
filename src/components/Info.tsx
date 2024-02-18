import { AiFillCheckCircle } from "react-icons/ai";

const Info = () => {
  return (
    <section
      className="m-10"
      id="about">
      <div className="w-[89%] m-auto max-w-[1440px] flex flex-col lg:flex-row gap-8 xl:gap-44">
        {/* left side */}
        <div className="grid grid-cols-1 flex-1 gap-8 md:grid-cols-2 xl:gap-y-16">
          <div>
            <h3 className="font-bold text-4xl md:text-5xl text-primary mb-2">
              10000+
            </h3>
            <p className="mb-3 font-bold text-gray-600">Satisfied Clients</p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero qui
              nihil necessitatibus cupiditate officiis excepturi quam sint! Hic,
              porro. Repellat!
            </p>
          </div>
          <div>
            <h3 className="font-bold text-4xl md:text-5xl text-primary mb-2">
              72
            </h3>
            <p className="mb-3 font-bold text-gray-600">Skilled Employees</p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              odio debitis temporibus neque est delectus velit facilis minus
              rerum! Provident?
            </p>
          </div>
          <div>
            <h3 className="font-bold text-4xl md:text-5xl text-primary mb-2">
              500+
            </h3>
            <p className="mb-3 font-bold text-gray-600">Projects Completed</p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              eum doloribus ad! Maiores velit magni quas iusto, cupiditate
              ratione aut!
            </p>
          </div>
          <div>
            <h3 className="font-bold text-4xl md:text-5xl text-primary mb-2">
              24
            </h3>
            <p className="mb-3 font-bold text-gray-600">Locations Worldwide</p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              veritatis maiores quas quasi officia ipsam ad dolore natus sint
              corporis!
            </p>
          </div>
        </div>
        {/* right side */}
        <div className="flex-1">
          <h3 className="text-4xl sm:text-5xl font-extrabold mb-8 lg:mb-16 text-secondary drop-shadow-sm">
            Subscrive to our newsletter and recieve special updates
          </h3>
          <div className="bg-white py-3 px-4 flex items-center justify-between border border-gray-200 rounded-lg mb-7">
            <input
              type="text"
              placeholder="Enter your email"
              className="outline-9 ml-5 w-1/2"
            />
            <div>
              <button className="py-4 px-7 rounded-lg font-semibold text-md md:text-lg text-white bg-primary duration-500 hover:bg-[#f88eb8] whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-3">
              <div className="text-primary ">
                <AiFillCheckCircle />
              </div>
              <span className="text-md text-gray-500">Special Promotions</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-primary ">
                <AiFillCheckCircle />
              </div>
              <span className="text-md text-gray-500">Recieve Updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
