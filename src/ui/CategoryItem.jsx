export default function CategoryItem({ title, img, color }) {
  return (
    <div className="relative bg-[#f7f7f7] p-6 h-[200px] hover:shadow-md transition">
      <span
        className="absolute left-0 top-0 w-[11px] h-[162px]"
        style={{ backgroundColor: color }}
      />
      <h3 className="font-semibold text-[15px] mb-4 leading-snug">{title}</h3>
      <img
        src={img}
        alt={title}
        className="absolute right-15 bottom-4 md:w-[70%] w-[40%] h-[110px]"
      />
    </div>
  );
}