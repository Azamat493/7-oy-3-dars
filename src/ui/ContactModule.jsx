import React from 'react';
import Vector from '../assets/media/icons/Vector.png';
import Group287 from '../assets/media/icons/Group287.png';
import Group288 from '../assets/media/icons/Group288.png';
import Group348 from '../assets/media/icons/Group348.png';
import Vector1 from '../assets/media/icons/Vector1.png';
import Vector2 from '../assets/media/icons/Vector2.png';

export default function ContactModule() {
  return (
    <section className="bg-white py-14">
      <div className="max-w-[1502px] mx-auto md:w-[90%] w-full px-6">
        <div className="text-sm text-gray-400 mb-6">
          Главная <span className="mx-2">•</span> <span className="text-red-500">Контакты</span>
        </div>
        <h1 className="text-3xl font-bold mb-12">Контакты</h1>
        <div className="grid grid-cols-1 xl:grid-cols-[420px_1fr] gap-10 items-start">
          <div className="space-y-9">
            <Info icon={Vector} title="Отдел продаж:" text={<>+7 (495) 123-45-67<br />+7 (495) 123-45-68</>} />
            <Info icon={Group287} title="Время работы:" text={<>8:30 – 16:30<br /><span className="text-gray-500">сб, вс — выходной</span></>} />
            <Info icon={Group288} title="Адрес:" text={
              <>
                г. Москва<br />ул. Промышленная, 10<br />
                <a href="https://yandex.ru/maps" target="_blank" className="text-blue-500 text-sm mt-1 inline-block">Проложить маршрут</a>
              </>
            } />
            <Info icon={Group348} title="Email:" text={<a href="mailto:info@autopro.example" className="text-blue-500 font-semibold text-lg">info@autopro.example</a>} />
            <div className="flex gap-5 pl-12">
              <img src={Vector1} alt="VK" className="w-6 cursor-pointer hover:opacity-70" />
              <img src={Vector2} alt="Telegram" className="w-6 cursor-pointer hover:opacity-70" />
            </div>
          </div>
          <div className="w-full h-[520px] xl:h-[600px] rounded-xl overflow-hidden">
            <iframe
              title="map"
              src="https://yandex.ru/map-widget/v1/?ll=37.6173%2C55.7558&z=12&l=map"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ icon, title, text }) {
  return (
    <div className="flex gap-5 items-start">
      <img src={icon} alt="" className="w-9 h-9 mt-1" />
      <div>
        <p className="text-gray-500 mb-1">{title}</p>
        <div className="text-black leading-snug">{text}</div>
      </div>
    </div>
  );
}