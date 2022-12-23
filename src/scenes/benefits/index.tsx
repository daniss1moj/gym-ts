import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { BenefitType, SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import Htag from "../../shared/Htag";
import Benefit from "./Benefit";
import ActionButton from "../../shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100% of Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, et",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Benefits({ setSelectedPage }: Props) {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: {
              opacity: 0,
              x: -100,
            },
            visible: {
              opacity: 1,
              x: 1,
            },
          }}
        >
          <Htag>MORE THAN JUST GYM.</Htag>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            facere repellendus molestias quam, ullam reiciendis quasi magnam!
            Odit magnam fuga tempore, deleniti, voluptate amet quam expedita
            fugiat veritatis, minima temporibus.
          </p>
        </motion.div>
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              {...benefit}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* {GRAPHIC AND DESCRIPTION} */}
        <div className="mt-16 justify-between gap-20 md:mt-28 md:flex md:items-center">
          {/* {GRAPHIC} */}
          <img
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
            className="mx-auto"
          />
          {/* {DESCRIPTION} */}
          <div>
            {/* {TITLE} */}
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: {
                  opacity: 0,
                  x: -100,
                },
                visible: {
                  opacity: 1,
                  x: 1,
                },
              }}
            >
              <div className="before:z[-1] before: content-abstractwaves before:absolute before:-top-20 before:-left-20"></div>
              <Htag>
                MILLIONS OF HAPPY MEMBERS GETTING{" "}
                <span className="text-primary-500">FIT</span>
              </Htag>
            </motion.div>
            {/* {DESCRIPTION} */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={{
                hidden: {
                  opacity: 0,
                  x: 100,
                },
                visible: {
                  opacity: 1,
                  x: 1,
                },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
                cumque sapiente fuga nesciunt natus laboriosam nemo. Blanditiis
                recusandae, magni quis velit voluptas, a eveniet distinctio
                quos, perspiciatis mollitia iusto? Dolorum?
              </p>
              <p className="mb-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas quis pariatur iusto beatae. Odio minus error totam
                deserunt pariatur maiores amet corrupti dignissimos esse dolorem
                quia, perspiciatis, eos itaque eum.
              </p>
            </motion.div>

            {/* {BUTTON} */}
            <div className="relative mt-16">
              <div className="before: content-sparkles before:absolute before:-bottom-20 before:right-40 before:z-[-1] ">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Benefits;
