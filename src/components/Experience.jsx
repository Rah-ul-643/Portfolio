import { experiences, skills } from "../constants";
import { layout } from "../style";
import { motion } from "framer-motion";


const Content = ({ text, link }) => {
  return (
    <div>
      <p className="font-poppins font-normal text-[14px] text-dimWhite mt-4">
        {text}{" "}
        {link ? (
          <a href={link} target="_blank">
            <BsLink45Deg
              size="1rem"
              className="inline hover:text-teal-200"
            ></BsLink45Deg>
          </a>
        ) : (
          ""
        )}
      </p>
    </div>
  );
};

const ExperienceCard = (props) => {
  return (
    <motion.div
    whileInView={{ y: [-20, 0], opacity: [0, 1] }}
    transition={{ duration: 1 }}
    >
      <div className="flex flex-row items-center mb-6">
        <img
          src={props.logo}
          alt={props.organisation}
          className="w-[52px] h-[52px] rounded-full z-[2]"
        />
        <h4 className="font-poppins font-semibold text-[20px] text-gradient leading-[32px] ml-2">
          <a href={props.link}  target="_blank">{props.organisation}</a> 
        </h4>
      </div>
      <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-6">
        {props.positions.map((position, index) => (
          <li
            key={index}
            className={`${
              index === props.positions.length - 1 ? "mb-0" : "mb-4"
            } ml-4`}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {position.title}
            </h3>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {position.duration}
            </time>
            {position.content.map((info, index) => (
              <Content key={index} index={index} {...info} />
            ))}
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"></p>
          </li>
        ))}
      </ol>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="mb-12">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
      Experience
      </h1>
      <div
        className={layout.section}
        // whileInView={{ y: [-20, 0], opacity: [0, 1] }}
        // transition={{ duration: 0.5 }}
      >
        {/* Experience */}
        <motion.div className="flex flex-1 justify-start flex-col">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} index={index} {...exp} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
