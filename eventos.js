document.addEventListener('DOMContentLoaded', () => {
  const div = document.getElementsByTagName('div')[0];
  div.addEventListener('click', () => {
    alert('Hola! Soy el div');
  });
  const button = div.getElementsByTagName('button')[0];
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    alert('Hola!');
  });
});
