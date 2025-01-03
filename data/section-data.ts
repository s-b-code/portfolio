import { Section } from "@/types";

const home: Section = {
  name: "Home",
  link: "/",
};
const services: Section = {
  name: "Services",
  link: "#services",
};
const about: Section = {
  name: "About me",
  link: "#about",
};
const projects: Section = {
  name: "Projects",
  link: "#projects",
};
const contact: Section = {
  name: "Contact me",
  link: "#contact",
};

const all: Section[] = [home, services, about, projects, contact];

const SectionData = {
  home,
  services,
  about,
  projects,
  contact,
  all,
};

export default SectionData;
