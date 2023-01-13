function serializeForm(formNode) {
    return new FormData(formNode);
}


function handleFormSubmit(event) {
    event.preventDefault();
    let arr = Array.from(serializeForm(applicantForm).entries());
    const btn = document.getElementById('sat-btn');
    const column = document.getElementById('sat-column');
    if (arr[0][1] === '5') {
        btn.style.display = "none";
        column.style.display = "none";
    }
    else if (arr[0][1] === '6') {
        btn.style.display = "";
        column.style.display = "";
    }

}

function handleFormSubmitAddForm(event) {
    event.preventDefault();

    let arr = Array.from(serializeForm(addForm).entries());
    let myStorage = window.localStorage;
    let subject = arr[0][1];
    let day = arr[1][1];
    let className = ".schedule__" + day;
    let scheduleDay = document.querySelector((className + " ol"));
    let li = scheduleDay.appendChild(document.createElement('li'));
    li.textContent = subject;

    console.log(scheduleDay.innerHTML);
    myStorage.setItem(className, scheduleDay.innerHTML);
}

function ready() {
    if (localStorage.length !== 0) {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let className = key;

            let ol = document.querySelector((className + " ol"));
            ol.innerHTML = localStorage.getItem(key);
        }
    }
}

function clear() {
    localStorage.clear();
    location.reload();
}

const applicantForm = document.getElementById('choose-form');
applicantForm.addEventListener('submit', handleFormSubmit);
applicantForm.addEventListener('reset', clear);


const addForm = document.getElementById('add-form');
addForm.addEventListener('submit', handleFormSubmitAddForm);

document.addEventListener("DOMContentLoaded", ready);
