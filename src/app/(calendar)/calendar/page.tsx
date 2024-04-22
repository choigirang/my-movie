import AboutMap from "../aboutMap";

const DAY_LIST = ["일", "월", "화", "수", "목", "금", "토"];

export default function Index() {
  return (
    <section className="w-full container flex-col pt-32">
      <div className="bg-[rgb(24,24,24)] text-white p-5 rounded-lg">
        <AboutMap>
          <div className="grid grid-cols-7">
            {DAY_LIST.map((key) => (
              <div
                key={key}
                className="flex justify-center py-8 first-of-type:text-[#ff3d3d] last-of-type:text-[#3d77ff]"
              >
                {key}
              </div>
            ))}
          </div>
        </AboutMap>
      </div>
    </section>
  );
}
