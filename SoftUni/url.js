const url = document.getElementById('url');

url.addEventListener('click', function handleClick() {
  const initialUrl = '#ShowCourses';

  if (url.href.toLowerCase().includes(initialUrl.toLowerCase())) {
    url.href = './';
  } else {
    url.href = initialUrl;
  }
});