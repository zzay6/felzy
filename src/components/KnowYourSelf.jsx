import Link from "next/link";
import { QuestionBox } from "./QuestionBox";
import { useEffect, useState } from "react";

export function KnowYourSelf() {
  const [questionTab, setQuestionTab] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [which, setWhich] = useState([]);
  const [proporsition, setProporsition] = useState([]);

  const questions = [
    {
      question: "Ketika bekerja, apa yang lebih menarik bagimu?",
      options: [
        {
          key: "d",
          answer: "Membuat sesuatu yang terlihat menarik dan estetika",
        },
        {
          key: "p",
          answer: "Membangun sesuatu yang fungsional dan bekerja dengan baik",
        },
      ],
    },
    {
      question: "Bagaimana cara berpikirmu saat menyelesaikan masalah?",
      options: [
        {
          key: "d",
          answer: "Bereksperimen dengan kreatif sampai terasa pas",
        },
        {
          key: "p",
          answer: "Menganalisis dan mencari solusi yang paling efisien",
        },
      ],
    },
    {
      question: "Mana yang lebih sering kamu gunakan ?",
      options: [
        {
          key: "d",
          answer: "Figma, Photoshop, atau Sketch",
        },
        {
          key: "p",
          answer: "VS Code, Terminal, atau GitHub",
        },
      ],
    },
  ];

  useEffect(() => {
    const count = answers.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});

    const prop = Object.fromEntries(
      Object.entries(count).map(([key, value]) => [
        key,
        (value / answers.length).toFixed(2),
      ])
    );

    setProporsition(prop);

    setWhich(prop.d > prop.p ? "d" : "p");
  }, [answers]);

  return (
    <>
      {questionTab ? (
        <div>
          {questionTab <= questions.length ? (
            <QuestionBox
              questions={questions}
              questionTab={questionTab}
              setQuestionTab={setQuestionTab}
              setAnswers={setAnswers}
            />
          ) : (
            <div
              className="bg-white px-5 py-10 mb-20 container mx-auto rounded-xl"
              style={{
                boxShadow: "0 0 40px 3px rgba(69, 66, 255, 0.6)",
              }}
            >
              <h1 className="text-center font-bold text-4xl mb-5">
                Kamu Tim {which === "d" ? "Desainer!" : "Coder!"}
              </h1>
              <div className="text-center">
                {which === "d" ? (
                  <img
                    src="/assets/images/ember.png"
                    className="h-[250px] mx-auto -mb-14"
                    alt="Ember"
                  />
                ) : (
                  <div>
                    <img
                      src="/assets/images/computer.png"
                      className="h-[250px] mx-auto -mb-14"
                      alt="Ember"
                    />
                  </div>
                )}
              </div>
              <div className="flex items-center justify-center gap-x-4">
                <div>
                  <img
                    src="/assets/images/ember.png"
                    className="h-[150px]"
                    alt="Ember"
                  />
                </div>
                <div className="w-96 h-5 bg-gray-300 rounded-full overflow-hidden flex">
                  <div
                    className="bg-pink-500 h-full transition-all duration-500"
                    style={{
                      width: `${proporsition.d * 100}%`,
                    }}
                  ></div>
                  <div
                    className="bg-blue-400 h-full transition-all duration-500"
                    style={{
                      width: `${proporsition.p * 100}%`,
                    }}
                  ></div>
                </div>
                <div>
                  <img
                    src="/assets/images/computer.png"
                    className="h-[150px]"
                    alt="Computer"
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={(e) => setQuestionTab(questionTab + 1)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-full"
                >
                  Intip Portofolio!
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div
          className="bg-white px-5 py-10 mb-20 container mx-auto rounded-xl"
          style={{
            boxShadow: "0 0 40px 3px rgba(69, 66, 255, 0.6)",
          }}
        >
          <h1 className="text-center font-bold text-4xl mb-5">
            Kamu Tim Yang Mana?
          </h1>
          <div className="flex justify-center items-center">
            <h6 className="text-xl text-center ml-6">
              Cari tahu apakah kamu lebih cocok di dunia desain atau coding
            </h6>
            <img
              src="/assets/images/search.png"
              style={{
                width: "40px",
              }}
              alt=""
            />
          </div>
          <div className="flex items-center gap-6 justify-center">
            <img
              src="/assets/images/ember.png"
              style={{
                height: "250px",
              }}
              alt=""
            />
            <h5 className="text-2xl font-bold">VS</h5>
            <img
              src="/assets/images/computer.png"
              style={{
                height: "250px",
              }}
              alt=""
            />
          </div>
          <div className="text-center">
            <button
              onClick={(e) => setQuestionTab(questionTab + 1)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-full"
            >
              Coba Sekarang
            </button>
          </div>
        </div>
      )}
    </>
  );
}
