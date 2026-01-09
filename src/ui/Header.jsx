// Header.jsx

import { NavLink, useNavigate } from "react-router-dom";
import logo1 from "../assets/media/brand/logo1.png";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navClass = ({ isActive }) =>
    `px-4 py-2 transition font-medium ${
      isActive ? "text-red-500 border-b-2 border-red-500" : "hover:text-red-500"
    }`;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sm:static sticky top-0 w-full bg-white z-50 shadow">
      <div className="hidden md:flex flex-wrap gap-10 max-w-[1502px] mx-auto md:w-[90%] w-full px-4 py-3 justify-between items-start">
        <img src={logo1} alt="AutoPro" className="h-20" />

        <div className="flex flex-col  flex-1 ml-10">
          <div className="flex flex-wrap gap-5 justify-between items-center text-xs text-gray-600 mb-4">
            <p className="font-normal text-[13px] tracking-[0.03em] uppercase text-black max-w-[220px]">
              Продажа запасных частей ГАЗ, ВАЗ, ПАЗ, УАЗ, КАМАЗ
            </p>

            <div className="flex gap-5  items-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.3586 23.138V27.5894C30.3603 28.0026 30.2761 28.4116 30.1114 28.7902C29.9467 29.1689 29.7051 29.5087 29.4022 29.7881C29.0992 30.0675 28.7416 30.2801 28.3521 30.4125C27.9627 30.5449 27.55 30.5941 27.1406 30.5569C22.5981 30.0608 18.2347 28.5006 14.401 26.0017C10.8343 23.7236 7.81034 20.6841 5.54389 17.0991C3.04909 13.2282 1.49653 8.8211 1.01198 4.23477C0.975093 3.82446 1.02361 3.41092 1.15443 3.02049C1.28526 2.63005 1.49554 2.27128 1.77187 1.967C2.04821 1.66273 2.38455 1.41962 2.75948 1.25316C3.13441 1.0867 3.53972 1.00053 3.9496 1.00014H8.37817C9.09458 0.993057 9.7891 1.24805 10.3323 1.7176C10.8755 2.18714 11.2303 2.8392 11.3306 3.55223C11.5175 4.97675 11.8641 6.37545 12.3639 7.72163C12.5625 8.25271 12.6055 8.82989 12.4877 9.38477C12.37 9.93965 12.0965 10.449 11.6996 10.8524L9.82484 12.7368C11.9263 16.4515 14.9863 19.5272 18.682 21.6394L20.5567 19.755C20.9581 19.3561 21.4648 19.0812 22.0169 18.9628C22.5689 18.8445 23.1431 18.8877 23.6715 19.0873C25.0108 19.5897 26.4024 19.9381 27.8196 20.126C28.5367 20.2277 29.1916 20.5907 29.6597 21.1461C30.1279 21.7014 30.3766 22.4104 30.3586 23.138Z"
                  stroke="#C82132"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div>
                <h1 className="font-light text-base text-black">
                  Отдел продаж:
                </h1>
                <div className="font-semibold text-xl text-black">
                  7 (831) 418-58-57
                </div>
                <div className="font-semibold text-xl text-black">
                  7 (831) 418-58-56
                </div>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7619 30.6755C23.9147 30.6755 30.5238 24.0324 30.5238 15.8377C30.5238 7.64308 23.9147 1 15.7619 1C7.60913 1 1 7.64308 1 15.8377C1 24.0324 7.60913 30.6755 15.7619 30.6755Z"
                  stroke="#C82132"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.7617 6.93512V15.8378L21.6665 18.8053"
                  stroke="#C82132"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div>
                <h1 className="font-light text-base text-black">
                  Время работы:
                </h1>
                <div className="font-semibold text-xl text-black">
                  8:30 – 16:30
                </div>
                <div className="text-xl text-black font-light">
                  сб, вс — выходной
                </div>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <svg
                width="29"
                height="35"
                viewBox="0 0 29 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.5714 14.354C27.5714 24.7404 14.2857 33.643 14.2857 33.643C14.2857 33.643 1 24.7404 1 14.354C1 10.8123 2.39974 7.41563 4.89129 4.91128C7.38285 2.40693 10.7621 1 14.2857 1C17.8093 1 21.1886 2.40693 23.6801 4.91128C26.1717 7.41563 27.5714 10.8123 27.5714 14.354Z"
                  stroke="#C82132"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.286 18.8052C16.7319 18.8052 18.7146 16.8123 18.7146 14.3539C18.7146 11.8955 16.7319 9.90259 14.286 9.90259C11.8402 9.90259 9.85742 11.8955 9.85742 14.3539C9.85742 16.8123 11.8402 18.8052 14.286 18.8052Z"
                  stroke="#C82132"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div>
                <h1 className="font-light text-base text-black">Адрес:</h1>
                <div className="font-semibold text-xl text-black">
                  г. Нижний Новгород <br /> Чаадаева 1у\1
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 cursor-pointer">
              <div className="flex items-center gap-1 text-xs font-medium">
                <button className="hover:text-red-500 cursor-pointer">
                  RU
                </button>
                <span className="text-gray-400">|</span>
                <button className="hover:text-red-500 cursor-pointer">
                  UZ
                </button>
                <span className="text-gray-400">|</span>
                <button className="hover:text-red-500 cursor-pointer">
                  EN
                </button>
              </div>
              <svg
                width="34"
                height="22"
                viewBox="0 0 34 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1H33V20.6129H1V1Z" fill="#D22F27" />
                <path d="M1 1H33V7.70968H1V1Z" fill="white" />
                <path d="M1 7.70966H33V13.9032H1V7.70966Z" fill="#1E50A0" />
                <path
                  d="M1 1H33V20.6129H1V1Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <nav className="flex justify-between items-center text-sm">
            <NavLink to="/" end className={navClass}>
              ГЛАВНАЯ
            </NavLink>
            <NavLink to="/catalog" className={navClass}>
              КАТАЛОГ
            </NavLink>
            <NavLink to="/about" className={navClass}>
              О КОМПАНИИ
            </NavLink>
            <NavLink to="/partners" className={navClass}>
              ПАРТНЕРАМ
            </NavLink>
            <NavLink to="/news" className={navClass}>
              НОВОСТИ
            </NavLink>
            <NavLink to="/contacts" className={navClass}>
              КОНТАКТЫ
            </NavLink>
          </nav>
        </div>
      </div>

      <div className="md:hidden  flex items-center justify-between px-4 py-3 bg-white">
        <div className="flex items-center gap-3">
          <img src={logo1} alt="AutoPro" className="w-[94px] h-[72px]" />
          <div className="text-xs font-normal text-black ">
            Производство запасных частей <br /> для грузового коммерческого <br /> транспорта
          </div>
        </div>

        <div className="flex items-center gap-4">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-red-500 cursor-pointer"
            onClick={() => (window.location.href = "tel:+78314185857")}
          >
            <path
              d="M30.3586 23.138V27.5894C30.3603 28.0026 30.2761 28.4116 30.1114 28.7902C29.9467 29.1689 29.7051 29.5087 29.4022 29.7881C29.0992 30.0675 28.7416 30.2801 28.3521 30.4125C27.9627 30.5449 27.55 30.5941 27.1406 30.5569C22.5981 30.0608 18.2347 28.5006 14.401 26.0017C10.8343 23.7236 7.81034 20.6841 5.54389 17.0991C3.04909 13.2282 1.49653 8.8211 1.01198 4.23477C0.975093 3.82446 1.02361 3.41092 1.15443 3.02049C1.28526 2.63005 1.49554 2.27128 1.77187 1.967C2.04821 1.66273 2.38455 1.41962 2.75948 1.25316C3.13441 1.0867 3.53972 1.00053 3.9496 1.00014H8.37817C9.09458 0.993057 9.7891 1.24805 10.3323 1.7176C10.8755 2.18714 11.2303 2.8392 11.3306 3.55223C11.5175 4.97675 11.8641 6.37545 12.3639 7.72163C12.5625 8.25271 12.6055 8.82989 12.4877 9.38477C12.37 9.93965 12.0965 10.449 11.6996 10.8524L9.82484 12.7368C11.9263 16.4515 14.9863 19.5272 18.682 21.6394L20.5567 19.755C20.9581 19.3561 21.4648 19.0812 22.0169 18.9628C22.5689 18.8445 23.1431 18.8877 23.6715 19.0873C25.0108 19.5897 26.4024 19.9381 27.8196 20.126C28.5367 20.2277 29.1916 20.5907 29.6597 21.1461C30.1279 21.7014 30.3766 22.4104 30.3586 23.138Z"
              stroke="#C82132"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <button
            className="text-3xl text-black focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobil menyusi */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 p-4">
          <nav className="flex flex-col space-y-4 text-sm">
            <NavLink to="/" end className={navClass} onClick={closeMenu}>
              ГЛАВНАЯ
            </NavLink>
            <NavLink to="/catalog" className={navClass} onClick={closeMenu}>
              КАТАЛОГ
            </NavLink>
            <NavLink to="/about" className={navClass} onClick={closeMenu}>
              О КОМПАНИИ
            </NavLink>
            <NavLink to="/partners" className={navClass} onClick={closeMenu}>
              ПАРТНЕРАМ
            </NavLink>
            <NavLink to="/news" className={navClass} onClick={closeMenu}>
              НОВОСТИ
            </NavLink>
            <NavLink to="/contacts" className={navClass} onClick={closeMenu}>
              КОНТАКТЫ
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
