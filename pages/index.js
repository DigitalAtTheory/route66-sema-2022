import Image from "next/image";
import Head from "next/head";
import ListItem from "../components/ListItem";

import topRoad from "../public/top-road.png";
import bottomRoad from "../public/bottom-road.png";
import route66Logo from "../public/route66-logo.png";
import save66 from "../public/save-66-img.png";
import mobil1Logo from "../public/mobil1-logo.png";
import hooniganLogo from "../public/hoon-logo.png";

const steps = [
  {
    number: "1",
    text: "Check your watch. This road is open only during the first and last hour each day.",
  },
  {
    number: "2",
    text: "Stay on the road to Hoonigan. But be quick",
  },
  {
    number: "3",
    text: "When you arrive, scan the destination code to collect your item.*",
  },
  {
    number: "4",
    text: "Get back on Route 66 and head to the Mobil 1 Gallery.",
  },
  {
    number: "5",
    text: "Show proof of your road trip and find out.",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden relative">
      <Head>
        <title>Save Route 66 and Win</title>
      </Head>
      <div className="absolute left-0 right-0 m-auto z-10 -top-32 md:-top-72 lg:-top-[1000px] w-full max-w-6xl object-cover">
        <Image
          src={topRoad}
          alt="Road background image"
          className="w-full mx-auto"
        />
      </div>
      <div className="relative z-20 max-w-5xl mx-auto px-8">
        <section className="mt-24 md:mt-44">
          <div className="md:w-3/4 mx-auto mb-12 md:mb-24">
            <Image src={route66Logo} alt="Keep Route 66 Kickin" />
          </div>
          <div className="mx-auto">
            <Image
              src={save66}
              className="mx-auto w-3/4 md:w-4/12"
              alt="Help save Route 66 and win"
            />
          </div>
        </section>
        <section>
          <h2 className="text-[#f9a736] text-3xl md:text-6xl text-center mt-24">
            Only 100 each day. Only right now.
          </h2>
          <div className="max-w-3xl mx-auto mt-24">
            {steps.map((step) => (
              <ListItem key={step.number} number={step.number}>
                {step.text}
              </ListItem>
            ))}
          </div>
          <p className="block mt-24 text-center text-white font-light md:text-xl">{`*Limited to the first 50 attendees each hour of the show (9-10am and 4-5pm). Only 100 each day. Road closes when we're out. Don't sleep on this.`}</p>
        </section>
        <section className="my-24">
          <h3 className="text-center text-white font-bold text-3xl md:text-5xl">{`Want to know more about how we're helping save Route 66?`}</h3>
          <a
            href="https://www.mobil.com/en/lubricants/route66"
            target="_blank"
            rel="noreferrer"
            className="block bg-[#f51832] text-white font-bold tracking-wider uppercase text-xl md:text-3xl py-4 md:py-8 md:w-1/2 mx-auto mt-12 text-center rounded-lg"
          >
            Tap Here
          </a>
        </section>
        <section className="my-24 md:my-48">
          <div className="mb-12 md:mb-24">
            <Image src={mobil1Logo} alt="Mobil 1" className="w-8/12 mx-auto" />
          </div>
          <div>
            <Image
              src={hooniganLogo}
              alt="Hoonigan"
              className="w-9/12 mx-auto"
            />
          </div>
        </section>
        <div className="mb-12">
          <p className="text-gray-400 font-light text-sm md:text-base">
            Mobil, Mobil 1 and the 1 icon are trademarks or registered
            trademarks Exxon Mobil Corporation or one of its subsidiaries. Other
            trademarks and product names used herein are the property of their
            respective owners
          </p>
        </div>
      </div>
      <div className="absolute z-10 left-0 right-0 m-auto -bottom-24 md:-bottom-80 lg:-bottom-[1000px] w-full max-w-6xl object-cover">
        <Image
          src={bottomRoad}
          alt="Road background image"
          className="w-full"
        />
      </div>
    </div>
  );
}
