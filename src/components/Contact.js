import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { TfiEmail } from "react-icons/tfi";
import { AiFillPhone } from "react-icons/ai";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qzh1wgs",
        "template_owqw30b",
        form.current,
        "MSALsKX7u1hrB1U5x"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="p-20 my-24  font-bold min-h-[80vh]" id="Contact">
      <div className="text-3xl">
        <span>contact me</span>
      </div>
      <div className="mt-10 flex">
        <div className="mr-20">
          <p className="text-2xl">박태영</p>
          <div className="mt-8">
            <div className="flex text-base font-semibold">
              <AiFillPhone size={25} className="mr-3" />
              010-4485-7285
            </div>
            <div className="flex text-base font-semibold mt-3">
              <TfiEmail size={25} className="mr-3" />
              dhfak1@naver.com
            </div>
            <p className="mt-8">
              오른쪽 작성폼을 통해 이름, 이메일, 메세지를 보내주시면 <br />
              확인 즉시 답장을 보내겠습니다.
            </p>
            <p className="mt-5">감사합니다.</p>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-8 items-center"
        >
          <input
            type="text"
            name="user_name"
            className="user w-80 h-8 p-1 outline-none border-2 border-orange-500 rounded-lg text-base"
            placeholder="이름"
          />
          <input
            type="email"
            name="user_email"
            className="user w-80 h-8 p-1 outline-none border-2 border-orange-500 rounded-lg text-base"
            placeholder="이메일"
          />
          <textarea
            name="message"
            className="user w-80 h-32 p-1 outline-none border-2 border-orange-500 rounded-lg text-base"
            placeholder="메세지"
          />
          <input
            type="submit"
            value="보내기"
            className="button w-80 h-8 bg-blue-500 text-white rounded-lg text-base hover:cursor-pointer"
          />
          {done && <span className="text-sm">Thanks for contacting me!</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
