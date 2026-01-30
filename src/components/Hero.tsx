import bg from "../assets/images/shopBg.jpg";

export default function Hero(props:any) {
  return (
    <div className=" flex items-center justify-center h-[30vh] relative mb-5">
      <div
        className="bg-center bg-cover absolute inset-0 z-2 blur-[3px]"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <h1 className="text-[48px] font-medium relative z-3">{props.text}</h1>
    </div>
  );
}
