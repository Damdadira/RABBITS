const findRabbit = document.querySelector('.findRabbit');
const rabbit = document.querySelector('.rabbit');

findRabbit.addEventListener('click', () => {
  rabbit.scrollIntoView({ behavior: 'smooth', block: 'center' });
  //block은 토끼 위치가 어디로 오게 할건지
});
