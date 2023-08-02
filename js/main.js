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
const $textArea = document.querySelector('#notes');

function formHandler(event) {
  event.preventDefault();
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

const $entryForm = document.querySelector('div[data-view="entry-form"]');
$entryForm.className = 'hidden';
const $entries = document.querySelector('div[data-view="entries"');
$entries.classList.remove('hidden');

function renderEntry(entry) {
  const $ul = document.querySelector('ul');
  const $li = document.createElement('li');
  $li.className = 'row';
  $ul.appendChild($li);
  const $divColHalf = document.createElement('div');
  $divColHalf.className = 'column-half';
  const $divColHalfTwo = document.createElement('div');
  $divColHalfTwo.className = 'column-half';
  $li.appendChild($divColHalf);
  const $img = document.createElement('img');
  $img.setAttribute('src', entry.photo);
  $divColHalf.appendChild($img);
  $li.appendChild($divColHalfTwo);
  const $h2 = document.createElement('h2');
  $h2.textContent = entry.title;
  $divColHalfTwo.appendChild($h2);
  const $p = document.createElement('p');
  $p.textContent = entry.notes;
  $divColHalfTwo.appendChild($p);
  return $li;
}

renderEntry(data[0]);
