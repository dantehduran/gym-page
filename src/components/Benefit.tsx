import { BenefitType } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  benefit: BenefitType;
};

const childVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Benefit = ({ benefit: { icon, title, description } }: Props) => {
  return (
    <motion.div
      variants={childVariants}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center "
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full  border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>
      <p className="font-bold">{title}</p>
      <p className="my-3 ">{description}</p>
    </motion.div>
  );
};

export default Benefit;
