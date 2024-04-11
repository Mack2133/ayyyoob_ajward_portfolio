import { set, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";

function Contact() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "Hi there! I would like to know more about you.",
    },
  });

  const [emailStatus, setEmailStatus] = useState(null);

  const onSubmit = async (data) => {
    const serviceId = "service_4g9e03l";
    const templateId = "template_bijdsdj";
    const publicKey = "kFg-904JjLdAhpCr8";

    const templateParams = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setEmailStatus("success");
      setTimeout(() => {
        setEmailStatus(null);
      },3000)
    } catch (error) {
      setEmailStatus("error");
      console.error("Error sending email:", error);
    }
  };

  return (
    <div
      className="flex flex-col items-center pt-12 pb-12 bg-gray-200 customSection"
      id="contact"
    >
      <div>
        <h1 className="pb-10 text-5xl font-bold text-center text-blue-600 md:pb-24 lg:text-7xl md:text-5xl md:pt-12">
          Contact
        </h1>
      </div>
      <div className="w-full p-10 px-10 border-none rounded-lg md:bg-gray-100 bg-none md:border-gray-300 md:w-3/5 backdrop:blur-md opacity-85 md:border-1">
        <div className={emailStatus === "success" || emailStatus === "error" ? "py-5" : "hidden"}>
          {emailStatus === "success" && (
            <p className="text-2xl font-bold text-green-500">
              Email sent successfully!
            </p>
          )}
          {emailStatus === "error" && (
            <p className="text-2xl font-bold text-red-500">
              Error sending email. Please try again later.
            </p>
          )}
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 text-lg font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              {...register("name", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-lg font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+\.\S+$/i,
              })}
            />
            {errors.email && (
              <p className="text-red-500">Please enter a valid email address</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block mb-2 text-lg font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              {...register("phone", {
                required: true,
                pattern: /^(?:0|\d{10})$/,
              })}
            />
            {errors.phone && (
              <p className="text-red-500 ">Please enter a valid phone number</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block mb-2 text-lg font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              {...register("message")}
            ></textarea>
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
