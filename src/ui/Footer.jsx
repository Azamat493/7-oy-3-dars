import React from "react";
import logo1 from "../assets/media/brand/logo1.png";
import Vector3 from "../assets/media/icons/Vector3.png";
import Vector1 from "../assets/media/icons/Vector1.png";
import Vector2 from "../assets/media/icons/Vector2.png";
import Vector from "../assets/media/icons/Vector.png";
import Group287 from "../assets/media/icons/Group287.png";
import Group288 from "../assets/media/icons/Group288.png";
import PaymentMethod from "../assets/media/icons/PaymentMethod.png";
import PaymentMethod1 from "../assets/media/icons/PaymentMethod1.png";

function LinksColumn({ items }) {
  return (
    <ul className="space-y-2 text-sm text-black">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function Contact({ icon, text }) {
  return (
    <div className="flex gap-3 items-start">
      <img src={icon} alt="" className="w-5 mt-0.5 flex-shrink-0" />
      <div className="text-sm leading-snug text-black">{text}</div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-16">
      <div className="max-w-[1502px] mx-auto md:w-[90%] w-full px-5">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-gray-300">
          <div>
            <img
              src={logo1}
              alt="AutoPro"
              className="w-[165px] h-[93px] mb-4"
            />
            <p className="text-xs text-black mb-5">
              Продажа запасных частей <br />
              ГАЗ, ВАЗ, ПАЗ, УАЗ, КАМАЗ
            </p>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-start p-2 bg-white rounded shadow-sm hover:bg-gray-50 gap-3"
              >
                {/* Картинка слева */}
                <img src={Vector3} alt="icon" className=" flex-shrink-0" />

                {/* Два текста справа */}
                <div className="flex flex-col">
                  <span className="text-[#3757cb] font-medium underline [text-decoration-skip-ink:none]">
                    Скачать каталог
                  </span>
                  <span className="text-[#3757cb] font-medium underline [text-decoration-skip-ink:none]">
                    Запросить прайс
                  </span>
                </div>
              </a>
            </div>

            <div className="flex gap-4 mt-6">
              <img
                src={Vector1}
                alt="VK"
                className="w-5 cursor-pointer hover:opacity-80"
              />
              <img
                src={Vector2}
                alt="Telegram"
                className="w-5 cursor-pointer hover:opacity-80"
              />
            </div>
          </div>

          <LinksColumn
            items={[
              "Каталог",
              "О компании",
              "Партнерам",
              "Новости",
              "Контакты",
            ]}
          />

          <LinksColumn
            items={[
              "Трансмиссия",
              "Система охлаждения",
              "Электрика",
              "Система отопления",
              "Амортизаторы",
            ]}
          />

          <LinksColumn
            items={[
              "Сцепление и тормозная система",
              "Ролики, натяжители и приводные ремни",
              "Ремкомплекты и рулевое управление",
              "Двигатель и КПП",
            ]}
          />

          <div className="space-y-5">
            <Contact
              icon={Vector}
              text={
                <>
                  +7 (495) 123-45-67
                  <br />
                  +7 (495) 123-45-68
                </>
              }
            />
            <Contact
              icon={Group287}
              text={
                <>
                  8:30 – 16:30
                  <br />
                  <span className="text-gray-500">сб, вс — выходной</span>
                </>
              }
            />
            <Contact
              icon={Group288}
              text={
                <>
                  г. Москва
                  <br />
                  ул. Промышленная, 10
                </>
              }
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6 text-sm text-gray-500">
          <span>© 2016 – 2022 <span className="text-[#c83642]">pravt</span> Все права защищены</span>
          <div className="flex items-center gap-6">
            <span className="cursor-pointer hover:text-gray-700">
              Политика безопасности
            </span>
            <div className="flex gap-2">
              <img src={PaymentMethod} alt="Visa" className="h-6" />
              <img src={PaymentMethod1} alt="Mastercard" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
