const $inputPhoto = document.querySelector('#photo-url');
const $img = document.querySelector('img');

function inputHandler(event) {
  const $inputPhotoValue = $inputPhoto.value;
  $img.setAttribute('src', $inputPhotoValue);
}

$inputPhoto.addEventListener('input', inputHandler);
