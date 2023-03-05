import Image from "next/image";
import Link from "next/link";
import Photo from "../../../public/daniel-portrait.png";
const page = () => {
  return (
    <div className="wrapper max-w-5xl mx-auto">
      <div className="flex">
        <div className="max-w-md text-[#d2d2d2] pt-32">
          <span className="font-bold">Hello!</span> My name is Daniel and I love
          building things that live on the internet. <br />
          My experience as a programmer allows me to come up with{" "}
          <Link href="/recentwork">
            <span className="underline text-[#d6d6d6]">
              intelligent solutions
            </span>
          </Link>{" "}
          to technical challenges, while at the same time designing sleek and
          visually appealing websites. Aside from having extensive knowledge of
          recognized technical standards, I am conversant with modern building
          practices.
          <br />
          <br /> I have extensive knowledge of CMS such as Shopify, WordPress,
          Wix, and Webflow and modern web technologies including: Typescript,
          React Js, Next Js, Javascript (ES6+) Sanity and Tailwind CSS.
        </div>
        <div className="max-w-md pt-32 mx-auto">
          <Image
            src={Photo}
            alt="A photo of a developer"
            className="h-64 w-64 rounded-sm border border-gray-600 p-1"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
