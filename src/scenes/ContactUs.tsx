import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
type Props = {
  setSelectedPage: (page: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (isValid) {
      e.preventDefault();
    }
    e.preventDefault();
  };
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <motion.div
          className="md:w-3/5 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="basis-3/5 font-montserrat text-3xl font-bold uppercase">
            <span className="text-primary-500 uppercase">join now</span> to get
            in shape.
          </h2>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur at nemo dolores laudantium dignissimos maxime facilis
            sequi nihil neque numquam iste, eum quod pariatur sit necessitatibus
            quos ducimus illo error.
          </p>
        </motion.div>

        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="NAME"
                {...register("name", { required: true, maxLength: 100 })}
                className="w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white mb-5"
              />
              {errors.name && (
                <p className="text-primary-500 -mt-5 mb-2">
                  {errors.name.type === "required" && "Name is required"}
                  {errors.name.type === "maxLength" &&
                    "Name must be less than 100 characters"}
                </p>
              )}
              <input
                type="email"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                className="w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white mb-5"
              />
              {errors.email && (
                <p className="text-primary-500 -mt-5 mb-2">
                  {errors.email.type === "required" && "Email is required"}
                  {errors.email.type === "pattern" && "Invalid email address"}
                </p>
              )}
              <textarea
                cols={50}
                rows={4}
                placeholder="MESSAGE"
                {...register("message", { required: true, maxLength: 2000 })}
                className="w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white mb-5"
              />
              {errors.message && (
                <p className="text-primary-500 -mt-5 mb-2">
                  {errors.message.type === "required" && "Message is required"}
                  {errors.message.type === "maxLength" &&
                    "Message must be less than 2000 characters"}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:-z-10">
              <img
                className="w-full"
                src={ContactUsPageGraphic}
                alt="contact-us-page-graphic"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
