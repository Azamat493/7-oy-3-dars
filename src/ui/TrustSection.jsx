import React from "react";
import PaymentMethod from "../assets/media/icons/PaymentMethod.png";
import PaymentMethod1 from "../assets/media/icons/PaymentMethod1.png";
import Group295 from "../assets/media/icons/Group295.png";
import medal1 from "../assets/media/icons/medal1.png";
import Group293 from "../assets/media/icons/Group293.png";
import Group from "../assets/media/icons/Group.png";
import repocom1 from "../assets/media/icons/repocom1.png";

export default function TrustSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1502px] mx-auto md:w-[90%] w-full px-5">
        <h2 className="text-center font-normal text-[32px] tracking-[0.03em] text-[#c83642] font-third-family md:text-3xl  mb-14">
          Безопасность, комфорт, надежность!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gray-50 rounded-xl p-6 text-sm text-gray-600 leading-relaxed">
            Вся продукция изготовлена в соответствии с Директивой Европейского
            парламента и Совета Европейского Союза 2007/46/ЕС от 5 сентября 2007
            г. На всю продукцию, которая требует подтверждения безопасности
            использования на территории РФ и Таможенного союза есть
            подтверждение соответствию требованиям техническим регламентов:{" "}
            <span className="font-medium">ТР ТС 018/2011 и ТР ТС 010/2011</span>
          </div>

          <div className="bg-white border rounded-xl p-6">
            <h3 className="font-semibold mb-4">Варианты оплаты:</h3>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>– Оплата наличными</li>
              <li>
                - Для юридических лиц возможен безналичный расчёт с НДС, для
                ближнего зарубежья без НДС
              </li>
            </ul>
            <h4 className="font-semibold mb-3">Так же принимаем к оплате:</h4>
            <div className="flex items-center gap-3">
              <img src={PaymentMethod} alt="visa" className="h-6" />
              <img src={PaymentMethod1} alt="mastercard" className="h-6" />
            </div>
          </div>

          <div className="rounded-xl p-6 text-white bg-gradient-to-r from-[#4c4a74] to-[#58a6a0] flex flex-col justify-between">
            <img src={Group295} alt="tirsan" className="h-10 mb-4 w-fit" />
            <p className="text-sm leading-relaxed opacity-90">
              Так же, наша компания является официальным представителем TIRSAN
              KARDAN (Тирсан Кардан) на территории Нижегородской области.
              Продукция успешно присутствует на российском рынке свыше 9 лет.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <Feature icon={medal1} title="Гарантия качества" />
          <Feature icon={Group293} title="Быстрая доставка" />
          <Feature icon={Group} title="Конкурентные цены" />
          <Feature icon={repocom1} title="Персональный менеджер" />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title }) {
  return (
    <div className="flex items-start gap-4">
      <img src={icon} alt={title} className="w-10 h-10" />
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur 
        </p>
      </div>
    </div>
  );
}
