export function QuestionBox({
  questions,
  questionTab,
  setQuestionTab,
  setAnswers,
}) {
  const question = questions[questionTab - 1].question;
  const options = questions[questionTab - 1].options;

  return (
    <div
      className="container mx-auto rounded-xl overflow-hidden bg-white mb-20"
      id="questionBox"
      style={{
        boxShadow: "0 0 40px 3px rgba(69, 66, 255, 0.6)",
      }}
    >
      <div className="bg-blue-600 text-white py-7 rounded-xl">
        <h5 className="text-center text-xl font-bold">{question}</h5>
      </div>
      <div className="py-10">
        {options?.map((option) => (
          <div
            className="text-center hover:bg-blue-600 hover:text-white cursor-pointer text-lg border py-5 px-7 my-5 mx-auto rounded-xl font-bold text-purple-600"
            style={{
              maxWidth: "400px",
              transition: "all 0.4s",
            }}
            onClick={(e) => {
              setAnswers((prev) => [...prev, option.key]);

              //   if (questionTab < questions.length) {
              document.getElementById("questionBox").style.transition =
                "all 0.5s";
              document.getElementById("questionBox").style.opacity = "0";
              setTimeout(() => {
                setQuestionTab(questionTab + 1);

                document.getElementById("questionBox").style.transition =
                  "all 0.3s";
                document.getElementById("questionBox").style.opacity = "1";
              }, 700);
            }}
          >
            {option.answer}
          </div>
        ))}

        <div className="flex justify-center gap-3">
          <div
            className={`rounded-full bg-gray-300`}
            onClick={(e) => setQuestionTab(0)}
            style={{
              height: "12px",
              width: "12px",
            }}
          ></div>
          {questions.map((candidate, i) => (
            <div
              className={`rounded-full ${
                questionTab - 1 == i ? "bg-blue-600" : "bg-gray-300"
              } `}
              style={{
                height: "12px",
                width: "12px",
              }}
            ></div>
          ))}
          <div
            className={`rounded-full bg-gray-300`}
            style={{
              height: "12px",
              width: "12px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
