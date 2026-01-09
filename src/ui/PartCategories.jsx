import CategoryItem from './CategoryItem';

import dvigatel from '../assets/media/icons/dvigatel.png';
import forsunki from '../assets/media/icons/forsunki.png';
import ventilator from '../assets/media/icons/ventilator.png';
import stseplenie from '../assets/media/icons/stseplenie.png';
import korobka from '../assets/media/icons/korobka.png';
import Traced from '../assets/media/icons/Traced.png';
import peredniy from '../assets/media/icons/peredniy.png';
import Frame4 from '../assets/media/icons/Frame4.png';
import koleso from '../assets/media/icons/koleso.png';
import tormoza from '../assets/media/icons/tormoza.png';
import rulevaya from '../assets/media/icons/rulevaya.png';
import electro from '../assets/media/icons/electro.png';
import Frame41 from '../assets/media/icons/Frame41.png';

const categories = [
  { title: "Двигатель", img: dvigatel, color: "#f58634" },
  { title: "Система питания", img: forsunki, color: "#d76438" },
  { title: "Система охлаждения", img: ventilator, color: "#ce4a38" },
  { title: "Сцепление", img: stseplenie, color: "#9dd3af" },
  { title: "Коробка передач", img: korobka, color: "#5cad78" },
  { title: "Карданный вал", img: Traced, color: "#309e58" },
  { title: "Мост передний и задний", img: peredniy, color: "#de828a" },
  { title: "Подвеска", img: Frame4, color: "#df3b4a" },
  { title: "Колеса и ступицы", img: koleso, color: "#bd3438" },
  { title: "Тормоза", img: tormoza, color: "#00afef" },
  { title: "Рулевое управление", img: rulevaya, color: "#91d8f7" },
  { title: "Электро-оборудование", img: electro, color: "#0098da" },
  { title: "Отопление и вентиляция", img: Frame41, color: "#1b609e" },
];

export default function PartCategories() {
  return (
    <section className="max-w-[1502px] mx-auto md:w-[90%] w-full px-4 py-14">
      <h2 className="text-2xl font-bold mb-8">Продажа запасных частей для авто</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((item, index) => (
          <CategoryItem key={index} {...item} />
        ))}

        <div className="col-span-2 md:col-span-3 bg-[#c83c44] text-white p-10 relative overflow-hidden">
          <h3 className="text-xl font-semibold mb-6">Каталог запасных частей</h3>
          <button className="flex items-center gap-2 text-sm font-medium">
            Перейти <span className="text-xl">→</span>
          </button>
          <div className="absolute right-0 bottom-0">
            <img src={stseplenie} alt="" className="h-48" />
          </div>
        </div>
      </div>
    </section>
  );
}