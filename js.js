// // const userData = [
// //     {
// //     name: "Австралія",
// //     capital: "Канберра",
// //     currency: "Австралійский доллар (AUD)",
// //     language: "Англійска",
// //     population: 24970200,
// //     flag: "https://wikiway.com/upload/iblock/742/800pxFlagofAustraliasvg.png",
// //     infected: false
// //     },
// //     {
// //     name: "Болівія",
// //     capital: "Сукре",
// //     currency: "Болівіано (BOB)",
// //     language: "Іспанська, кечуа, аймара, гуарані",
// //     population: 10461053,
// //     flag: "https://wikiway.com/upload/iblock/5ed/800px-Flag_of_Bolivia.png",
// //     infected: true
// //     },
// //     {
// //     name: "Великобританія",
// //     capital: "Лондон",
// //     currency: "Фунт стерлінгів (GBP)",
// //     language: "Английска",
// //     population: 63395574,
// //     flag: "https://wikiway.com/upload/iblock/5ec/800px-Flag_of_the_United_Kingdom_svg.png",
// //     infected: false
// //     },
// //     {
// //     name: "Ямайка",
// //     capital: "Кінгстон",
// //     currency: "Ямайский доллар (JMD)",
// //     language: "Англійська",
// //     population: 2868380,
// //     flag: "https://wikiway.com/upload/iblock/b83/600px-Flag_of_Jamaica_svg.png",
// //     infected: false
// //     },
// //     {
// //     name: "Швеція",
// //     capital: "Стокгольм",
// //     currency: "Шведська крона (SEK)",
// //     language: "Шведська",
// //     population: 9723809,
// //     flag: "https://wikiway.com/upload/iblock/5e3/800px-Flag_of_Sweden_svg.png",
// //     infected: true
// //     },
// //     {
// //     name: "Португалія",
// //     capital: "Ліссабон",
// //     currency: "Евро (EUR)",
// //     language: "Португальска",
// //     population: 10799270,
// //     flag: "https://wikiway.com/upload/iblock/2b1/600px-Flag_of_Portugal_svg.png",
// //     infected: true
// //     }
// //     ]

// //     const compileTemplate = Handlebars.compile(document.querySelector('#adress-template'))

//     function addToLocalStorageArray(key, value) {
//         let existingArray = JSON.parse(localStorage.getItem(key)) || [];
        
//         existingArray.push(value);
        
//         localStorage.setItem(key, JSON.stringify(existingArray));
//         }
        
//         // Add an item to 'myArray'
//         addToLocalStorageArray('myArray', 'newValue');
        
//         // Now you can retrieve 'myArray' and log its value
//         console.log(JSON.parse(localStorage.getItem('myArray')));
        
        
//         //task 10
//         function addToLocalStorageArray(key, value) {
//         let existingArray = JSON.parse(localStorage.getItem(key)) || [];
        
//         existingArray.push(value);
        
//         localStorage.setItem(key, JSON.stringify(existingArray));
//         }
        
//         // Add an item to 'myArray'
//         addToLocalStorageArray('myArray', 'newValue');
        
//         // Now you can retrieve 'myArray' and log its value
//         console.log(JSON.parse(localStorage.getItem('myArray')));

//         const name = prompt('enter your name');
// const age = prompt('enter your age');

// const json = `{
// "name": "${name}",
// "age": ${parseInt(age)}
// }`;
// console.log(JSON.parse(json));

// function addToLocalStorage(key, object) {
//     let objectString = JSON.stringify(object);
    
//     localStorage.setItem(key, objectString)
//     return object;
//     }
    
//     const key = 'task 1'
//     const object = {
//     name: 'John',
//     age: 30
//     }
    
//     addToLocalStorage(key, object);

//     function getFromLocalStorage(key) {
//         const stringToObj = localStorage.getItem(key);
        
//         const object = JSON.parse(stringToObj);
//         return object;
//         }
        
//         console.log(getFromLocalStorage(key));

//         // example 1
// const settings = {
//     theme: 'dark',
//     isAuthenticated: true,
//     options: [1, 2, 3],
//     };
//     // console.log(settings);
    
//     localStorage.setItem('settings', JSON.stringify(settings));
    
//     const storedSettings = localStorage.getItem('settings');
//     const parsedSettings = JSON.parse(storedSettings);
    
//     console.log(parsedSettings);
    
    

//     function returnList() {
//         const keys = [];
        
//         for (let i = 0; i < localStorage.length; i++) {
//         keys.push(localStorage.key(i))
//         }
//         return keys;
        
//         }
//         console.log(returnList());



//         localStorage.setItem('key1', 'value1');
// localStorage.setItem('key2', 'value2');

// function returnList() {
// const keys = [];

// for (let i = 0; i < localStorage.length; i++) {
// const key = localStorage.key(i)
// if (key !== null) {
// keys.push(key);
// }
// }
// return keys;

// }
// console.log(returnList());


// function checkKey() {
//     return localStorage.getItem(key) !== null;
//     }
//     console.log(checkKey());


//     //example 2
//     // const input = document.querySelector('.example2');
//     // const button = document.querySelector('.button');
    
//     // button.addEventListener('click', function() {
//     // localStorage.info = input.value;
//     // })
    
//     // document.write(localStorage.info)
    
//     //task1
//     // function addToLocalStorage(key, object) {
//     // let objectString = JSON.stringify(object);
    
//     // localStorage.setItem(key, objectString)
//     // return object;
//     // }
    
//     // const key = 'task 1'
    
//     // const object = {
//     // name: 'John',
//     // age: 30
//     // }
    
//     // addToLocalStorage(key, object);
    
//     //task 2
//     // function getFromLocalStorage(key) {
//     // const stringToObj = localStorage.getItem(key);
    
//     // const object = JSON.parse(stringToObj);
//     // return object;
//     // }
    
//     // console.log(getFromLocalStorage(key));

//     function addItems(item, value) {
//         const existingArr = JSON.parse(localStorage.getItem(item)) || [];
        
//         existingArr.push(value);
        
//         localStorage.setItem(item, JSON.stringify(existingArr))
//         }
//         addItems('myArray', 'value45');
//         console.log(JSON.parse(localStorage.getItem('myArray')));

//         const square = document.querySelector('.change-color');

// const changeColor = () => {
// const colors = ['red', 'green', 'blue', 'purple'];

// let index = 0;

// setInterval(() => {
// square.style.backgroundColor = colors[index]

// index = (index + 1) % colors.length;

// }, 3000)
// }

// changeColor()

// const start = document.querySelector('.button-start');
// const stop = document.querySelector('.button-stop');
// const reset = document.querySelector('.button-reset');
// const text = document.querySelector('.seconds');


// let startTime;
// let timerInterval;
// let running = false;
// let pausedTime = 0;


// function interval () {
// timerInterval = setInterval(() => {
// const currentTime = new Date();
// const elapsedTime = currentTime - startTime + pausedTime;
// const hours = Math.floor(elapsedTime / 3600000);
// const minutes = Math.floor((elapsedTime % 3600000)/ 60000);
// const seconds = Math.floor((elapsedTime % 60000)/ 1000);
// const miliSeconds = elapsedTime % 1000;


// const timeString = `${hours}:${minutes}:${seconds}.${miliSeconds}`;
// text.textContent = timeString;
// }, 1000)
// }

// const handleStart =() => {
// if(!running) {
// startTime = new Date();
// interval();
// running = true;
// }

// }

// const handleStop = () => {
// if(running) {
// clearInterval(timerInterval);
// pausedTime += new Date() - startTime;
// running = false;
// }
// }

// const handleReset = () => {
// clearInterval(timerInterval);
// running = false;
// pausedTime = 0;
// }

// start.addEventListener('click', handleStart);
// stop.addEventListener('click', handleStop);
// reset.addEventListener('click', handleReset);

// const background = document.querySelector('budy');

// let timer = 10;

// const interval = setInterval

// const chartContainer = document.querySelector('#sales-chart');

// const chartData = {
// labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
// datasets: [{
// label: 'Продажі за останній місяць',
// data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
// backgroundColor: '#2196f3',
// borderColor: '#2196f3',
// borderWidth: 1
// }]
// };


// const salesChart = new Chart(chartContainer, {
// type: 'line',
// data: chartData,
// // options: {
// // scales: {
// // y: {
// // stacked: true
// // }
// // }
// // }
// })

// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min +1)) + min;
//     }
    
    
    
//     function createElements() {
//     const container = document.createElement('div');
//     container.classList.add('element');
//     document.body.appendChild(container);
    
//     container.style.left = getRandomNumber(0, window.innerWidth - 50) + 'px';
//     container.style.top = getRandomNumber(0, window.innerHeight - 50) + 'px';
//     return container;
//     }
    
//     function animateElements() {
//     const elements = document.querySelectorAll('.element');
    
//     elements.forEach((element) => {
//     const positionX = getRandomNumber(0, window.innerWidth - 50);
//     const positionY = getRandomNumber(0, window.innerHeight - 50);
//     const newSize = getRandomNumber(20, 100);
//     const newColor = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;
    
//     element.style.left = positionX + 'px';
//     element.style.top = positionY + 'px';
    
//     element.style.width = newSize + 'px';
//     element.style.backgroundColor = newColor;
//     })
    
    
//     }
    
//     createElements()
//     createElements()
//     createElements()
//     createElements()
//     setInterval(animateElements, 3000)
    

    // dz

    // let taskInput = document.querySelector("taskInput");
    // let tasklist = document.querySelector("tastlist");
    // let tasks = JSON.parse(localStorage.getItem('task')) || [];

    // function addTask () {
    //     let inputValue = taskInput.value
    //     console.log(inputValue);
    //     if(inputValue === '') {
    //         alert('Enter your task')
    //         return;
    //     }
    //     console.log(tasks);
    //     tasks.push({task: inputValue, completed: false});
    //     localStorage.setItem('tasks', JSON.stringify(tasks));

    //     displayTasks()
    //     taskInput.value = ''
    // }

    // function displayTasks() {
    //     tasks.forEach(function (task, index){
    //         const listItem = document.createElement('li');
    //         listItem.innerHTML = `<input type="checkbox" onchange="updateTask(${index}, this.checked)" ${task.completed ? 'checked' : ''}> ${task.task}`;
    //     tasklist.appendChild(listItem)
    //     });
        
    // }

    // function updateTask (index, completed) {
    //     tasks[index].completed = completed
    //     localStorage.setItem("tasks", JSON.stringify(tasks))
    // }
    // displayTasks()

    const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#taskList');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function addTask() {
let inputValue = taskInput.value;
console.log(inputValue);

if(inputValue === '') {
alert('Enter your task')
return;
}

console.log(tasks);
tasks.push({task: inputValue, completed: false});
localStorage.setItem('tasks', JSON.stringify(tasks));
displayTasks();
taskInput.value = ''

}

function displayTasks() {
taskList.innerHTML = '';
tasks.forEach(function (task, index) {
const listItem = document.createElement('li');
listItem.innerHTML = `<input type="checkbox" onchange="updateTask(${index}, this.checked)" ${task.completed ? 'checked' : ''}> ${task.task}`;
taskList.appendChild(listItem)
});

}

function updateTask(index, completed) {
tasks[index].completed = completed;
localStorage.setItem('tasks', JSON.stringify(tasks));
}
displayTasks()

setTimeout(() => {
    console.log("3 setTimeout");
  }, 100);
  
  //macro 1
  setTimeout(() => {
    console.log("1 setTimeout");
  }, 0);
  
  const isTrue = false; // відразу 1
  console.log("1"); // відразу 2
  
  // macro 2
  setTimeout(() => {
    console.log("2 setTimeout");
  });
  
  // // відразу
  // const someData2 = new Promise((resolve, reject) => {
  //   // відразу
  //   console.log("2 executor");
  //   // some logic
  //   // відразу
  //   if (isTrue) {
  //     resolve("Some true data"); // створює мікро 1 таску і ставить в окрему чергу
  //   } else {
  //     reject("Some false data"); // створює мікро 2 таску і ставить в окрему чергу
  //   }
  //   // не спрацює ніколи
  //   resolve();
  
  //   resolve();
  // });
  
  // someData2
  //   .then((data) => {
  //     console.log("then data:", data);
  //   })
  //   .catch((error) => {
  //     console.log("catch error:", error);
  //   })
  //   .finally(() => {
  //     console.log("end");
  //   });
  
  const someData = new Promise((resolve, reject) => {
    console.log("2 executor");
  
    if (isTrue) {
      resolve("Some true data"); // створює мікро 1 таску і ставить в окрему чергу
    } else {
      reject("Some false data"); // створює мікро 2 таску і ставить в окрему чергу
    }
  })
    .then((data) => {
      console.log("then data:", data);
    })
    .catch((error) => {
      console.log("catch error:", error);
    })
    .finally(() => {
      console.log("end");
    });
  
  console.log("3"); // відразу
  console.log("4"); // відразу
  
  // якщо попало в resolve - onfulfilled
  // якщо попало в reject - onrejected
  // someData.then(onfulfilled, onrejected);
  
  // someData.then(
  //   (data) => { // 1
  //     console.log("data:", data);
  //   },
  //   (error) => {
  //     console.log("error:", error);
  //   }
  // )
  
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      // console.log("response 1", response);
      return response.json();
    })
    .then((json) => {
      console.log("json 1", json);
      return 5;
    })
    .then((data) => {
      console.log("data 1", data);
      // throw new Error("Parameter is not a number!");
  
      const x = data.viktor();
    })
    .catch((error) => {
      console.log("catch error", error);
    })
    .finally(() => {
      console.log("finally");
    });