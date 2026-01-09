import slide from '../assets/media/brand/slide.png';

export default function HeroSection() {
  return (
    <section className="">
      <div className="max-w-[1502px] mx-auto md:w-[90%] w-full px-4 flex items-center">
        <div>
          <img src={slide} alt="Автозапчасти" />
        </div>
      </div>
    </section>
  );
}