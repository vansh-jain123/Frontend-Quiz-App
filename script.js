const toggle = document.getElementById('mode-toggle');
const body = document.body;

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    body.style.backgroundColor = '#121212';
  } else {
    body.style.backgroundColor = '#f3f3f3';
  }
});
