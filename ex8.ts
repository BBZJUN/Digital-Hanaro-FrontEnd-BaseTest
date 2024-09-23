const debounce = (cb: (i: number) => void, delay: number) => {
  let timer: any; 
  // let timer: NodeJS.Timeout | null = null; 가 더 좋다고 합니다!
  return (i: number) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => cb(i), delay);
  };
};


const throttle = (cb: (i: number) => void, delay: number) => {
  //let timer: any ; 
  let timer: NodeJS.Timeout | null = null; //let timer: any ;보다 더 좋다고 합니다!
  return (i: number) => {
    if (timer) return;
    timer = setTimeout(() => {
      cb(i);
      timer = null;
    }, delay);
  };
};


const debo = debounce((a: number) => console.log(a + 1), 500);
for (let i = 10; i < 15; i++) debo(i); // 15 출력

const thro = throttle((a: number) => console.log(a + 1), 500);
for (let i = 10; i < 15; i++) thro(i); // 11 출력
