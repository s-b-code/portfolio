import ServicesData from "@/data/services-data";

function ServicesSection() {
  return (
    <section className="container-1 mt-28 md:mt-40 flex flex-col items-center justify-center">
      <h2 className="section-title">Services</h2>
      <p className="section-description">
        From concepts to world class experiences
      </p>
      <ul className="mt-6 md:mt-20 flex flex-wrap justify-center gap-x-4 gap-y-6 md:gap-10 md:max-w-[80%]">
        {ServicesData.map((service) => (
          <li
            key={service.title}
            className="w-44 md:w-96 h-52 md:h-80 bg-white/5 flex flex-col space-y-3 items-center justify-center rounded-xl md:rounded-xxl"
          >
            <service.icon className="text-primary w-9 md:w-20 h-20" />
            <div className="flex flex-col items-center justify-center">
              <h3 className="font-bold text-center text-lg md:text-2xl text-darker">
                {service.title}
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ServicesSection;
