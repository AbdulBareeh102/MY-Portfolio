import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-[#ccd6f6]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <article>
              <SectionTitle text="About Me" />
            </article>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi, I'm Abdul-Barr , nice to meet you. Please take a look around
            </p>
          </div>
          <div>
            <p className=" text-[#ccd6f6] mt-0 leading-loose">
              I'm passionate about developing exceptional software that enhances
              the lives of those around me. My expertise lies in crafting
              front-end solutions for a diverse clientele, including
              individuals, small businesses, and large corporations. If you had
              a front-end expert working on your applications, you'd experience
              remarkable results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
