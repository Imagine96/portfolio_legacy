import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

interface FormState {
  email: string;
  name: string;
  message: string;
}

type Target = "name" | "email" | "message";

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    email: "",
    name: "",
    message: "",
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  const onInputData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    target: Target,
  ) => {
    setFormData((prev) => {
      return {
        ...prev,
        [target]: e.target.value,
      };
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (formRef.current) {
        emailjs
          .sendForm(
            process.env.REACT_APP_MAILJS_SERVICE_ID || " ",
            process.env.REACT_APP_MAILJS_TEMPLATE_ID || " ",
            formRef.current,
            process.env.REACT_APP_MAILJS_USER_ID || " ",
          )
          .then(() => {
            setFormData({
              email: "",
              name: "",
              message: "",
            });
          });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onReset = () => {
    setFormData({
      email: "",
      name: "",
      message: "",
    });
  };

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      onReset={onReset}
      className=" z-50 flex flex-col justify-between w-full h-[75vh]"
    >
      <div>
        <div className="montserrat my-8 flex flex-row items-center md:justify-start md:pl-8 justify-center gap-2 ">
          <label htmlFor="name"> Name : </label>
          <input
            id="name-input"
            required={true}
            onChange={(e) => onInputData(e, "name")}
            type="text"
            className="p-1 bg-transparent border-b w-[70%] md:w-[50%] border-b-black focus:outline-none focus:shadow-lg focus:transition  "
            placeholder="Your Name"
            value={formData.name}
          />
        </div>
        <div className="montserrat flex flex-row items-center md:justify-start md:pl-8 justify-center gap-2 ">
          <label htmlFor="email"> Email : </label>
          <input
            id="email-input"
            required={true}
            onChange={(e) => onInputData(e, "email")}
            type="email"
            className="p-1 bg-transparent border-b w-[70%] md:w-[50%] border-b-black focus:outline-none focus:shadow-lg focus:transition "
            placeholder="Your Email"
            value={formData.email}
          />
        </div>
      </div>
      <div className="w-10/12 montserrat absolute bottom-10 md:bottom-16  mx-auto ">
        <label className="block mb-2 text-center" htmlFor="message">
          Your Message :
        </label>
        <textarea
          name="message"
          id="message-input"
          required={true}
          onChange={(e) => onInputData(e, "message")}
          className="p-2 bg-mWhite resize-none focus:outline-none border w-full  border-black rounded-none focus:shadow-lg focus:transition "
          rows={8}
          value={formData.message}
          placeholder="Your message"
        />
        <div className="flex flex-row items-center justify-around">
          <input
            type="submit"
            value="Submit"
            className="p-2 text-xl focus:transition focus:scale-105 "
          />
          <input type="reset" value="Reset" className="p-2 text-xl" />
        </div>
      </div>
    </form>
  );
};

export default Form;
