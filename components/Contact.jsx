import { useState, useEffect } from "react";
// form spree
import { useForm, ValidationError } from "@formspree/react";
import AnimatedText from "./AnimatedText";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";


const Contact = () => {
  const [state, handleSubmit] = useForm("xrbbkrap");

  //state for form inputs
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  // state to control icon visibility and button text
  const [showIcon, setShowIcon] = useState(false);

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // clear the form after submission and handle message visibility
  useEffect(() => {
    if (state.succeeded) {
      setShowIcon(true);
      // clear for inputs
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
      });

      // hide the icon and revert button text after 4 seconds
      const timer = setTimeout(() => {
        setShowIcon(false);
      }, 4000);

      // clean up the timer on component unmount or before re-running effect
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  // handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault(); //prevent default from submission
    handleSubmit(formData); // call formspree's submit handler with formData
  };

  return (
    <section className="py-12 xl:pt-20 pb-32" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center xl:flex-row gap-16">
          <div>
            <AnimatedText
              text="Got a project or idea in mind?"
              textStyles="h1 text-5xl lg:text-6xl mb-6 text-center xl:text-left"
            />
            <AnimatedText
              text="Lets Work Together and Bring it to Reality."
              textStyles="h2 text-2xl lg:text-3xl mb-12 text-center xl:text-left text-accent"
            />
            {/* form */}
            <form
              onSubmit={handleFormSubmit}
              className="flex flex-col gp-6 w-full max-w-[480px]"
            >
              {/* firstname and lastname fields */}
              <div className="flex gap-8 mb-6">
                {/* firstname */}
                <div className="flex-1">
                  <label
                    htmlFor="firstname"
                    className="block mb-2 text-sm font-medium text-primary"
                  >
                    First Name <span className="text-accent">*</span>
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={formData.firstname}
                    className="input border border-primary/10 focus:border-accent outline-none rounded-lg w-full p-3"
                    placeholder="First Name"
                    required
                  />
                </div>
                {/* lastname */}
                <div className="flex-1">
                  <label
                    htmlFor="lastname"
                    className="block mb-2 text-sm font-medium text-primary"
                  >
                    Last Name <span className="text-accent">*</span>
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    className="input border border-primary/10 focus:border-accent outline-none rounded-lg w-full p-3"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              {/* email field */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-primary"
                >
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  className="input border border-primary/10 focus:border-accent outline-none rounded-lg w-full p-3"
                  placeholder="youremail@email.com"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              {/* phone field */}
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-primary"
                >
                  Phone number <span className="text-accent">*</span>
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  className="input border border-primary/10 focus:border-accent outline-none rounded-lg w-full p-3"
                  placeholder="+254 123-456-789"
                />
              </div>
              {/* message field */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-primary"
                >
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  onChange={handleChange}
                  id="message"
                  name="message"
                  value={formData.message}
                  className="textarea border border-primary/10 focus:border-accent outline-none rounded-lg w-full p-3"
                  placeholder="Leave me a message..."
                  rows={6}
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              {/* submit button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="btn btn-accent flex items-center justify-center gap-2"
              >
                {state.submitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    {/* show success message and icon with opacity transition */}
                    <div
                      className={`flex items-center gap-3 absolute transition-opacity duration-500 ease-in-out ${
                        showIcon ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <FaCheckCircle className="text-white text-lg" />
                      <span className="text-white text-lg">
                        Message sent successfully
                      </span>
                    </div>
                    {/* button text */}
                    <span
                      className={`absolute text-white text-lg transition-opacity duration-500 ease-in-out flex items-center gap-3 ${
                        showIcon ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      <SiMinutemailer className="size-5"/>Send Message
                    </span>
                  </>
                )}
              </button>
            </form>
          </div>
          {/* image */}
          <div className="hidden xl:flex relative w-[660px] h-[840px] rounded-lg overflow-hidden">
            <Image
              src="/assets/contact/img.png"
              className="object-cover h-auto w-auto"
              fill
              quality={100}
              alt=""
              sizes="(max-width: 1280px) 100vw, 660px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
