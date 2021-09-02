const DOWNLOADS = [
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
const pending = 'Pending';
const done = 'Done';

(function createTable() {
  for (const download of DOWNLOADS) {
    const tr = document.createElement('tr');
    const tdId = document.createElement('td');
    tdId.innerHTML = download.id;
    tr.appendChild(tdId);

    const tdTitle = document.createElement('td');
    tdTitle.innerHTML = download.title;
    tr.appendChild(tdTitle);

    const tdStatus = document.createElement('td');
    tdStatus.setAttribute('id', download.id);
    tdStatus.innerHTML = download.status;
    tr.appendChild(tdStatus);

    table.appendChild(tr);
  }
}());

let myTimer = null;

function changeStatus() {
  for (const item of DOWNLOADS) {
    const td = document.getElementById(item.id);
    if (td.textContent === pending) {
      td.textContent = done;
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
