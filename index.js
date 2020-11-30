// MONDAY
var form1 = document.querySelector('#monday');
var todoList1 = document.querySelector('#monday-tasks');
var button1 = document.querySelector('.monday-btn');
var input1 = document.getElementById('user-task-mon');
// Declare a variable to hold daily todo lists
var mondayArray = localStorage.getItem('monday') ? JSON.parse(localStorage.getItem('monday')) : [];

// use localStorage setItem() method to set `todos` to a string with `JSON.stringify()`
// JSON.stringify() is used because localStorage works with strings. This is how
// we send data to localStorage.
localStorage.setItem('monday', JSON.stringify(mondayArray));

// Declare a variable `storage` that contains all the information in localStorage.
// We will assign to `storage` JSON.parse() method that converts strings from local
// storage into data we can access with JavaScript.
// When receiving data from a web server, the data is always a string.
//Parse the data with JSON.parse(), and the data becomes a JavaScript object.
var monStorage = JSON.parse(localStorage.getItem('monday'));

form1.addEventListener('submit', function(e) {
    e.preventDefault();
    // form1.onclick('#placeholder');
    // push onto `mondayArray` the `input.value`
    // on localStorage now use `setItem()` for the key `'todos'` the value
    mondayArray.push(input1.value);
    // of the todosArray as a string with the `JSON.stringify()` method.
    localStorage.setItem('monday', JSON.stringify(mondayArray));
    todoMakerMonday(input1.value);
    input1.value = "";

});


// List Entry
var todoMakerMonday = function(text) {
    var todo1 = document.createElement('li');
    todo1.textContent = text;
    todoList1.appendChild(todo1);
}

// CHECKLIST

// Loop through localStorage when a user first opens a page and run the todoMaker function

for (var i = 0; i < monStorage.length; i++) {
    todoMakerMonday(monStorage[i]);
}

// Strikethrough completed list item

todoList1.addEventListener('click', function(e) {

    if (e.target.closest('#monday-tasks')) {
        e.target.style.textDecoration = 'line-through 1px';
        e.target.style.listStyleType = 'disc';
        // move selected list item (e.target) to the bottom of the list of monday-tasks
        document.querySelector('#monday-tasks').appendChild(e.target);
        // save to localStorage

    }
});

// var mondayCompletedArray = localStorage.getItem('monday') ? JSON.parse(localStorage.getItem('monday')) : [];
// //
// localStorage.setItem('monday', JSON.stringify(mondayCompletedArray));
//
// var completedMondayTasks = JSON.parse(localStorage.getItem('monday'));

// function to add todos to local storage
// function addToLocalStorage(todoList1) {
//   // conver the array to string then store it.
//   localStorage.setItem('todoList1', JSON.stringify(todos));
//   // render them to screen
//   todoMakerMonday(todoList1);
// }
//
// function getFromLocalStorage() {
//   const reference = localStorage.getItem('todoList1');
//   // if reference exists
//   if (reference) {
//     // converts back to array and store it in todos array
//     todoList1 = JSON.parse(reference);
//     todoMakerMonday(todoList1);
//   }
// }



// Add toggle feature


// Save complete list data



button1.addEventListener('click', function() {
    // CLEAR ALL BUTTON
    // clear the `localStorage` with the `clear()` method
    localStorage.clear();
    while (todoList1.firstChild) {
        todoList1.removeChild(todoList1.firstChild);
    }
})

// Clear Button Animation

// function buttonAnimation (button1) {
//     // the . represents a class selector
//     var activeButton = document.querySelector('.' + button1);
//     // add class (from css) for when the button is pressed
//     activeButton.classList.add('pressed');
//     // set timer to remove class after a set amount of time
//     setTimeout(function() {
//         activeButton.classList.remove('pressed');
//     }, 100);
// }

button1.onclick = function() {
    button1.disabled = true;
    setTimeout(function() {
        button1.disabled = false;
    }, 100);
}



// TUESDAY
var form2 = document.querySelector('#tuesday');
var todoList2 = document.querySelector('#tuesday-tasks');
var button2 = document.querySelector('.tuesday-btn');
var input2 = document.getElementById('user-task-tues');

// Declare a variable to hold daily todo lists
var tuesdayArray = localStorage.getItem('tuesday') ? JSON.parse(localStorage.getItem('tuesday')) : [];

localStorage.setItem('tuesday', JSON.stringify(tuesdayArray));
var tuesStorage = JSON.parse(localStorage.getItem('tuesday'));

form2.addEventListener('submit', function(e) {
    e.preventDefault();

    // push onto `mondayArray` the `input.value`
    // on localStorage now use `setItem()` for the key `'todos'` the value
    tuesdayArray.push(input2.value);
    // of the todosArray as a string with the `JSON.stringify()` method.
    localStorage.setItem('tuesday', JSON.stringify(tuesdayArray));
    todoMakerTuesday(input2.value);
    input2.value = "";
});

// List Entry
var todoMakerTuesday = function(text) {
    var todo2 = document.createElement('li');
    todo2.textContent = text;
    todoList2.appendChild(todo2);
}
// CHECKLIST

// Loop through localStorage when a user first opens a page and run the todoMaker function

for (var i = 0; i < tuesStorage.length; i++) {
    todoMakerTuesday(tuesStorage[i]);
}

// Strikethrough completed list item

todoList2.addEventListener('click', function(e) {
    // if the clicked target is closest to the id of tuesday-tasks
    if (e.target.closest('#tuesday-tasks')) {
        // var clickedElement = e.target;
        e.target.style.textDecoration = 'line-through 1px';
        // change the marker style of the clicked list item to a filled circle/disc
        e.target.style.listStyleType = 'disc';
        // move selected list item (e.target - from the UL)to the bottom of the list
        document.querySelector('#tuesday-tasks').appendChild(e.target);

    }
});


// assign function to todoList2




button2.addEventListener('click', function() {
    // CLEAR ALL BUTTON
    // clear the `localStorage` with the `clear()` method
    localStorage.clear();
    while (todoList2.firstChild) {
        todoList2.removeChild(todoList2.firstChild);
    }
})

// WEDNESDAY
var form3 = document.querySelector('#wednesday');
var todoList3 = document.querySelector('#wednesday-tasks');
var button3 = document.querySelector('.wednesday-btn');
var input3 = document.getElementById('user-task-weds');
// Declare a variable to hold daily todo lists
var wednesdayArray = localStorage.getItem('wednesday') ? JSON.parse(localStorage.getItem('wednesday')) : [];

localStorage.setItem('wednesday', JSON.stringify(wednesdayArray));
var wedsStorage = JSON.parse(localStorage.getItem('wednesday'));

form3.addEventListener('submit', function(e) {
    e.preventDefault();

    // push onto `mondayArray` the `input.value`
    // on localStorage now use `setItem()` for the key `'todos'` the value
    wednesdayArray.push(input3.value);
    // of the todosArray as a string with the `JSON.stringify()` method.
    localStorage.setItem('wednesday', JSON.stringify(wednesdayArray));
    todoMakerWednesday(input3.value);
    input3.value = "";
});

// List Entry
var todoMakerWednesday = function(text) {
    var todo3 = document.createElement('li');
    todo3.textContent = text;
    todoList3.appendChild(todo3);
}

// Loop through localStorage when a user first opens a page and run the todoMaker function
for (var i = 0; i < wedsStorage.length; i++) {
    todoMakerWednesday(wedsStorage[i]);
}

// Strikethrough completed list item

todoList3.addEventListener('click', function(e) {
    // if the clicked target is closest to the id of tuesday-tasks
    if (e.target.closest('#wednesday-tasks')) {
        // var clickedElement = e.target;
        e.target.style.textDecoration = 'line-through 1px';
        // change the marker style of the clicked list item to a filled circle/disc
        e.target.style.listStyleType = 'disc';
        // move selected list item (e.target - from the UL)to the bottom of the list
        document.querySelector('#wednesday-tasks').appendChild(e.target);

    }
});

button3.addEventListener('click', function() {
    // CLEAR ALL BUTTON
    // clear the `localStorage` with the `clear()` method
    localStorage.clear();
    while (todoList3.firstChild) {
        todoList3.removeChild(todoList3.firstChild);
    }
})

// THURSDAY
var form4 = document.querySelector('#thursday');
var todoList4 = document.querySelector('#thursday-tasks');
var button4 = document.querySelector('.thursday-btn');
var input4 = document.getElementById('user-task-thurs');
// Declare a variable to hold daily todo lists
var thursdayArray = localStorage.getItem('thursday') ? JSON.parse(localStorage.getItem('thursday')) : [];

localStorage.setItem('thursday', JSON.stringify(thursdayArray));
var thursStorage = JSON.parse(localStorage.getItem('thursday'));

form4.addEventListener('submit', function(e) {
    e.preventDefault();

    // push onto `mondayArray` the `input.value`
    // on localStorage now use `setItem()` for the key `'todos'` the value
    thursdayArray.push(input4.value);
    // of the todosArray as a string with the `JSON.stringify()` method.
    localStorage.setItem('thursday', JSON.stringify(thursdayArray));
    todoMakerThursday(input4.value);
    input4.value = "";
});

// List Entry
var todoMakerThursday = function(text) {
    var todo4 = document.createElement('li');
    todo4.textContent = text;
    todoList4.appendChild(todo4);
}
// CHECKLIST

// Loop through localStorage when a user first opens a page and run the todoMaker function

for (var i = 0; i < thursStorage.length; i++) {
    todoMakerThursday(thursStorage[i]);
}

// Strikethrough completed list item

todoList4.addEventListener('click', function(e) {
    // if the clicked target is closest to the id of tuesday-tasks
    if (e.target.closest('#thursday-tasks')) {
        // var clickedElement = e.target;
        e.target.style.textDecoration = 'line-through 1px';
        // change the marker style of the clicked list item to a filled circle/disc
        e.target.style.listStyleType = 'disc';
        // move selected list item (e.target - from the UL)to the bottom of the list
        document.querySelector('#thursday-tasks').appendChild(e.target);

    }
});

button4.addEventListener('click', function() {
    // CLEAR ALL BUTTON
    // clear the `localStorage` with the `clear()` method
    localStorage.clear();
    while (todoList4.firstChild) {
        todoList4.removeChild(todoList4.firstChild);
    }
})
// FRIDAY
var form5 = document.querySelector('#friday');
var todoList5 = document.querySelector('#friday-tasks');
var button5 = document.querySelector('.friday-btn');
var input5 = document.getElementById('user-task-fri');
// Declare a variable to hold daily todo lists
var fridayArray = localStorage.getItem('friday') ? JSON.parse(localStorage.getItem('friday')) : [];

localStorage.setItem('friday', JSON.stringify(fridayArray));
var friStorage = JSON.parse(localStorage.getItem('friday'));

form5.addEventListener('submit', function(e) {
    e.preventDefault();

    // push onto `mondayArray` the `input.value`
    // on localStorage now use `setItem()` for the key `'todos'` the value
    fridayArray.push(input5.value);
    // of the todosArray as a string with the `JSON.stringify()` method.
    localStorage.setItem('friday', JSON.stringify(fridayArray));
    todoMakerFriday(input5.value);
    input5.value = "";
});

// List Entry
var todoMakerFriday = function(text) {
    var todo5 = document.createElement('li');
    todo5.textContent = text;
    todoList5.appendChild(todo5);
}
// CHECKLIST

// Loop through localStorage when a user first opens a page and run the todoMaker function

for (var i = 0; i < friStorage.length; i++) {
    todoMakerFriday(friStorage[i]);
}

// Strikethrough completed list item

todoList5.addEventListener('click', function(e) {
    // if the clicked target is closest to the id of tuesday-tasks
    if (e.target.closest('#friday-tasks')) {
        // var clickedElement = e.target;
        e.target.style.textDecoration = 'line-through 1px';
        // change the marker style of the clicked list item to a filled circle/disc
        e.target.style.listStyleType = 'disc';
        // move selected list item (e.target - from the UL)to the bottom of the list
        document.querySelector('#friday-tasks').appendChild(e.target);

    }
});

button5.addEventListener('click', function() {
    // CLEAR ALL BUTTON
    // clear the `localStorage` with the `clear()` method
    localStorage.clear();
    while (todoList5.firstChild) {
        todoList5.removeChild(todoList5.firstChild);
    }
})
// SATURDAY
var form6 = document.querySelector('#saturday');
var todoList6 = document.querySelector('#saturday-tasks');
var button6 = document.querySelector('.saturday-btn');
var input6 = document.getElementById('user-task-sat');
// Declare a variable to hold daily todo lists
var saturdayArray = localStorage.getItem('saturday') ? JSON.parse(localStorage.getItem('saturday')) : [];

localStorage.setItem('saturday', JSON.stringify(saturdayArray));
var satStorage = JSON.parse(localStorage.getItem('saturday'));

form6.addEventListener('submit', function(e) {
    e.preventDefault();

    // push onto `mondayArray` the `input.value`
    // on localStorage now use `setItem()` for the key `'todos'` the value
    saturdayArray.push(input6.value);
    // of the todosArray as a string with the `JSON.stringify()` method.
    localStorage.setItem('saturday', JSON.stringify(saturdayArray));
    todoMakerSaturday(input6.value);
    input6.value = "";
});

// List Entry
var todoMakerSaturday = function(text) {
    var todo6 = document.createElement('li');
    todo6.textContent = text;
    todoList6.appendChild(todo6);
}
// CHECKLIST

// Loop through localStorage when a user first opens a page and run the todoMaker function

for (var i = 0; i < satStorage.length; i++) {
    todoMakerSaturday(satStorage[i]);
}

// Strikethrough completed list item

todoList6.addEventListener('click', function(e) {
    // if the clicked target is closest to the id of tuesday-tasks
    if (e.target.closest('#saturday-tasks')) {
        // var clickedElement = e.target;
        e.target.style.textDecoration = 'line-through 1px';
        // change the marker style of the clicked list item to a filled circle/disc
        e.target.style.listStyleType = 'disc';
        // move selected list item (e.target - from the UL)to the bottom of the list
        document.querySelector('#saturday-tasks').appendChild(e.target);

    }
});

button6.addEventListener('click', function() {
    // CLEAR ALL BUTTON
    // clear the `localStorage` with the `clear()` method
    localStorage.clear();
    while (todoList6.firstChild) {
        todoList6.removeChild(todoList6.firstChild);
    }
})
// SUNDAY
var form7 = document.querySelector('#sunday');
var todoList7 = document.querySelector('#sunday-tasks');
var button7 = document.querySelector('.sunday-btn');
var input7 = document.getElementById('user-task-sun');
// Declare a variable to hold daily todo lists
var sundayArray = localStorage.getItem('sunday') ? JSON.parse(localStorage.getItem('sunday')) : [];

localStorage.setItem('sunday', JSON.stringify(sundayArray));
var sunStorage = JSON.parse(localStorage.getItem('sunday'));

form7.addEventListener('submit', function(e) {
    e.preventDefault();

    // push onto `mondayArray` the `input.value`
    // on localStorage now use `setItem()` for the key `'todos'` the value
    sundayArray.push(input7.value);
    // of the todosArray as a string with the `JSON.stringify()` method.
    localStorage.setItem('sunday', JSON.stringify(sundayArray));
    todoMakerSunday(input7.value);
    input7.value = "";
});

// List Entry
var todoMakerSunday = function(text) {
    var todo7 = document.createElement('li');
    todo7.textContent = text;
    todoList7.appendChild(todo7);
}
// CHECKLIST

// Loop through localStorage when a user first opens a page and run the todoMaker function

for (var i = 0; i < sunStorage.length; i++) {
    todoMakerSunday(sunStorage[i]);
}

// Strikethrough completed list item

todoList7.addEventListener('click', function(e) {
    // if the clicked target is closest to the id of tuesday-tasks
    if (e.target.closest('#sunday-tasks')) {
        // var clickedElement = e.target;
        e.target.style.textDecoration = 'line-through 1px';
        // change the marker style of the clicked list item to a filled circle/disc
        e.target.style.listStyleType = 'disc';
        // move selected list item (e.target - from the UL)to the bottom of the list
        document.querySelector('#sunday-tasks').appendChild(e.target);

    }
});

button7.addEventListener('click', function() {
    // CLEAR ALL BUTTON
    // clear the `localStorage` with the `clear()` method
    localStorage.clear();
    while (todoList7.firstChild) {
        todoList7.removeChild(todoList7.firstChild);
    }
})
