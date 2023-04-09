const list = document.querySelector('.menu');
const links = list.querySelectorAll('a');
const list2 = document.querySelector('.menu2');
const links2 = list2.querySelectorAll('a');

list.addEventListener('click', handleClick);
list2.addEventListener('click', handleClick);

function handleClick(e) {
  if (e.target.matches('a')) {
    links.forEach(link => link.classList.remove('active'));
    links2.forEach(link => link.classList.remove('active'));
    e.target.classList.add('active');
  };
};