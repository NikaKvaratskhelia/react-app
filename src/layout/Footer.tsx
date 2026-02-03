import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="max-w-350 w-full mx-auto p-9.5">
      <div className="flex flex-wrap max-w-325 w-full justify-between items-start py-12.5 border-y border-y-[#9F9F9F]">
        <div className="flex flex-col items-start justify-between gap-11.5">
          <h2 className="text-[24px] font-bold">Furniro.</h2>
          <p className="text-[#9F9F9F] text-[16px] font-normal max-w-71.25">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </p>
        </div>

        <div className="flex flex-col items-start justify-between gap-11.5">
          <h2 className="text-[#9F9F9F] font-medium">Links</h2>

          <Link className="font-medium" to={"/"}>
            Home
          </Link>
          <Link className="font-medium" to={"/shop"}>
            Shop
          </Link>
          <Link className="font-medium" to={"/about"}>
            About
          </Link>
          <Link className="font-medium" to={"/contact"}>
            Contact
          </Link>
        </div>

        <div className="flex flex-col items-start justify-between gap-11.5">
          <h2 className="text-[#9F9F9F] font-medium">Help</h2>

          <p className="font-medium">Payment Options</p>
          <p className="font-medium">Returns</p>
          <p className="font-medium">Privacy Policies</p>
        </div>

        <div className="flex flex-col items-start justify-between gap-11.5">
          <h2 className="text-[#9F9F9F] font-medium">Newsletter</h2>
          <div className="flex gap-1.5 items-center">
            <input className="border-b botder-b-black pr-4" type="text" placeholder="Enter Your Email Address"/>
            <button className="border-b botder-b-black text-[14px] font-medium py-[1.5px] cursor-pointer">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <p className="pt-10">
        {new Date().getFullYear()} furniro. All rights reserved
      </p>
    </footer>
  );
}
