const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
    event. preventDefault ();
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);
    if(data.id == "" || data.booktype == ""|| data.bookname == ""){
        $.toaster({ priority : 'danger', title : 'Error', message : "Oops something went wrong"})
    }
    else {
        fetch('https://apiap-1.onrender.com/api/v1/library ',{
               //iflocallyuse:http://localhost:8004/api/v1/library
            method: 'POST',
            headers:{
               'Content-Type': 'application/json'
       },
      body: JSON.stringify(data)
    }).then(res => res.json())
    .then(data => console.log(data))
    .then(error => console.log(error))
    $.toaster({ priority : 'success', title : 'Library', message : "Yessir it worked"})

    } 
});

//for library update




