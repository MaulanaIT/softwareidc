import React from "react";
import { TitleText, TypingText } from "../components";
import Link from 'next/link'
import Image from 'next/image';
import client1 from "../public/client1.png"
import client2 from "../public/client2.png"
import client3 from "../public/client3.webp"
import client4 from "../public/client4.gif"


const NewProjectReal = () => {
  return (
    <div>
      <div className="gradient-03">
      </div>
      <div className=" bg-black h-[45vh] " >
        <TypingText title="| Our Projects" textStyles="text-center" />
        <TitleText title={<>Our projects has been successful.</>} textStyles="text-center" />
        <div className="px-1 text-center justify-center flex mt-[10vh]">
          <div className="mx-4 cursor-pointer" title="Visit Site">
          <Link href="https://rmbex-fe.deeeplabs.com/" target="blank">
            <Image src={client1} alt="" width={"120"} />
          </Link>
          </div>

          <div className="mx-4 pt-5 cursor-pointer" title="Visit Site">
          <Link href="https://hydrogen-indonesia.id/" target="blank">
            <Image src={client2} alt="" width={"130"} />
            </Link>
          </div>
          <div className="mx-4 pt-5 cursor-pointer" title="Visit Site">
          <Link href="http://klasika.virtusrox.me/" target="blank">
            <Image src={client3} alt="" width={"120"} />
            </Link>
          </div>
          <div className="mx-4 cursor-pointer" title="Visit Site">
          <Link href="http://project-wayne.virtusrox.me/" target="blank">
            <Image src={client4} alt="" width={"120"} />
            </Link>
          </div>
        </div>
      </div>
    </div>


  )
}

export default NewProjectReal