new gridjs.Grid({
    search: true, 
    sort: true, 
    pagination: true, 
    fixedHeader: true, 
    height: "90%",

    columns: [
      { name: "id", width: "200px" },  
      { name: "booktype", width: "200px" }, 
      { name: "bookname", width: "200px" } ],

    server: {
      url: "https://apiap-1.onrender.com/api/v1/library ",
      then: (data) => {
          data.sort((a,b) => b.id - a.id);
          return data.map((book) => [
              book.id, 
              book.booktype, 
              book.bookname
            ]);
        }
    },
}) .render(document.getElementById("table"));



//http://localhost:8004/api/v1/Library
