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
    // push onto `mondayArray` the `input.value`
    mondayArray.push(input1.value);
    // on localStorage now use `setItem()` for the key `'todos'` the value
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

// Loop through localStorage when a user first opens a page and run the todoMaker function
for (var i = 0; i < monStorage.length; i++) {
    todoMakerMonday(monStorage[i]);
}

// tick off completed tasks
todoList1.addEventListener('click', function(e) {
    if (e.target.closest('#monday-tasks')) {
        // toggle between complete and incomplete
        e.target.classList.toggle('completed');
        // move selected list item (e.target) to the bottom of the list of monday-tasks
        document.querySelector('#monday-tasks').appendChild(e.target);
    }
    // prepend incomplete tasks
        // document.querySelector('#monday-tasks').prepend(e.target);

});

// save completed tasks to local storage
// function saveCompletedTask(day) {
//     switch (day) {
//         case 'monday-tasks':
//             localStorage.getItem('completedTasksMonday') ? JSON.parse(localStorage.getItem('completedTasksMonday')) : [];
//             break;
//
//         // case 'tuesday-tasks':
//         //     localStorage.getItem('todoList2') ? JSON.parse(localStorage.getItem('todoList2')) : [];
//         //     break;
//
//         default:
//             console.log(form1);
//     }
// }

// clear ALL button
button1.addEventListener('click', function() {
    localStorage.clear();
    while (todoList1.firstChild) {
        todoList1.removeChild(todoList1.firstChild);
    }
});

// button animation
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

// Loop through localStorage when a user first opens a page and run the todoMaker function
for (var i = 0; i < tuesStorage.length; i++) {
    todoMakerTuesday(tuesStorage[i]);
}

// Strikethrough completed list item
todoList2.addEventListener('click', function(e) {
    if (e.target.closest('#tuesday-tasks')) {
        e.target.classList.toggle('completed');
        document.querySelector('#tuesday-tasks').appendChild(e.target);
    }
});

// clear button
button2.addEventListener('click', function() {
    localStorage.clear();
    while (todoList2.firstChild) {
        todoList2.removeChild(todoList2.firstChild);
    }
});

// button animation
button2.onclick = function() {
    button2.disabled = true;
    setTimeout(function() {
        button2.disabled = false;
    }, 100);
}

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
    wednesdayArray.push(input3.value);
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
    if (e.target.closest('#wednesday-tasks')) {
        e.target.classList.toggle('completed');
        document.querySelector('#wednesday-tasks').appendChild(e.target);
    }
});

// clear button
button3.addEventListener('click', function() {
    localStorage.clear();
    while (todoList3.firstChild) {
        todoList3.removeChild(todoList3.firstChild);
    }
});

// button animation
button3.onclick = function() {
    button3.disabled = true;
    setTimeout(function() {
        button3.disabled = false;
    }, 100);
}

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
    thursdayArray.push(input4.value);
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

// Loop through localStorage when a user first opens a page and run the todoMaker function
for (var i = 0; i < thursStorage.length; i++) {
    todoMakerThursday(thursStorage[i]);
}

// Strikethrough completed list item
todoList4.addEventListener('click', function(e) {
    if (e.target.closest('#thursday-tasks')) {
        e.target.classList.toggle('completed');
        document.querySelector('#thursday-tasks').appendChild(e.target);
    }
});

// clear button
button4.addEventListener('click', function() {
    localStorage.clear();
    while (todoList4.firstChild) {
        todoList4.removeChild(todoList4.firstChild);
    }
});

// button animation
button4.onclick = function() {
    button4.disabled = true;
    setTimeout(function() {
        button4.disabled = false;
    }, 100);
}

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
    fridayArray.push(input5.value);
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

// Loop through localStorage when a user first opens a page and run the todoMaker function
for (var i = 0; i < friStorage.length; i++) {
    todoMakerFriday(friStorage[i]);
}

// Strikethrough completed list item
todoList5.addEventListener('click', function(e) {
    if (e.target.closest('#friday-tasks')) {
        e.target.classList.toggle('completed');
        document.querySelector('#friday-tasks').appendChild(e.target);
    }
});

// clear button
button5.addEventListener('click', function() {
    // CLEAR ALL BUTTON
    // clear the `localStorage` with the `clear()` method
    localStorage.clear();
    while (todoList5.firstChild) {
        todoList5.removeChild(todoList5.firstChild);
    }
});

// button animation
button5.onclick = function() {
    button5.disabled = true;
    setTimeout(function() {
        button5.disabled = false;
    }, 100);
}

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
    saturdayArray.push(input6.value);
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

// Loop through localStorage when a user first opens a page and run the todoMaker function
for (var i = 0; i < satStorage.length; i++) {
    todoMakerSaturday(satStorage[i]);
}

// Strikethrough completed list item
todoList6.addEventListener('click', function(e) {
    if (e.target.closest('#saturday-tasks')) {
        e.target.classList.toggle('completed');
        document.querySelector('#saturday-tasks').appendChild(e.target);
    }
});

// clear button
button6.addEventListener('click', function() {
    localStorage.clear();
    while (todoList6.firstChild) {
        todoList6.removeChild(todoList6.firstChild);
    }
});

// button animation
button6.onclick = function() {
    button6.disabled = true;
    setTimeout(function() {
        button6.disabled = false;
    }, 100);
}

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
    sundayArray.push(input7.value);
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

// Loop through localStorage when a user first opens a page and run the todoMaker function
for (var i = 0; i < sunStorage.length; i++) {
    todoMakerSunday(sunStorage[i]);
}

// Strikethrough completed list item
todoList7.addEventListener('click', function(e) {
    if (e.target.closest('#sunday-tasks')) {
        e.target.classList.toggle('completed');
        document.querySelector('#sunday-tasks').appendChild(e.target);
    }
});

// clear button
button7.addEventListener('click', function() {
    localStorage.clear();
    while (todoList7.firstChild) {
        todoList7.removeChild(todoList7.firstChild);
    }
});

// button animation
button7.onclick = function() {
    button7.disabled = true;
    setTimeout(function() {
        button7.disabled = false;
    }, 100);
}
