const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick() {
  const initialText = 'Courses ⇓';
  
  if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    btn.textContent = 'Courses ⇑';
  } else {
    btn.textContent = initialText;
  }
});