export default function ListItem({ children, number }) {
  return (
    <div className="flex items-start mb-8 md:mb-12 gap-8 md:gap-12">
      <div>
        <h3 className="text-[#f9a736] text-3xl md:text-5xl font-bold">{`${number}.)`}</h3>
      </div>
      <div>
        <p className="text-white text-2xl md:text-4xl font-light">{children}</p>
      </div>
    </div>
  );
}
