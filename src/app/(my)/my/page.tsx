import { RiKakaoTalkFill } from "react-icons/ri";
import { FaGooglePlusSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import LoginBtn from "../loginBtn";

const loginBtn = [
  {
    icon: <FaGooglePlusSquare />,
    title: "구글 로그인",
    color: "#F95D5E",
    sign: "google",
  },
  {
    icon: <RiKakaoTalkFill />,
    title: "카카오톡 로그인",
    color: "#FFEC1F",
    sign: "kakao",
  },
  {
    icon: <FaGithub />,
    title: "깃헙 로그인",
    color: "#2b2b2b",
    sign: "github",
  },
];

/**
 * @returns social login을 활용한 사용자 로그인 page
 */
export default function Index() {
  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center gap-5">
      {loginBtn.map((each) => (
        <LoginBtn key={each.title} {...each} />
      ))}
    </section>
  );
}
