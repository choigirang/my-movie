/** @type {import('tailwindcss').Config} */
module.exports = {
  /** 2024/04/04 - calc class 설정 */
  mode: "jit",
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: { max: "640px" },
        md: { min: "641px", max: "1024px" },
      },
      transitionProperty: {
        custom: "all", // 사용자 정의 transition 속성을 설정합니다.
      },
      transitionTimingFunction: {
        custom: "ease-in-out", // 사용자 정의 transition 타이밍 함수를 설정합니다.
      },
      transitionDelay: {
        custom: "1s", // 사용자 정의 transition 딜레이를 설정합니다.
      },
      colors: {
        customYellow: "#f59e0b",
      },
      height: {
        container: "800px",
      },
      gridTemplateRows: {},
      gridTemplateColumns: {
        loginBtn: "20% 80%",
        selectMovie: "40% 60%",
        savedMovieList: "auto 10px 200px 300px",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["hover"],
    },
  },
  plugins: [],
};
