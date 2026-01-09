import Group439 from '../assets/media/brand/Group439.png';
import logo1 from '../assets/media/brand/logo1.png';

export default function CompanyOverview() {
  return (
    <section className="max-w-[1502px] mx-auto md:w-[90%] w-full px-4 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-start">
        <div className='flex flex-col'>
        <div className="relative">
          <img
            src={Group439}
            alt="Склад"
            className="w-full h-[360px] object-cover"
          />
          <div className="absolute top-0 left-0 bg-[#c83c44] p-6">
            <img src={logo1} alt="AutoPro" className="h-10" />
          </div>
        </div>
         <div className="flex gap-2 mt-6">
        <span className="w-6 h-[2px] bg-[#c83c44]" />
        <span className="w-6 h-[2px] bg-gray-300" />
        <span className="w-6 h-[2px] bg-gray-300" />
          </div>
          </div>
        <div>
          <h2 className="text-2xl font-bold mb-6">О компании</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            На протяжении 6 лет компания AutoPro занимается поставками автозапчастей
            для популярных марок. Мы развиваем собственный бренд — сертифицированный
            и проверенный временем. Наша сеть охватывает регионы страны и соседние рынки.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Сегодня в ассортименте более 600 наименований. Ежегодно он расширяется
            минимум на 35%. Производственные мощности наших партнёров находятся в Азии.
          </p>
          <button className="flex items-center gap-2 text-sm font-medium text-[#c83c44]">
            Подробнее <span className="text-lg">→</span>
          </button>
        </div>
      </div>
     
    </section>
  );
}