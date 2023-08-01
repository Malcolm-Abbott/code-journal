const $inputPhoto = document.querySelector('#photo-url');
const $img = document.querySelector('img');

function inputHandler(event) {
  const photo = $inputPhoto.value;
  $img.setAttribute('src', photo);
}

$inputPhoto.addEventListener('input', inputHandler);

const $form = document.querySelector('form');
$form.addEventListener('submit', formHandler);

const $inputTitle = document.querySelector('#title');

function formHandler(event) {
  event.preventDefault();
  const $textArea = document.querySelector('#notes');
  const notes = $textArea.value;
  const title = $inputTitle.value;
  const photo = $inputPhoto.value;
  const values = {
    title,
    photo,
    notes,
  };
  values.entryId = data.nextEntryId;
  data.entries.unshift(values);
  data.nextEntryId++;
  $img.setAttribute('src', '../images/placeholder-image-square.jpg');
  $form.reset();
}
