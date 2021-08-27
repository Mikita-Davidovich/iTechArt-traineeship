const downloads = [
  {
    id: 1,
    title: 'Recipe',
    status: 'Done',
  },
  {
    id: 2,
    title: 'Workouts',
    status: 'Pending',
  },
  {
    id: 3,
    title: 'Passwords',
    status: 'Pending',
  },
  {
    id: 4,
    title: 'To Do 2021',
    status: 'Pending',
  },
  {
    id: 5,
    title: 'Books',
    status: 'Failed',
  },
];

const table = document.querySelector('.table');
const button = document.querySelector('.button');

function createTable() {
  for (const el of downloads) {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.innerHTML = el.id;
    tr.appendChild(td1);

    const td2 = document.createElement('td');
    td2.innerHTML = el.title;
    tr.appendChild(td2);

    const td3 = document.createElement('td');
    td3.setAttribute('id', el.id);
    td3.innerHTML = el.status;
    tr.appendChild(td3);

    table.appendChild(tr);
  }
}

createTable();

let myTimer = null;

function changeStatus() {
  for (const item of downloads) {
    const td = document.getElementById(item.id);
    if (td.textContent === 'Pending') {
      td.textContent = 'Done';
      console.log('Check started');
      return;
    }
  }
  clearInterval(myTimer);
}

function timer() {
  setTimeout(() => {
    myTimer = setInterval(() => {
      changeStatus();
    }, 5000);
  }, 3000);
}

button.addEventListener('click', () => {
  timer();
});
