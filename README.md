<h1 align="center">나의 영화 일지</h1>

<h5 align="center">개발기간: 2024.02 ~ 2024.03</h5>

---

- **프로젝트 명 :** `my-movie`
- **프로젝트 소개 :** movie API를 활용하여 영화 정보를 확인하고 캘린더에 자신의 영화를 저장할 수 있습니다.
<!-- - **배포 링크 :** <a href='https://sidequest.co.kr' target='_blank'>Why-Community</a> -->

<br>

<details>
<summary>Next 14</summary>

## Refactor Next 13 => 14

### 기술 목록

|                                                                                    TypeScript                                                                                     |                                                                                      Next.js                                                                                      |                                                                                  RTK                                                                                  |                                                                                React-Query                                                                                 |                                                                                  tailwind                                                                                   |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/typescript/3178C6" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/nextdotjs/#61DAFB" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/redux" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/reactquery" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/tailwindcss" alt="icon" width="75" height="75" /></div> |

#### SSR 활용을 통한 최적화

|                                                                                                     13                                                                                                     |                                                                                                    14                                                                                                     |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://github.com/choigirang/my-movie/assets/118104644/97096c92-a3a3-4436-a24c-5222e330bcd1" alt="before"/></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://github.com/choigirang/my-movie/assets/118104644/16dcb977-7f4d-4aed-aa32-ccfb5d233577" alt="after"/></div> |

#### SEO & Site-Map 적용

<img width="1061" alt="meta data" src="https://github.com/choigirang/my-movie/assets/118104644/b76c76d7-f961-459a-836c-c8f077b4e65a">

</details>

<details>
<summary>Next 13</summary>

## 기술 목록

## FrontEnd

|                                                                                    TypeScript                                                                                     |                                                                                      Next.js                                                                                      |                                                                                  RTK                                                                                  |                                                                                React-Query                                                                                 |                                                                                 MUI                                                                                 |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/typescript/3178C6" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/nextdotjs/#61DAFB" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/redux" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/reactquery" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start; justify-content: center;"><img src="https://cdn.simpleicons.org/mui" alt="icon" width="75" height="75" /></div> |

<br />

## 페이지

### /

- [TMDB](https://developer.themoviedb.org/docs/getting-started) 를 활용한 영화 데이터
- `useInfiniteQuery`를 활용한 무한 스크롤

[![20240327-144753.gif](https://i.postimg.cc/Y2JgTJv4/20240327-144753.gif)](https://postimg.cc/fkfJ9qjZ)
![2](https://github.com/choigirang/my-movie/assets/118104644/5f8f224f-5a04-4eff-ab24-9b452c86c0b7)

<br>

### /calendar

- `redux-persist`를 사용한 페이지 전환에 따른 데이터 유지
- `date-fns`를 사용한 각 날짜별 데이터 훅 활용
- ![3](https://github.com/choigirang/my-movie/assets/118104644/16946592-9473-41cc-8e8e-fba9f8d6126e)

### /my

- `next-auth`를 사용한 소셜 로그인

![4](https://github.com/choigirang/my-movie/assets/118104644/70cc9bf1-7e87-4778-aa85-89f35334f887)

</details>

## Git Commit & PR Message

| 태그이름 | 설명                                                  |
| -------- | ----------------------------------------------------- |
| feat     | 새로운 기능 추가                                      |
| chore    | 자잘한 변경                                           |
| update   | 수정 추가                                             |
| fix      | git과 관련된 버그 수정                                |
| design   | CSS 등 UI 수정                                        |
| style    | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우 |
| refactor | 코드 리팩토링                                         |
| docs     | 문서 수정 (MD 파일)                                   |
| test     | 테스트 코드를 생성하거나 수정 하는 경우               |
