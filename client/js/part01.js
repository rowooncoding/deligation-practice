
// let arr = [{
//   name:'tiger',
//   age: 34,
// },2,3,4];

//   arr[0].name  // tiger


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

// 네비게이션에게 이벤트를 건다
// 핸들러를 연결한다.
// 이벤트 객체에서 타겟을 찾는다.


const navigation = getNode('.navigation');
const visualImage = getNode('.visual img');

// const list = getNodes('.navigation > li');


// console.log(list);


function makeArray(arrayLike){
  return Array.from(arrayLike)
}



// 내가 선택한 li에게 is-active 클래스를 넣어주세요 

// 내가 선택하지 않은(모든 li) li에게 is-active 클래스 제거해주세요 

// 선택한 대상의 data-index값을 가져와주세요.


// 비주얼 안에 있는 이미지를 가져온다. 
// 이미지의 src 속성에 접근한다.
// src의 값을 index로 바꾼다.

// alt 변경 

//2. 이벤트를 받는 함수 생성
function handler(e){
  // 초기화 방지
  e.preventDefault();
  // 3. 이벤트 타겟 즉, 클릭이벤트가 진행 되고 있는 요소 중 가장 가까운 li와 a를 변수에 할당
  let target = e.target.closest('li');
  let targetA = e.target.closest('a');
  // 4. 만약 값이 없다면 함수 종료
  if(!target || !targetA) return;


  let list = makeArray(navigation.children);
  let index = attr(target,'data-index');

  // console.log();
  // Array.from(list)
  // let arr = [...list]
  // Array.prototype.slice.call(list)
  // [li,li,li,li]

  // 5. is-active가 누적 되기 때문에 모든 요소에 is-active를 지우기 위해서 순회하며 제거
  list.forEach( item => removeClass(item,'is-active') )

  // attr(visualImage,'src',`./assets/part01/${data[index-1].src}`);
  // 6. 그림이 안바뀌기 때문에 그림을 바꿔주는 요소 삽입 유틸함수 적용
  attr(visualImage,'src',targetA.href);

  // 7. 기본 텍스트도 옯겨줌
  attr(visualImage,'alt',  data[index-1].alt  );
  // visualImage.src = `./assets/part01/visual${index}.jpg`
  // console.log(index);
  // 8. 타겟에 is-active 삽입
  addClass(target,'is-active');
}

//  1. 클릭이벤트 생성
navigation.addEventListener('click',handler);



















/* 
const li_1 = getNode('.navigation > li:nth-child(1)');
const li_2 = getNode('.navigation > li:nth-child(2)');
li_1.addEventListener('click',()=>{
  
  
})
li_2.addEventListener('click',(e)=>{
  li_1.classList.add('is-active')
  e.currentTarget.classList.add('is-active')
})
 */

