"use client";

import React, { useState, useRef } from "react";

import emailjs from "emailjs-com";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState(-1);
  const [success, setSuccess] = useState(-1);
  const [isComponentVisible, setComponentVisible] = useState(false);

  const submitButton = () => {
    console.log("clicked");
    console.log(email, subject, text);
  };

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_m6vpviw",
          "template_cs9pbiq",
          form.current,
          "g9W1Gd0jxJl_vDTUz"
        )
        .then(
          (result: any) => {
            form.current?.reset();
            console.log(result.text);
          },
          (error: any) => {
            setError(1);
          }
        );
    }
  };

  return (
    <div className="w-[100%]  h-screen flex  justify-center items-center  flex-wrap font-thin">
      <div className="w-[75%]  flex flex-col  bg-ose-300  gap-2 ">
        <div className=" w-full animate-cards flex   flex-col gap-4 bg-yelow-400 items-center">
          <p className="text-3xl flex justify-center xs:text-5xl">Let's Talk</p>
        </div>
        <div className="flex   justify-center items-center ">
          <div className="form-container flex ">
            <form
              className="form animate-cards"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="flex justify-around gap-4">
                <div className="form-group animate-cards w-[40%] ">
                  <label htmlFor="email animate-cards ">Full Name</label>
                  <input required id="email" type="text" name="user_email" />
                </div>
                <div className="form-group animate-cards w-[60%]">
                  <label htmlFor="subject animate-cards"> Email</label>
                  <input id="email" type="text" name="lastname" />
                </div>
              </div>
              <div className="form-group animate-cards">
                <label htmlFor="subject animate-cards"> Subject</label>
                <input
                  required
                  name="subject"
                  id="subject"
                  type="text"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div className="form-group animate-cards">
                <label htmlFor="textarea animate-cards">Message</label>
                <textarea
                  required
                  cols={50}
                  rows={10}
                  id="textarea"
                  name="message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="form-submit-btn animate-cards"
                value="Send"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
