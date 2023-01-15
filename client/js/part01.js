


// 이벤트 위임 ! 

const data = [
  {
    "id": 1,
    "src": "visual1.jpg",
    "alt": "모던한 테이블과 화분의 조화를 표현한 공간"
  },
  {
    "id": 2,
    "src": "visual2.jpg",
    "alt": "강렬한 의자의 색상과 따뜻한 느낌의 공간"
  },
  {
    "id": 3,
    "src": "visual3.jpg",
    "alt": "호텔 라운지 느낌의 편안한 의자가 있는 공간"
  },
  {
    "id": 4,
    "src": "visual4.jpg",
    "alt": "물방을 모양의 독특한 디자인의 의자들을 나열한 공간"
  }
]

// 1. 노드 가져오기
let navigation = getNode('.navigation')
let visualImg = getNode('.visual img')

// 3. 이벤트 함수 만들기
function handler(e){
  // 4. 새로고침 방지
  e.preventDefault();



}











// 2. 이벤트 핸들러 호출
navigation.addEventListener('click',handler);






























