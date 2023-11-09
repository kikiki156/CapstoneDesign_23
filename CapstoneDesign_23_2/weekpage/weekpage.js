document.addEventListener('DOMContentLoaded', function() {
    var editMode = false;
    var selectedCell = null;
  
    document.getElementById('editModeButton').addEventListener('click', function() {
      editMode = !editMode;
      document.getElementById('editInstructions').style.display = editMode ? 'block' : 'none';
    });
  
    var subjects = document.querySelectorAll('.subject');
    subjects.forEach(function(cell) {
      cell.addEventListener('click', function() {
        if (editMode) {
          selectedCell = this;
          var editInput = document.getElementById('editInput');
          editInput.style.display = 'block';
          editInput.value = this.textContent;
          editInput.focus();
        }
      });
    });
  
    document.getElementById('editInput').addEventListener('blur', function() {
      if (selectedCell) {
        selectedCell.textContent = this.value;
        this.style.display = 'none';
      }
    });
  
    document.getElementById('editInput').addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        this.blur();
      }
    });
  });
    document.querySelectorAll('.editable').forEach(function(element) {
      element.addEventListener('blur', function() {
        alert('수정된 내용: ' + this.textContent);
      });
    });
    


function updateClock() {
  const now = new Date();
  const clockElement = document.getElementById('live-clock');
  clockElement.textContent = now.toLocaleTimeString();
  setTimeout(updateClock, 1000); 
}


document.addEventListener('DOMContentLoaded', updateClock);
