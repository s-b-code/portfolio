import SectionData from "@/data/section-data";
import { Button } from "./ui/button";
import Image from "next/image";

function Navbar() {
  return (
    <>
      <div className="h-6 md:h-10"></div>
      <header className="  sticky top-0  z-50 transition-transform duration-300 ">
        <div className="container-1 flex justify-between bg-background pt-4">
          <Button className="md:hidden" variant={"ghost"} size={"icon"}>
            <Image src="/menu.svg" width={24} height={24} alt="logo" />
          </Button>
          <div className="hidden md:flex flex-1 items-center justify-center">
            <nav className="flex items-center justify-between w-[653px]">
              {SectionData.all.map((section) => (
                <div
                  className="text-xl font-medium tracking-wider text-dark-hover"
                  key={section.link}
                >
                  {section.name}
                </div>
              ))}
            </nav>
          </div>
          <Button className="font-medium text-sm md:text-base md:font-bold tracking-wider py-2 px-4 md:py-3 md:px-10">
            Hire Me
          </Button>
        </div>
        <div className="h-10 w-full bg-gradient-to-b from-background via-background/80 to-transparent"></div>
      </header>
    </>
  );
}

export default Navbar;
