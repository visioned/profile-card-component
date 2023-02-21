import avatar from "../assets/image-victor.jpg";
import cardbg from "../assets/bg-pattern-card.svg";

const Card = () => {
  return (
    <div className="h-[375px] w-[350px] bg-[#fff] rounded-xl absolute shadow-2xl">
      <img src={cardbg} alt="" className="rounded-t-xl" />
      <div className="flex justify-center items-center relative">
        <img
          src={avatar}
          alt=""
          className="absolute rounded-full border-[5px] border-white "
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-[72px]">
        <h1 className="text-black flex-row font-bold text-[18px]">
          Victor Crest
          <span className="text-gray-500 font-normal ml-2">26</span>
        </h1>
        <p className="text-gray-500 text-[14px] flex flex-row mt-1 ">London</p>
      </div>
      <hr className="border-gray-300 opacity-50 mt-[22px]" />
      <div className="flex flex-row items-center justify-evenly">
        <div className="flex flex-col items-center">
          <p className="text-black font-bold text-lg mt-5 tracking-[0.03em] ">
            80K
          </p>
          <p className="text-gray-500 text-[9px] tracking-[0.2em]">Followers</p>
        </div>
        <div className="flex flex-col items-center mr-1">
          <p className="text-black font-bold text-lg mt-5 tracking-[0.03em]">
            803K
          </p>
          <p className="text-gray-500 text-[9px] tracking-[0.2em]">Likes</p>
        </div>
        <div className="flex flex-col items-center mr-2">
          <p className="text-black font-bold text-lg mt-5 tracking-[0.03em]">
            1.4K
          </p>
          <p className="text-gray-500 font-normal text-[9px] tracking-[0.2em]">
            Photos
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
