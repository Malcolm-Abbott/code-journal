const $inputPhoto = document.querySelector('#photo-url');
const $img = document.querySelector('img');
const $h1 = document.querySelector('h1');

function inputHandler(event) {
  const photo = $inputPhoto.value;
  $img.setAttribute('src', photo);
}

$inputPhoto.addEventListener('input', inputHandler);

const $form = document.querySelector('form');
$form.addEventListener('submit', formHandler);

const $inputTitle = document.querySelector('#title');
const $textArea = document.querySelector('#notes');
const $ul = document.querySelector('ul');
const $noEntries = document.querySelector('.no-entries');

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
  if (data.editing === null) {
    values.entryId = data.nextEntryId;
    data.entries.unshift(values);
    data.nextEntryId++;
    $ul.prepend(renderEntry(values));
  } else {
    values.entryId = data.editing.entryId;
    const $liNodeList = document.querySelectorAll('li');
    for (let i = 0; i < data.entries.length; i++) {
      if (data.entries[i].entryId === data.editing.entryId) {
        data.entries[i] = values;
        $liNodeList[i].replaceWith(renderEntry(values));
      }
    }
    $h1.textContent = 'New Entry';
    data.editing = null;
  }
  $form.reset();
  $img.setAttribute('src', '../images/placeholder-image-square.jpg');
  toggleNoEntries();
  viewSwap('entries');
}

function renderEntry(entry) {
  const $li = document.createElement('li');
  $li.className = 'row';
  $li.setAttribute('data-entry-id', entry.entryId);
  const $divColHalf = document.createElement('div');
  $divColHalf.className = 'column-half';
  const $divColHalfTwo = document.createElement('div');
  $divColHalfTwo.className = 'column-half';
  $li.appendChild($divColHalf);
  const $img = document.createElement('img');
  $img.setAttribute('src', entry.photo);
  $divColHalf.appendChild($img);
  $li.appendChild($divColHalfTwo);
  const $divPencilBox = document.createElement('div');
  $divPencilBox.className = 'pencil-box';
  $divColHalfTwo.appendChild($divPencilBox);
  const $h2 = document.createElement('h2');
  $h2.textContent = entry.title;
  $divPencilBox.appendChild($h2);
  const $iPencil = document.createElement('i');
  $iPencil.className = 'fa-solid fa-pen';
  $iPencil.style.color = 'rgb(86, 43, 129)';
  $divPencilBox.appendChild($iPencil);
  const $p = document.createElement('p');
  $p.textContent = entry.notes;
  $divColHalfTwo.appendChild($p);
  return $li;
}

function documentHandler(event) {
  for (let i = 0; i < data.entries.length; i++) {
    const $entry = data.entries[i];
    $ul.appendChild(renderEntry($entry));
  }
  toggleNoEntries();
  viewSwap(data.view);
}

document.addEventListener('DOMContentLoaded', documentHandler);

function toggleNoEntries() {
  if (data.entries.length > 0) {
    $noEntries.className = 'no-entries hidden';
  } else {
    $noEntries.className = 'no-entries';
  }
}

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

const $entryFormLink = document.querySelector('.entry-form-link');

function entryFormLinkHandler(event) {
  viewSwap('entry-form');
}

$entryFormLink.addEventListener('click', entryFormLinkHandler);

function ulHandler(event) {
  if (event.target.tagName === 'I') {
    viewSwap('entry-form');
    for (let i = 0; i < data.entries.length; i++) {
      if (
        data.entries[i].entryId ===
        Number(event.target.closest('LI').getAttribute('data-entry-id'))
      ) {
        data.editing = data.entries[i];
      }
    }
    $inputTitle.value = data.editing.title;
    $inputPhoto.value = data.editing.photo;
    $textArea.value = data.editing.notes;
    $h1.textContent = 'Edit Entry';
    $img.setAttribute('src', data.editing.photo);
  }
}

$ul.addEventListener('click', ulHandler);
