"use client";
import Image from "next/image";
import Link from "next/link";
import Photo from "../../../public/me.jpg";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className=" grid grid-cols-1 md:grid-cols-2 mx-auto items-center  justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.75,
          }}
          className="max-w-md text-[#d2d2d2] pt-32"
        >
          <div className="px-6 sm:px-0">
            <span className="font-regular text-gray-100">Hi!</span> My name is
            Daniel and I love building things that live on the internet. <br />
            My experience as a programmer allows me to come up with{" "}
            <Link href="/projects">
              <span className="underline text-white/80 font-semibold hover:text-white bg-[#1B1B1B] py-0.5 px-2 rounded-sm">
                intelligent solutions
              </span>
            </Link>{" "}
            to technical challenges, while at the same time designing sleek and
            visually appealing websites. Aside from having{" "}
            <span className="hover:text-gray-100 ">extensive knowledge</span> of
            recognized technical standards, I am conversant with modern building
            practices.
            <br />
            <br /> I have extensive knowledge of CMS such as Shopify, Webflow, Framer
            and Wix, and modern web technologies including:{" "}
            <span className="hover:text-white">Typescript</span>,
            <span className="hover:text-white">Liquid</span>,{" "}
            <span className="hover:text-white">Next Js</span>,{" "}
            <span className="hover:text-white">Javascript (ES6+)</span>{" "}
            <span className="hover:text-white"></span> and{" "}
            <span className="hover:text-white">Tailwind CSS</span>.
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.75,
          }}
          className="max-w-md pt-32 mx-auto px-4 md:px-0"
        >
          <div>
            <Image
              src={Photo}
              alt="Daniel Akinyemi"
              className="rounded-sm mb-10"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default page;
