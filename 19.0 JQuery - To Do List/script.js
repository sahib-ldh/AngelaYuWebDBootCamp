$(document).ready(function() {
    // Toggle completed class on click
    $('#todo-list').on('click', 'li', function() {
      $(this).toggleClass('completed');
    });
  
    // Add new task
    $('#add-task').click(function() {
      const taskText = $('#new-task').val();
      if (taskText.trim() !== '') {
        $('#todo-list').append(' <li class="list-group-item task-text"> ' + taskText + '</li>');
        $('#new-task').val(''); // clear input
      } else {
        alert("Please enter a task.");
      }
    });
  
    // Add enter key support
    $('#new-task').keypress(function(e) {
      if (e.which === 13) {
        $('#add-task').click();
      }
    }); 
    //Delete button
   
  

  });

 