import React, { useState, useEffect, useRef } from "react";
import checkStatus from "../../../../utils/formValidation";
import emailjs from "@emailjs/browser"


const IMGSDIR = "/images/";
const NAMEBG = "nameInput.png";
const MESSBG = "messPage.png";

interface InputStatus {
  name?: string;
  message?: string;
  email?: string;
}

type Source = "name" | "message" | "email";

const Contact: React.FC = () => {
  const [inputStatus, setInputStatus] = useState<InputStatus>({
    name: "",
    email: "",
    message: "",
  });
  const [validForm, setValidForm] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [textAreaRows, setTextAreaCols] = useState<number>(5);

  const messageRef = useRef<HTMLImageElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null) 

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    source: Source,
  ) => {
    setInputStatus((prevState) => {
      const state: InputStatus = {
        ...prevState,
      };
      state[source] = e.target.value;
      return {
        ...state,
      };
    });
  };

  const onReset = () => {
    setInputStatus({ name: "", email: "", message: "" });
    setErrorMessage(undefined);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validForm && formRef.current) {
      setErrorMessage(undefined);
      setInputStatus({ name: "", email: "", message: "" });

      try{
        emailjs.sendForm(process.env.REACT_APP_MAILJS_SERVICE_ID || " ", process.env.REACT_APP_MAILJS_TEMPLATE_ID || " ", formRef.current, process.env.REACT_APP_MAILJS_USER_ID || " ")
        .then(result => {
          console.log(result.text)
        }, (err) => {
          throw err
        })
      }catch(err){
        console.log(err)
      }

    } else {
    }
  };

  useEffect(() => {
    if (inputStatus) {
      try {
        setValidForm(checkStatus(inputStatus));
        setErrorMessage(undefined);
      } catch (err) {
        if (
          inputStatus.name !== "" ||
          inputStatus.message !== "" ||
          inputStatus.email !== ""
        ) {
          let message: string = "unknow error";
          if (err instanceof Error) {
            message = err.message;
          }
          setErrorMessage(message);
        }
      }
    }
  }, [inputStatus]);

  useEffect(() => {
    if (window.innerHeight < 1440) {
      setTextAreaCols(6);
    } else if (window.innerHeight < 1440) {
      setTextAreaCols(8);
    }
  }, []);

  return (
    <div className=" flex flex-col justify-center sm:pt-40 md:py-4">
      <div className={`flex flex-row ${ errorMessage ? "justify-around" : " pl-24 " }`}>
        <h1 className="text-3xl sedgwick text-gray my-16"> Let's talk! </h1>
        {errorMessage ? (
          <div className=" ml-20 rotate-6 animate-ping animate-pulse p-2 z-20 rounded-lg text-gray py-2 bg-tawny-text mt-16">
            <h1 className="xl:text-2xl sedgwick lg:mt-8 " > {errorMessage} </h1>
          </div>
        ) : null}
      </div>
      <form ref={formRef} className="-mt-10" onSubmit={(e) => onSubmit(e)}>
        <div className=" lg:flex lg:flex-row flex flex-col">
          <div className="flex flex-col w-full pl-[8%]">
            <div className="xl:w-[50%] w-[75%] py-8">
              <h1 className="text-2xl sedgwick text-gray ml-8"> Name </h1>
              <div className="relative group h-20">
                <img
                  className="absolute h-[100%] group-hover:transition group-hover:scale-105 group-hover:ease-in top-0 z-0"
                  src={process.env.PUBLIC_URL + IMGSDIR + NAMEBG}
                  alt=""
                />
                <input
                  className="text-ink absolute ml-2 top-4 left-12 h-10 lg:w-64 focus:transition focus:shadow-md focus:outline-none p-2 "
                  placeholder="Your Name"
                  value={inputStatus?.name}
                  onChange={(e) => onInputChange(e, "name")}
                  type="text"
                  name="name"
                  id="name-input"
                />
              </div>
            </div>
            <div className=" xl:w-[50%] lg:w-[75%] md:w-[80%] py-8">
              <h1 className="text-2xl sedgwick text-gray ml-8"> Email </h1>
              <div className="relative group h-20">
                <img
                  ref={messageRef}
                  className="absolute h-[100%] group-hover:transition group-hover:scale-105 group-hover:ease-in top-0 z-0"
                  src={process.env.PUBLIC_URL + IMGSDIR + NAMEBG}
                  alt=""
                />
                <input
                  className="text-ink absolute lg:ml-2 top-4 left-12 h-10 lg:w-64 focus:transition focus:shadow-md focus:outline-none p-2 "
                  placeholder="your email"
                  value={inputStatus?.email}
                  onChange={(e) => onInputChange(e, "email")}
                  type="email"
                  name="email"
                  id="email-input"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[64rem]  h-[20rem] lg:h-auto lg:ml-0 lg:-translate-x-20 xl:-translate-x-56">
            <h1 className="text-2xl sedgwick text-gray lg:ml-8 ml-20"> Your message </h1>
            <div className="relative pl-8 md:pl-[8rem] lg:pl-0 group h-20">
              <img
                className="absolute group-hover:transition group-hover:ease-in top-0 z-0"
                src={process.env.PUBLIC_URL + IMGSDIR + MESSBG}
                alt=""
              />
              <textarea
                rows={textAreaRows}
                className="text-ink absolute top-10 w-96 lg:ml-2 lg:top-8 translate-x-20 lg:translate-x-16  focus:transition focus:shadow-md focus:outline-none p-6 "
                value={inputStatus?.message}
                placeholder="your message"
                onChange={(e) => onInputChange(e, "message")}
                name="message"
                id="message-input"
              />
            </div>
          </div>
        </div>
        <div className=" align-baseline flex flex-row justify-around items-center ">
          <button
            className="shadow-md w-32 bg-green-card rounded-xl p-4 hover:transition hover:shadow-xl hover:ease-in hover:scale-105"
            type="submit"
          >
            <p className=" sedgwick ">Submit</p>
          </button>
          <button
            className="shadow-md w-32 group bg-pink-card rounded-xl p-4 hover:transition hover:shadow-xl hover:ease-in hover:scale-105"
            type="reset"
            onClick={() => onReset()}
          >
            <p className=" sedgwick group-hover:scale-y-105 ">Reset</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;

