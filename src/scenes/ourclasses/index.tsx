import { ClassType, SelectedPage } from "../../shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import Htag from "../../shared/Htag";
import Class from "@/scenes/ourclasses/Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem optio nam delectus ab alias ducimus praesentium magnam sequi deleniti officia vero, illum iusto quibusdam voluptatem impedit perspiciatis! Fuga, in cumque",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem optio nam delectus ab alias ducimus praesentium magnam sequi deleniti officia vero, illum iusto quibusdam voluptatem impedit perspiciatis! Fuga, in cumque",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem optio nam delectus ab alias ducimus praesentium magnam sequi deleniti officia vero, illum iusto quibusdam voluptatem impedit perspiciatis! Fuga, in cumque",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem optio nam delectus ab alias ducimus praesentium magnam sequi deleniti officia vero, illum iusto quibusdam voluptatem impedit perspiciatis! Fuga, in cumque",
    image: image4,
  },
  {
    name: "Fitnes Classes",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem optio nam delectus ab alias ducimus praesentium magnam sequi deleniti officia vero, illum iusto quibusdam voluptatem impedit perspiciatis! Fuga, in cumque",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem optio nam delectus ab alias ducimus praesentium magnam sequi deleniti officia vero, illum iusto quibusdam voluptatem impedit perspiciatis! Fuga, in cumque",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className=" w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        className="mx-auto w-5/6"
      >
        <motion.div
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
          <div className="md:w-3/5">
            <Htag>OUR Classes</Htag>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores explicabo recusandae quae nobis ipsum, ipsam mollitia.
              Nisi repellat optio asperiores, dolores minima tempore, harum
              excepturi dignissimos doloremque fugiat possimus ipsa?
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class key={`${item.name}-${index}`} {...item} />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
