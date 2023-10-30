import {promotions} from '@constants'
import Image from "next/image";

const Promotion = () => {
  let arr = [1, 2, 3];
  return (
    <div className="w-screen h-auto flex flex-col min-h-[20rem] bg-zinc-100 padding-x mb-5 py-5 lg:h-40 lg:mb-0 lg:justify-around" id="Promotions">
      <h1 className="py-3 text-2xl text-center md:py-5 md:text-4xl lg:py-0">
        Promotion
      </h1>
      <div className=" grid grid-flow-row grid-cols-1 flex-wrap gap-3 gap-y-5  lg:grid-cols-3 ">
        {promotions.map((promotion) => (
          <div
            className="w-full h-36 bg-white rounded-lg overflow-hidden shadow-zinc-200 shadow-lg grid-col-1 flex justify-start items-center transistion-all duration-200 lg:hover:-translate-y-2 md:h-44 md:gap-5 md:justify-start"
            key={promotion.head}>
            <p className="scroll__hide w-7/12 h-[90%] p-2 py-2 text-sm overflow-y-auto ">
              <span className="text-[15px] font-semibold">
                {promotion.head}
              </span>
              <br />
             {promotion.textBody}
            </p>

            <span className="w-5/12 h-full relative">
              <Image src={promotion.imgUrl} alt="logo" fill />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promotion;
