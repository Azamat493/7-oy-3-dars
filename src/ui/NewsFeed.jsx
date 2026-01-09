import Group396 from "../assets/media/icons/Group396.png";
import Maskgroup from "../assets/media/icons/Maskgroup.png";
import Maskgroup1 from "../assets/media/icons/Maskgroup1.png";
import car from "../assets/media/icons/car.png";
import Group373 from "../assets/media/icons/Group373.png";
import car2 from "../assets/media/icons/car2.png";
import car3 from "../assets/media/icons/car3.png";
import Group371 from "../assets/media/icons/Group371.png";

export default function NewsFeed() {
  return (
    <section className="bg-[#f6f6f6] py-20 relative">
      <div className="absolute right-0 top-0 opacity-10">
        <div className="w-[400px] h-[400px] bg-gray-300 rounded-full" />
      </div>
      <div className="max-w-[1502px] mx-auto md:w-[90%] w-full px-4">
        {/* 🔥 Asosiy tuzatish: bu div scroll uchun muhim */}
        <div className="w-full min-w-0 overflow-x-auto pb-2 -mx-4 px-4">
          <div className="flex gap-6 items-center whitespace-nowrap">
            {[car, Group373, car2, car3, Group371].map((img, i) => (
              <img
                key={i}
                src={img}
                className="h-12 w-24 object-contain flex-shrink-0"
                alt={`brand-${i}`}
              />
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-2">Новости</h2>
        <p className="text-sm text-gray-500 mb-8 max-w-xl">
          Актуальные обновления, поступления и специальные предложения.
        </p>
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            {
              img: Group396,
              title: "Новинки амортизаторы",
              date: "24.06.2022",
            },
            {
              img: Maskgroup,
              title: "Ожидаемое поступление – вакуумный усилитель тормозов",
              date: "24.06.2022",
            },
            { img: Maskgroup1, title: "Вновь на складе", date: "24.06.2022" },
          ].map((item, i) => (
            <div key={i}>
              <div className="bg-white p-6 mb-4 rounded-lg shadow-sm">
                <img src={item.img} alt="" className="mx-auto h-28" />
              </div>
              <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
              <div className="flex mt-4 items-start px-4 gap-5 justify-between">
                <p className="font-normal text-lg text-[#b6b6b6] mb-2">
                  {item.date}
                </p>
                <button className="font-normal gap-2 text-xl text-black flex items-center">
                  Подробнее
                  <svg
                    width="23"
                    height="15"
                    viewBox="0 0 23 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.7071 8.07112C23.0976 7.6806 23.0976 7.04743 22.7071 6.65691L16.3431 0.292946C15.9526 -0.0975785 15.3195 -0.0975785 14.9289 0.292946C14.5384 0.68347 14.5384 1.31664 14.9289 1.70716L20.5858 7.36401L14.9289 13.0209C14.5384 13.4114 14.5384 14.0446 14.9289 14.4351C15.3195 14.8256 15.9526 14.8256 16.3431 14.4351L22.7071 8.07112ZM0 8.36401H22V6.36401H0V8.36401Z"
                      fill="#C82132"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}