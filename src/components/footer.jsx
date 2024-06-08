import {
  FaFacebookSquare as FB,
  FaInstagram as Insta,
  FaLinkedin as LinkedIn,
  FaGithub  as Github
} from "react-icons/fa";
import { LiaCopyrightSolid as CopyRights } from "react-icons/lia";

function Footer() {
  return (
    <div className='flex flex-col gap-2 justify-center items-center bg-slate-950 text-white p-5 mt-10'>
      <div className="flex gap-3">
        <FB className="text-3xl cursor-pointer" />
        <Insta className="text-3xl cursor-pointer" />
        <LinkedIn className="text-3xl cursor-pointer" />
        <Github className="text-3xl cursor-pointer" />
      </div>
      <ul className="flex gap-5 px-10 mt-2">
        <li className=" text-lg font-medium">Services</li>
        <li className=" text-lg font-medium">Pricing</li>
        <li className=" text-lg font-medium">About</li>
      </ul>
      <div className="flex gap-1 items-center justify-center">
        <CopyRights className="text-xl" />
        <p className="text-md sm:text-xl">2023 Zween Books. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer