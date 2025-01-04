import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import HeroStatsData from "@/data/hero-stats-data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <div className="container-1 flex flex-col md:flex-row">
      <div className="flex items-center justify-center relative">
        <Image
          src={"/hero-blur.svg"}
          width={382}
          height={355}
          alt="hero blur"
          className="md:hidden"
        />
        <Image
          src={"/hero-blur.svg"}
          width={600}
          height={516}
          alt="hero blur"
          className="hidden md:block"
        />
        <div className="absolute flex flex-col items-center md:items-start">
          <p className="text-base md:text-2xl font-semibold text-dark-hover">
            Hi I am
          </p>
          <p className="text-xl md:text-2.5xl tracking-wide font-bold mt-[10px]">
            Subhajit bera
          </p>
          <p className="mt-6 text-5xl md:text-7xl font-black text-nowrap text bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] bg-clip-text text-transparent">
            Fullstack developer
          </p>

          <div className="flex mt-10 md:mt-14 space-x-6">
            <Button className="font-medium text-sm md:text-xl md:font-bold tracking-wider px-5 py-2 md:px-10 md:py-3 rounded-lg">
              Hire Me
            </Button>
            <Button
              variant={"outline"}
              className="font-medium text-sm md:font-bold md:text-xl py-2 px-5 border-2 border-dark-hover rounded-lg"
            >
              Download CV
            </Button>
          </div>

          <div className="bg-white/5 p-4 md:p-6 rounded-lg flex md:space-x-8 mt-12 md:mt-20">
            {HeroStatsData.stats.map((stat, index) => (
              <div
                key={stat.for}
                className={cn(
                  "flex space-x-4 py-1",
                  index !== 0 && "ml-4 md:ml-8"
                )}
              >
                <div className="flex flex-col space-y-3">
                  <span className="text-xl md:text-2xl font-extrabold text-primary">
                    {stat.stat}
                  </span>
                  <span className="text-base md:text-xl font-bold">
                    {stat.for}
                  </span>
                </div>
                {index !== HeroStatsData.stats.length - 1 && (
                  <Separator orientation="vertical" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>Image</div>
    </div>
  );
}

export default HeroSection;
