function addChecklistItem() {
    var cklist = document.getElementById('checklist-container');
    var newItem = document.createElement('div');
    newItem.classList.add('cklist');
    newItem.innerHTML = '<input type="checkbox"> <input type="text" name="st_name"> <span class="delete-btn" onclick="deleteChecklistItem(this)">삭제하기</span>';
    cklist.insertBefore(newItem, cklist.lastChild);
  }
  
  function deleteChecklistItem(element) {
    var cklist = document.getElementById('checklist-container');
    var itemToDelete = element.parentNode;
    cklist.removeChild(itemToDelete);
  }