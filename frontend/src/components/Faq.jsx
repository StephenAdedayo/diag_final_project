import React, { useState } from "react";

const Faq = () => {
  const faqs = [
    {
      question: "What is preemptive diabetes diagnosis?",
      answer:
        "Preemptive diabetes diagnosis refers to the use of technology to identify individuals at risk of developing diabetes before symptoms become severe or complications arise.",
    },
    {
      question: "How does your platform predict diabetes risk?",
      answer:
        "Our platform uses machine learning algorithms trained on real-world data to analyze patterns and symptoms entered by users. It provides an early risk assessment to support preventive healthcare decisions.",
    },
    {
      question: "Is the diagnosis provided 100% accurate?",
      answer:
        "While our system is highly efficient, it is not a replacement for professional medical advice. It offers early insights and recommends if further medical testing is necessary.",
    },
    {
      question: "Is my personal health data safe?",
      answer:
        "Yes, we prioritize your privacy. All data entered is encrypted and stored securely in compliance with data protection standards.",
    },
    {
      question: "Is this service free?",
      answer:
        "Yes, the basic diagnosis tool is completely free. We are committed to making diabetes awareness and early detection accessible to all.",
    },
    {
      question: "What do I do if my results show high risk?",
      answer:
        "If your risk level is high, we recommend booking an appointment with a certified healthcare provider for further testing and guidance.",
    },
  ];

  const [drop, setDrop] = useState(false);

  const handleDrop = (index) => {
    setDrop(drop === index ? null : index);
  };

  return (
    <div className="w-full my-20 py-10 px-5 lg:px-40 bg-[#EFFBFF]">
      <h1 className="mb-10 text-[#102D47] font-bold text-[20px] lg:text-[35px]">
        Frequently Asked Questions
      </h1>

      <div>
        {faqs.map((faq, index) => (
          <div className="border-b py-3 mb-5">
            <div
              onClick={() => handleDrop(index)}
              className="flex justify-between cursor-pointer mb-5"
            >
              <p className="text-[#102D47]">{faq.question}</p>
              <p className="text-2xl" onClick={() => handleDrop(index)}>
                {drop === index ? "-" : "+"}
              </p>
            </div>
            <div
              className={`${
                drop === index ? "max-h-screen h-full" : "max-h-0 h-0"
              } transition-all duration-700 delay-75 ease-in overflow-hidden`}
            >
              <p className="text-zinc-500 pl-2">- {faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
