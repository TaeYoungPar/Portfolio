const Card = ({ emoji, title, detail }) => {
  return (
    <div
      className={
        "mr-5 border-amber-400 border-4 rounded-2xl flex flex-col justify-between items-center p-5 w-[19vw] h-[17vw] mt-5 hover:scale-105 transition-all duration-300 ease-in-out"
      }
    >
      <img src={emoji} alt="" className="w-[5vw] h-[5vw]" />
      <span className=" font-bold text-lg">{title}</span>
      <span className="font-semibold">{detail}</span>
    </div>
  );
};

export default Card;
