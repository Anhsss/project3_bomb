
//폭탄이 있는 위치를 나타내는 배열
//DOM이 로드가 되면 반복문을 이용하여 [0,0,0,0,0,0,0,0,1]로 초기화
   let num = [];

// const shuffle=(num) =>{
//   for(let i = 0; i < num.length; i++){
//     let idx1 = Math.floor(Math.random()*9);
//     let idx2 = Math.floor(Math.random()*9);
  
//     if (idx1 == idx2) continue;
  
//     //idx1위치의 값과 idx2위치의 값을 바꾸기
//     let temp = num[idx1]
//     num[idx1] = num[idx2]
//     num[idx2] = temp
//   }
//     console.log(num);
// }
//박스를 선택한 순서를 기록하는 배열
let selNum = [];

//박스를 선택한 개수를 기록하는 변수
let cnt = 0 ;

//폭탄이 섞였는지 체크하는 flag변수
let shuffleFlag = false;

//메시지 출력 함수
const msgShow = (m) => {
  const msg = document.getElementById("msg");
  msg.innerHTML = `<h2>${m}</h2>`;
}
// 초기화 함수
const init = () => {
  //메시지 지우기
  msgShow('');
  //그림지우기
  for (let i =1; i <= 9; i++) {
    document.getElementById(`box${i}`).innerHTML = '';
  }
}
//숫자 박스가 선택된 경우    ==숫자 클릭 시 해당 숫자 출연 
// function show(n) {
//   console.log(n);
// }
//화살표 함수 (위와 동일)
const show = (n) => {
  if (!shuffleFlag) {
    msgShow("폭탄을 섞어 주세요.")
    return
  }
  //눌러진 번호판 번호를 배열에 추가
  if (!selNum.includes(n)) selNum.push(n);
  //cnt++;
  console.log(selNum, cnt, selNum.length);
  //폭탄이 있는 배열을 참고하여 그림 변경
  let imgSrc = null;
  if (num[n-1] == 1) imgSrc = "boom";
  else imgSrc = "hart"

  //성공 체크
  if (selNum.length == 8) {
    let fn = [1,2,3,4,5,6,7,8,9].filter((i)=>!selNum.includes(i));
    console.log(fn[0]);
    document.getElementById(`box${fn[0]}`).innerHTML = `<img src=./images/hart.png>`;
    msgShow('성공');
    shuffleFlag = false;
  }

  //현재 눌러진 숫자 박스에 그림 표시
  document.getElementById(`box${n}`).innerHTML = `<img src=./images/${imgSrc}.png>` //백틱활용
  //console.log(n);
  if (imgSrc == "boom") 
  shuffleFlag = false;
 // msgShow("실패");
}
// 폭탄 섞기 함수
const boxShuffle = () => {
  num.sort(()=> Math.random()-0.5);
  shuffleFlag = true;

  //초기화 함수 호출
  init();
  console.log(num);
}
/* DOM이 로드된 후에 클릭이벤트 연결*/
document.addEventListener("DOMContentLoaded", ()=>{
  //DOM이 로드가 되면 반복문을 이용하여 [0,0,0,0,0,0,0,0,1]로 초기화
  for (let i =0; i < 8; i++){
    num.push(0);
  }
   num.push(1);
   console.log(num);
});