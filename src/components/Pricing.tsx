import Switch from "@mui/material/Switch";
import { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const Pricing = () => {
  const [isMonthly, setMonthly] = useState(true);
  return (
    <section
      className="bg-secondary py-20 mt-10"
      id="pricing">
      <h3 className="font-bold text-4xl md:text-5xl text-gray-800 text-center mb-5">
        Choose the best plan for you
      </h3>
      <div className="flex items-center justify-center mb-5 font-bold">
        <span>Yearly</span>
        <Switch
          checked={isMonthly}
          onChange={() => setMonthly(!isMonthly)}
          color="primary"
        />
        <span>Monthly</span>
      </div>
      <div className="max-w-[1440px] w-[89%] m-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        <div className="rounded-2xl p-9 bg-white flex flex-col justify-between border border-gray-400">
          <div>
            <div className="mb-6">
              <span className="text-2xl font-bold text-primary">
                {isMonthly ? "35$" : "100$"}
              </span>
              <span className="text-sm font-bold text-gray-400">
                /{isMonthly ? "Month" : "Year"}
              </span>
            </div>
            <h4 className="text-2xl font-bold mb-2">Dreamer</h4>
            <p className="text-sm font-bold text-gray-400 mb-11">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              cupiditate perspiciatis magni.
            </p>
            <div className="w-full bg-gray-400 h-[1px] mb-5"></div>
            <ul className="mb-5">
              <li className="flex items-center gap-1 mb-4">
                <div className="text-primary">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-500">100 Gb Storage</span>
              </li>
              <li className="flex items-center gap-1 mb-4">
                <div className="text-primary">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-500">2 Users Available</span>
              </li>
              <li className="flex items-center gap-1 mb-4">
                <div className="text-primary">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-500">1 Social Account</span>
              </li>
              <li className="flex items-center gap-1 mb-4">
                <div className="text-primary">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-500">1 Email Account</span>
              </li>
            </ul>
          </div>
          <button className="py-3 px-6 rounded-md bg-primary text-white font-bold duration-500 hover:bg-[#f88eb7]">
            Get Started
          </button>
        </div>
        <div className="rounded-2xl p-9 bg-white flex flex-col justify-between border border-gray-400">
          <div>
            <div className="mb-6">
              <span className="text-2xl font-bold text-primary">
                {isMonthly ? "50$" : "200$"}
              </span>
              <span className="text-sm font-bold text-gray-400">
                /{isMonthly ? "Month" : "Year"}
              </span>
            </div>
            <h4 className="text-2xl font-bold mb-2">Thinker</h4>
            <p className="text-sm font-bold text-gray-400 mb-11">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              deserunt ex corrupti.
            </p>
            <div className="w-full bg-gray-400 h-[1px] mb-5"></div>
            <ul className="mb-5">
              <li className="flex items-center gap-1 mb-4">
                <div className="text-primary">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-500">300 Gb Storage</span>
              </li>
              <li className="flex items-center gap-1 mb-4">
                <div className="text-primary">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-500">3 Users Available</span>
              </li>
              <li className="flex items-center gap-1 mb-4">
                <div className="text-primary">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-500">5 Social Account</span>
              </li>
              <li className="flex items-center gap-1 mb-4">
                <div className="text-primary">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-500">3 Email Account</span>
              </li>
            </ul>
          </div>
          <button className="py-3 px-6 rounded-md bg-primary text-white font-bold duration-500 hover:bg-[#f88eb7]">
            Get Started
          </button>
        </div>
        <div className="relative rounded-2xl p-9 bg-primary flex flex-col justify-between border border-gray-400">
          <span className="absolute right-[-5px] top-[-5px] bg-white font-bold px-2 rounded-md uppercase text-sm shadow-xl">
            Best Offer
          </span>
          <div>
            <div className="mb-6">
              <span className="text-2xl font-bold text-white">
                {isMonthly ? "100$" : "300$"}
              </span>
              <span className="text-sm font-bold text-gray-800">
                /{isMonthly ? "Month" : "Year"}
              </span>
            </div>
            <h4 className="text-2xl text-white font-bold mb-2">Imaginative</h4>
            <p className="text-sm font-bold text-gray-800 mb-11">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              culpa dolorum impedit?
            </p>
            <div className="w-full bg-gray-400 h-[1px] mb-5"></div>
            <ul className="mb-5">
              <li className="flex items-center gap-1 mb-4">
                <div className="text-secondary drop-shadow-md">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-white">500 Gb Storage</span>
              </li>
              <li className="flex items-center gap-1 mb-4">
                <div className="text-secondary drop-shadow-md">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-white">10 Users Available</span>
              </li>
              <li className="flex items-center gap-1 mb-4">
                <div className="text-secondary drop-shadow-md">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-white">10 Social Account</span>
              </li>
              <li className="flex items-center gap-1 mb-4">
                <div className="text-secondary drop-shadow-md">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-white">10 Email Account</span>
              </li>
              <li className="flex items-center gap-1 mb-4">
                <div className="text-secondary drop-shadow-md">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-white">Custom branding</span>
              </li>
            </ul>
          </div>
          <button className="py-3 px-6 rounded-md bg-secondary text-white font-bold duration-500 hover:bg-[#7bbdf3]">
            Get Started
          </button>
        </div>
        <div className="rounded-2xl p-9 bg-white flex flex-col justify-between border border-gray-400">
          <div>
            <div className="mb-6">
              <span className="text-2xl font-bold text-primary">
                {isMonthly ? "300$" : "1000$"}
              </span>
              <span className="text-sm font-bold text-gray-400">
                /{isMonthly ? "Month" : "Year"}
              </span>
            </div>
            <h4 className="text-2xl font-bold mb-2">Enterprise</h4>
            <p className="text-sm font-bold text-gray-400 mb-11">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              corporis quam quia?
            </p>
            <div className="w-full bg-gray-400 h-[1px] mb-5"></div>
            <ul className="mb-5">
              <li className="flex items-center gap-1 mb-4">
                <div className="text-primary">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-500">1 Tb Storage</span>
              </li>
              <li className="flex items-center gap-1 mb-4">
                <div className="text-primary">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-500">
                  Unlimited Users Available
                </span>
              </li>
              <li className="flex items-center gap-1 mb-4">
                <div className="text-primary">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-500">
                  Unlimited Social Accounts
                </span>
              </li>
              <li className="flex items-center gap-1 mb-4">
                <div className="text-primary">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-500">
                  Unlimited Email Accounts
                </span>
              </li>
            </ul>
          </div>
          <button className="py-3 px-6 rounded-md bg-primary text-white font-bold duration-500 hover:bg-[#f88eb7]">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
