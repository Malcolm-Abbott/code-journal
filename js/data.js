/* exported data */

let data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};

function dataHandler(event) {
  const dataJson = JSON.stringify(data);
  localStorage.setItem('formData', dataJson);
}

window.addEventListener('beforeunload', dataHandler);
