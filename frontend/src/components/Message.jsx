import React, { useState } from "react";
import message from "../assets/message.png";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";


const Message = () => {


  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [messages, setMessages] = useState("")

  const service_id = "service_j26rgoj"
  const template_id = "template_ww1b01o"
  const public_key = "oM7jiWVPgcsDKXsB0"

  const templateParams = {
    firstname: firstName,   // 👈 must match your EmailJS template variable
    lastname: lastName,
    email: email,
    message: messages,
  };

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        service_id,   // 👈 Replace with your Service ID
        template_id,  // 👈 Replace with your Template ID
        templateParams,         // 👈 Sends the values
        public_key    // 👈 Replace with your Public Key
      )
      .then(
        () => {
          toast.success("Message Sent Successfully!");
          setEmail("")
          setFirstName("")
          setLastName("")
          setMessages("")
        },
        (error) => {
          console.error(error.text);
          toast.error("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="w-full px-5 lg:px-40 my-20 flex flex-col-reverse md:flex-row lg:gap-24 gap-16 items-center">
      <div>
        <h1 className="text-[#102D47] lg:text-[40px] text-[25px] mb-10">
          Send Us A message
        </h1>

        <form onSubmit={sendEmail} className="space-y-5 flex-[50%]">
          <div className="flex justify-between items-center gap-10">
            <div className="w-full">
              <label className="text-[#102D47] text-[17px]" htmlFor="">
                First name*
              </label>{" "}
              <br />
              <input
                type="text"
                name="firstName"
                id=""
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder=""
                className="outline-0 border px-2 py-3 w-full border-[#C0D5FB] rounded-md"
              />
            </div>

            <div className="w-full">
              <label className="text-[#102D47] text-[17px]" htmlFor="">
                Last name*
              </label>{" "}
              <br />
              <input
                type="text"
                name="lastName"
                id=""
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder=""
                className="outline-0 border px-2 py-3 w-full border-[#C0D5FB] rounded-md"
              />
            </div>
          </div>

          <div className="flex justify-between items-center gap-10">
            <div className="w-full">
              <label className="text-[#102D47] text-[17px]" htmlFor="">
                Email*
              </label>{" "}
              <br />
              <input
                type="email"
                name="email"
                id=""
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                placeholder=""
                className="outline-0 border px-2 py-3 w-full border-[#C0D5FB] rounded-md"
              />
            </div>

            {/* <div className="w-full">
              <label className="text-[#102D47] text-[17px]" htmlFor="">
                First name*
              </label>{" "}
              <br />
              <input
                type="text"
                name=""
                id=""
                placeholder=""
                className="outline-0 border px-2 py-3 w-full border-[#C0D5FB] rounded-md"
              />
            </div> */}
          </div>

          <textarea
            name="messages"
            id=""
            className="w-full outline-0 border px-2 py-3  border-[#C0D5FB] rounded-md "
            rows={5}
            value={messages}
            onChange={(e) => setMessages(e.target.value)}
            placeholder="Message"
          ></textarea>

          <button
            type="submit"
            className="w-fit bg-[#3187F4] px-6 py-3 text-white rounded-md"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="w-full flex-[50%]">
        <img src={message} className="object-cover w-full" alt="" />
      </div>
    </div>
  );
};

export default Message;
