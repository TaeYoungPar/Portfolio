import React from "react";
import Card from "./Card";
import Glasses from "../assets/glasses.png";
import Heart from "../assets/heartemoji.png";
import Humble from "../assets/humble.png";
import Smile from "../assets/smile.jpg";

const Stack = () => {
  // 데이터 배열 정의
  const stackData = [
    {
      title: "Language",
      detail: "JavaScript, TypeScript",
      emoji: Glasses,
    },
    {
      title: "Library & Framework",
      detail: "React, Redux-toolkit",
      emoji: Heart,
    },
    {
      title: "State Management",
      detail: "Redux",
      emoji: Humble,
    },
    {
      title: "Styling",
      detail: "Tailwind CSS, Styled Components",
      emoji: Smile,
    },
  ];

  return (
    <div className="flex justify-between my-24 p-20 min-h-[80vh]" id="Stack">
      <div>
        <span className="text-3xl font-bold ">Stack</span>
        <div className="flex mt-10">
          {stackData.map((item, index) => (
            <Card
              key={index}
              emoji={item.emoji}
              title={item.title}
              detail={item.detail}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stack;
