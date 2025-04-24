
import React from "react";

import hero from "../assets/images/hero.png"
import { ContainerScroll } from "./ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Checkout My <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Github Profile!
              </span>
            </h1>
          </>
        }>
        <img
          src={hero}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false} />
      </ContainerScroll>
    </div>
  );
}
