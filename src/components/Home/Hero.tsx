import bgImage from '../../assets/images/bg.jpg';

export default function Hero() {
  return (
    <div
      className="flex items-center justify-end px-14.5 h-[80vh] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col items-start gap-11 py-15 px-10  bg-[#FFF3E3]">
        <div className="flex flex-col  gap-4">
          <p className="text-[16px] text-[#333333] font-semibold">
            New Arrival
          </p>
          <h1 className="text-[52px] text-[#B88E2F] font-bold max-w-110 w-full leading-16.25">
            Discover Our New Collection
          </h1>
          <p className="text-[18px] font-medium max-w-137.5 w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
        </div>

        <button className="text-white bg-[#B88E2F] py-6.25 px-18 font-bold">
          BUY NOW
        </button>
      </div>
    </div>
  );
}
