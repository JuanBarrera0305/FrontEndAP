const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
    event. preventDefault ();
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);
        fetch('http://localhost:8004/api/v1/Library',{
            method: 'PUT',
            headers:{
               'Content-Type': 'application/json'
       },
      body: JSON.stringify(data)
    }).then(res => res.json())
    .then(data => console.log(data))
    .then(error => console.log(error))
    $.toaster({ priority : 'success', title : 'Library', message : "Yessir it worked"})

    } 
);