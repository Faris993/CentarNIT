// document.getElementById('addTask').addEventListener('click', () => {
//     const taskInput = document.getElementById('taskInput')
//     const taskText = taskInput.value
//     if(taskText){
//         const li = document.createElement('li')
//         li.innerText = taskText

//         const deleteButton = document.createElement('button')
//         deleteButton.innerText = 'Obrisi'
//         deleteButton.addEventListener('click', () =>{
//             li.remove()
//         })
//         li.appendChild(deleteButton)
//         document.getElementById('taskList').appendChild(li)

//         taskInput.value = ''
//     }
// })

//zadatak palindrom

// function isPalindrome(str) {
//   str = str.replace(/[/^a-zA-Z0-9]/g,'').toLowerCase();
//   //koristi dve pokazivacke varijable za proveru palindroma
//   let left = 0;
//   let right = str.length - 1;
  
//   while(left < right){
//     if(str[left] !== str[right]){
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }
// console.log(isPalindrome("Helloo"));