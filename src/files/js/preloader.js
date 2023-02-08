function loadData() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            setTimeout( 3000);
            let table = document.getElementById("table__users");
            let head = document.getElementById("table__head");
            let body = document.getElementById("table__body");

            var keys = [];
            for(var i = 0;i<data.length;i++)
            {
                Object.keys(data[i]).forEach(function(key){
                    if(keys.indexOf(key) == -1)
                    {
                        keys.push(key);
                    }
                });
            }

            let tr = head.querySelector('tr');
            keys.forEach(key => tr.innerHTML += `<td>${key}</td>`);

            data.forEach(user => {
                let tr = body.appendChild(document.createElement("tr"));
                keys.forEach(key => {
                    tr.innerHTML += `<td>${user[key]}</td>`;
                })
            });

        });
}


loadData()
    .then(() => {
        let preloaderEl = document.getElementById('preloader');
        preloaderEl.classList.add('hidden');
        preloaderEl.classList.remove('visible');
    });
