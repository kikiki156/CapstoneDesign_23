function addChecklistItem() {
    var cklist = document.querySelector('.row');
    var newItem = document.createElement('div');
    newItem.classList.add('cklist');
    newItem.innerHTML = '<input type="checkbox"> <input type="text" name="st_name">';
    cklist.appendChild(newItem);
  }