
    function updateLiveTime() {
      let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      let currentTime = new Date();
      let dayOfWeek = daysOfWeek[currentTime.getDay()];
      let dayOfMonth = currentTime.getDate();
      let hours = currentTime.getHours();
      let minutes = currentTime.getMinutes();
      let ampm;
      if (hours >= 12) {
        ampm = 'PM';
      } else {
        ampm = 'AM';
      }


      hours = hours % 12;
      if (!hours) {
        hours = 12;
      }
       

  
      if (minutes < 10) {
        minutes = '0' + minutes;
      } 
      

      let timeString = hours + ':' + minutes + ' ' + ampm;
     let dateString = dayOfWeek + ' ' + dayOfMonth;

      document.getElementById('liveTime').innerHTML = '<div>' + dateString + '</div><div>' + timeString + '</div>';
    }

    
    updateLiveTime();

    
    setInterval(updateLiveTime, 1000);

    function addTodo() {
      
      let parentDiv = document.querySelector(".list-div");
      let toDoInput = document.getElementById("todoInput");
    
      if (toDoInput.value !== "") {
        let childDiv = document.createElement("div");
        childDiv.id = 'list';
        childDiv.classList.add("todo-item");
    
        
        let timestamp = new Date();
        let timestampString =
          timestamp.toLocaleDateString() +
          " " +
          timestamp.toLocaleTimeString();
    
        
        let todoTextSpan = document.createElement("span");
        
        todoTextSpan.textContent = toDoInput.value;
    
        
        let timestampDiv = document.createElement("div");
        timestampDiv.classList.add("timestamp");
        timestampDiv.textContent = timestampString;
    
        
        childDiv.appendChild(todoTextSpan);
        
    
       
        parentDiv.appendChild(childDiv);
        parentDiv.appendChild(timestampDiv);
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "checkbox";
      
        
        parentDiv.appendChild(checkbox)
        let deleteButton = document.createElement('button');
        deleteButton.id = 'deleteButton';
        childDiv.appendChild(deleteButton);
        deleteButton.addEventListener("click", function (){
          parentDiv.removeChild(childDiv);
          parentDiv.removeChild(timestampDiv)
          parentDiv.removeChild(checkbox)



        })
    
        
        toDoInput.value = "";
      }
    }
    