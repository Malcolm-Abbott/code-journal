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

function renderEntry(entry) {
  const $li = document.createElement('li');
  $li.className = 'row';
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

const $ul = document.querySelector('ul');

function documentHandler(event) {
  for (let i = 0; i < data.entries.length; i++) {
    const $entry = data.entries[i];
    $ul.appendChild(renderEntry($entry));
  }
}

document.addEventListener('DOMContentLoaded', documentHandler);

const $noEntries = document.querySelector('.no-entries');

function toggleNoEntries() {
  if (data.entries) {
    $noEntries.className = 'no-entries hidden';
  } else {
    $noEntries.className = 'no-entries';
  }
}

toggleNoEntries();

const $entryForm = document.querySelector('div[data-view="entry-form"]');
const $entries = document.querySelector('div[data-view="entries"');

function viewSwap(dataView) {
  data.view = dataView;
  if (dataView === 'entries') {
    $entries.classList.remove('hidden');
    $entryForm.classList.add('hidden');
  } else if (dataView === 'entry-form') {
    $entryForm.classList.remove('hidden');
    $entries.classList.add('hidden');
  }
}

const $a = document.querySelector('a');

function anchorHandler(event) {
  viewSwap('entries');
}

$a.addEventListener('click', anchorHandler);
