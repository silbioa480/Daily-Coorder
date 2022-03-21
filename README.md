# Daily Cooder

```
어떤 옷을 입을지 고민하는 시간은 평균 남자는 13분, 여자는 17분으로 총 60세까지 생애 기준으로
6개월을 소비하므로 그 시간들을 단축시키고자 커뮤니티 기반에 옷 코디를 도와줄 수 있는 서비스를 만들었습니다.
```

### 기획 의도

```
연구에서 20명 중 1명을 일주일에 한 번씩 입을 옷이 없다고 불평하고 있으며,
15%는 입고 나온 옷이 마음에 안들면 하루종일 기분이 나쁘고 아침에 옷을 고르다가 지각을 하기도 하며,
마땅한 옷이 없어서 데이트를 취소한다는 의견도 있었습니다.

그래서 저희는 요즘 누구나 하나쯤 사용한다는 sns를 활용하여 의류추천서비스를 제공하면 좋을 것 이라는 것에
의견을 모았습니다.
```

### 기대 효과

```
대한민국에 살고 있는 철수은 오늘도, 내일은 어떤 옷을 입을까 고민을 합니다. 
같은 시간 유저1과 유저2 그리고 유저3은 각각 태그를 포함한 게시글을 피드에 작성하고 업로드 합니다

철수는 코트라는 키워드를 통해 다른사람들의 게시물을 추천받아 내일입을 옷도 성공적으로 코디에 성공했습니다.

그리고 다음날 철수은 코트, 후드티, 크로스백 등의 태그를 포함한 게시물 작성합니다. 
이런식으로 데일리코더는 태그를 통한 수없이 많은 데이터를 확보하여 그 데이터를 바탕으로
다수의 사람들의 관심사에 맞는 코디를 추천하게 됩니다.
```

# 기술 스택

- front end
    - React
    - TypeScript
- back end
    - Spring Boot
    - JPA
- DB
    - MySQL ( RDBMS )

- Tools
    - github
    - miro
    - slack
    - notion

![stack](https://user-images.githubusercontent.com/96061695/159240965-d1a72cb7-a8e2-46ce-9160-460c53f04c9c.png)

# 사이트 배포

##### 프론트 엔드

vercel: https://daily-coorder.vercel.app/

##### 백엔드

github: https://github.com/silbioa480/Daily-Coorder-Backend

# 시연 영상

## 간단한 팀 구성

- [원종호](#원종호)
- [송가영](#송가영)
- [신태영](#신태영)
- [인용식](#인용식)
- [황인성](#황인성)
- [김진형](#김진형)

## 페이지 담당 및 기능

### 원종호

### Feed Page

- Spring JPA 구성 설계 및 구현 및 구현
- 피드 페이지 프론트 담당

[//]: # (- 피드 페이지 # 팔로우 : 유저가 팔로우한 사람들의 게시물을 노출)

[//]: # (- 피드 페이지 # 내가 좋아요한 게시물 : 유저가 좋아요한 게시물을 노출.)

[//]: # (- 피드 페이지 # 내가 업로드한 게시물 : 유저가 업로드한 게시물을 노출.)
![feed](https://user-images.githubusercontent.com/96061695/159242235-7eb1503b-3010-412a-8cba-171bcaa7c22c.png)

### 송가영

### Login, SignUp Page

- 노션 스케쥴 및 작업일지 틀 구축, 관리 담당
- 발표 자료 준비 및 발표 담당
- 로그인 및 회원가입 페이지 프론트 담당 및 구현
- 로그인 페이지 # 아이디, 비밀번호 정규성 검사
- 로그인 페이지 # Naver API 활용 로그인
- 로그인 페이지 # KaKao API 활용 로그인
- 회원가입 페이지 # 모든 폼 정규성 검사

[//]: # (- 로그인 페이지 # 아이디 기억하기)

[//]: # (- 로그인 페이지 # 아이디 / 비밀번호 찾기)
![login](https://user-images.githubusercontent.com/96061695/159242281-ced77941-f858-472d-bb5b-c7b0a4bd6d07.png)
![sign up](https://user-images.githubusercontent.com/96061695/159242290-4bd36daa-e942-4dcc-8a45-2ba53c755bf3.png)

### 신태영

### MyPage

- 마이 페이지 프론트 담당 및 구현
- 마이 페이지 # 로그인 되있을시 로그인이 되어있는 ID의 정보를 보여줌
- 마이 페이지 # 탈퇴 페이지 : 탈퇴 누를시 정보를 삭제하고 메인 페이지로 돌아감

[//]: # (- 마이 페이지 # 회원 정보수정 페이지 : 정보수정을 하고 수정하기 누를시 정보 페이지로 가서 수정된 정보를 보여줌)

[//]: # (- 마이 페이지 # 체형등록 페이지 : 체형을 입력하고 등록할시 정보 페이지로 가서 등록한 체형을 보여줌)

![mypage](https://user-images.githubusercontent.com/96061695/159242346-0e28e476-2170-4304-9cf0-c1b9688003bf.png)

### 인용식

### Board Page

- 게시판 페이지 프론트 담당 및 구현
- 게시판 페이지 # 게시판 ID에 맞는 페이지 불러오기
- 게시판 페이지 # 팔로우 버튼 누를 시 토글형식으로 +, - 기
- 게시판 페이지 # 댓글 입력, 수정 그리고 삭제 기능
- 게시판 페이지 # 유사한 게시물 더보기 : ( 해당 게시물의 태그와 같은 태그를 가지고 있는 게시물 )
  ![board](https://user-images.githubusercontent.com/96061695/159245948-7fe74807-12fd-45c4-b4e4-645392eaf095.png)

### 황인성

### Main Page

- 발표때 시연 담당
- 전체 페이지 애니메이션 및 +버튼, 게시물 디자인 담당
- 메인 페이지 프론트 담당 및 구현
- 메인 페이지 # 피드 : 8개의 게시물을 고정으로 노출
- 메인 페이지 # 브랜드 : 외부 브랜드의 광고 공간 ( 클릭시 해당 게시물의 외부 url로 이동 )
- 메인 페이지 # More : 모든 게시물을 랜덤으로 최초 10개, + 버튼 클릭시 랜덤으로 10개씩 게시물 노출 ( 2번 클릭시까지 )
  ![main](https://user-images.githubusercontent.com/96061695/159246167-f8951a21-5a85-4b15-aca5-69faafc31442.png)

### 김진형

### Upload Page

- 업로드 페이지 프론트 담당 및 구현
- 업로드 페이지 # 사진 업로드 : 이미지 클릭시 업로드, x버튼 클릭시 이미지 삭제
- 업로드 페이지 # 해시 태그 : 입력시 박스 모양으로 추가, x버튼 클릭시 해시태그 삭제, Backspace키 누를시 해시태그 삭제
  ![upload](https://user-images.githubusercontent.com/96061695/159246208-9af7d428-b9b5-49c3-9c01-fce8a2d57646.png)

## DB 설계

![DB](https://user-images.githubusercontent.com/96061695/159242130-6133ed5f-f2f9-4a1a-b674-90dad05bc145.png)

## 프론트 엔드 구조

![front](https://user-images.githubusercontent.com/96061695/159241814-6ba35cdd-7440-4ac7-b364-3ef2a9c0cd06.png)

## 백엔드 구조

![baxck](https://user-images.githubusercontent.com/96061695/159241883-60f9bb51-202b-42a7-a5b1-2236020275d1.png)

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fsilbioa480%2FDaily-Coorder&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

