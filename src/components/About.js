import React from "react";
import Me from "../assets/me.png";
import { BsGithub } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { FiInstagram } from "react-icons/fi";
import { AiFillPhone } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const About = () => {
  return (
    <div className="flex flex-col  p-20 min-h-[80vh] my-24 " id="About">
      <div className="flex justify-between  ">
        <p className=" text-3xl font-bold">
          안녕하세요!
          <p className="p-0 bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
            언제나 즐겁게 즐길 줄 아는
          </p>
          프론트엔드 개발자 박태영입니다.
          <p className="p-0 mt-2 text-base font-semibold">
            프론트엔드 개발에서 사용되는 프로그래밍 언어를 통해
            <br />
            시각적으로 매력적이고 상호작용성 있는 <br />웹 어플리케이션을
            구현할때 즐거움을 느끼고 <br />
            직면하는 오류와 문제를 극복하면서 <br />
            성취감을 느끼며 개발의 흥미를 가집니다.
          </p>
          <div className="mt-8">
            <div className="flex text-base font-semibold">
              <AiFillPhone size={25} className="mr-3" />
              010-4485-7285
            </div>
            <div className="flex text-base font-semibold mt-3">
              <TfiEmail size={25} className="mr-3" />
              dhfak1@naver.com
            </div>
          </div>
          <div className="flex mt-12">
            <a href="https://github.com/TaeYoungPar">
              <BsGithub size={20} className="mr-10" />
            </a>
            <a href="https://www.instagram.com/taeyoung_parko/">
              <FiInstagram size={20} className="mr-10" />
            </a>
            <a href="https://www.linkedin.com/in/taeyoung-park-246b31196/">
              <AiFillLinkedin size={20} />
            </a>
          </div>
        </p>

        <div>
          <img
            src={Me}
            alt="myImg"
            className="w-[20rem] h-[20rem] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
