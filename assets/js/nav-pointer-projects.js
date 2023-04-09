// Cache the list, and the items
const list3 = document.querySelector('.menu3');
const links3 = list3.querySelectorAll('a');

// Add one listener to the list element
list3.addEventListener('click', handleClick);

// If the clicked element is a link remove all
// the active classes from the other links, and then
// add the active class to the link that was clicked on
function handleClick(e) {
  if (e.target.matches('a')) {
    links3.forEach(link3 => link3.classList.remove('active'));
    e.target.classList.add('active');
  };
};