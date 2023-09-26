import Fit from "../assets/fit.PNG";

const Project = () => {
  return (
    <div className="p-20 my-24  font-bold min-h-[80vh]" id="Project">
      <div className="text-3xl">Project</div>

      <div className="mt-10 flex border">
        <div className="flex justify-center items-center w-full">
          <img
            src={Fit}
            alt="mainImg"
            className=" min-w-[200px] min-h-[200px] p-4"
          />
        </div>
        <div className="ml-5 border-l p-4">
          <p className="text-2xl mb-5">FITFOLIO</p>
          <p>
            저희 프로젝트는 운동 센터를 찾을 때 가격 정보 부족 문제를 해결하고,
            운동 커뮤니티를 형성하여 동기부여와 정보 공유를 돕는 플랫폼입니다.
          </p>
          <ul className="list-disc list-inside font-normal mt-5">
            <li>
              메인페이지, 마이페이지, 팔로우&팔로워 페이지의
              <b> Axios를 통해 목록을 불러오는 것을 구현</b>했습니다.
            </li>

            <li>
              헤더에 검색시{" "}
              <b>자동완성 추천과 해당 데이터를 검색시 필터링 하는것을 구현</b>
              했습니다.
            </li>
            <li>
              푸터에 Emailjs를 사용하여 각 팀 멤버에게
              <b> 이메일 발송 기능을 구현</b>
              했습니다.
            </li>
            <li>
              모바일, 태블릿, PC에서 <b>반응형 구현</b>했습니다.
            </li>
            <li>
              무한 스크롤이 필요한 페이지에서 react-intersection-observer를
              사용하여 페이지 하단 요소를 감시하고, 사용자가 스크롤해 해당
              요소에 도달하면 새로운 콘텐츠를 불러오는 함수를 실행하여 데이터를
              불러오는 <b>무한스크롤을 구현</b>했습니다.
            </li>
            <li>
              전역으로 필요한 상태의 경우 props drilling을 해결하기 위해
              <b> Redux-toolkit을 사용하여 전역으로 상태관리</b>를 했습니다.
            </li>
            <li>
              지속적인 테스팅 및 피드백을 통한 오류 수정 및 기타 UX/UI를 꾸준히
              관리하고 있습니다.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
