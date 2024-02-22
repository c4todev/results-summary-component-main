import data from "../data.json";

export default function App() {
  return (
    <div className="flex flex-col lg:flex-row sm:rounded-3xl sm:shadow-xl h-screen sm:h-auto">
      <div className="text-center bg-gradient-to-t from-light-royal-blue to-light-slate-blue text-white rounded-b-3xl lg:rounded-3xl lg:max-w-[375px] h-auto">
        <div>
          <h1 className="pt-4 text-p-white sm:text-lg sm:pt-5 ">Your Result</h1>
        </div>
        <div className="flex flex-col items-center justify-center my-5 bg-gradient-to-b from-violet-blue to-persian-blue rounded-full w-24 h-24 sm:w-36 sm:h-36 mx-auto">
          <p className="font-bold text-4xl sm:text-5xl">76</p>
          <p className="text-xs sm:text-base mt-1 text-p-white-secondary font-medium">
            of 100
          </p>
        </div>
        <div className="my-5 pb-5 px-10">
          <h2 className="mt-6 lg:mt-8 font-bold text-2xl tracking-normal">
            Great
          </h2>
          <p className="text-p-white mt-2 lg:mt-4 lg:px-[2.4rem]">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>
      <div className="mx-7 lg:max-w-[375px]">
        <h3 className="text-pale-blue font-semibold mb-1 mt-5">Summary</h3>
        <div className="flex flex-col sm:flex-row sm:gap-3 lg:flex-col lg:gap-0">
          {data.map((item, index) => (
            <div
              style={{ backgroundColor: `${item.background}` }}
              key={index}
              className="flex flex-row sm:flex-col lg:flex-row sm:items-center sm:flex-1 lg:flex-0 sm:gap-2 justify-between mt-4 p-3 rounded-md"
            >
              <div className="flex flex-row gap-3 sm:gap-1">
                <img className="w-5" src={item.icon} />
                <p style={{ color: `${item.color}` }}>{item.category}</p>
              </div>
              <div className="flex flex-row gap-2 font-semibold">
                <p className="text-pale-blue">{item.score}</p>
                <span className="opacity-50">/ 100</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center my-5 mx-7">
          <button className="bg-btn text-white py-4 w-full lg:max-w-[768px] rounded-full active:bg-gradient-to-t active:from-light-royal-blue active:to-light-slate-blue">
            Continue
          </button>
        </div>
        <div className="text-[11px] text-center mb-2">
          Challenge by{" "}
          <a
            style={{ color: "hsl(228, 45%, 44%)" }}
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            style={{ color: "hsl(228, 45%, 44%)" }}
            href="https://www.cagataysengirgin.com/"
            target="_blank"
          >
            Çağatay Şengirgin
          </a>
          .
        </div>
      </div>
    </div>
  );
}
