// console.log('Script is working');

const addBtn = $('.confirm');
const dateEl = $('#date');
const date = dayjs().format('ddd, D MMM YYYY');

console.log(date);

dateEl.text(date);
// const assignBtn = $('#assign');
// const userInput = $('#input');
// const tasks = [];

// if (tasks.length <= 0) {
//     $('.container-content').append(
//         `<p class="empty-content">No tasks at the moment</p>`
//     );

// }

// addBtn.on("click", function () {
//     // console.log('clicked');

//     let task = { name:userInput.val().trim(), age: 25 }; 
//     tasks.push(task); 
//     console.log(tasks);
    
//         userInput.val('');
//     // }
// });

addBtn.on("click", function () {
    console.log('clicked');
});

// // function displayTasks(params) {

// //     for (let i = 0; i < tasks.length; i++) {
// //         const element = tasks[i];

// //         console.log(element);

// //     //          $('.container-content').append(
// //     //         `<ul>
// //     //     <li>
// //     //         <div class="content">
// //     //             <div class="details">
// //     //                 <button><i class="iconoir-xmark-circle"></i></button>
// //     //                 <p id="task" data-id="">${tasks[element].name}</p>
// //     //             </div>
// //     //             <div class="profiles">
// //     //                 <i class="iconoir-xmark-circle"></i>
// //     //             </div>
// //     //         </div>
// //     //     </li>
// //     // </ul>`
// //     //     );
        
// //     }
// //         // if (userInput.val().trim() != '') {
   
// // }

// // displayTasks();

const ctx = document.getElementById('myChart');

new Chart(ctx, {
type: 'doughnut',
  data: {
 
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          '#B38DFF',
          '#9065E5',
          '#A071FF'
        ],
        hoverOffset: 4
      }]
  }
});