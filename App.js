shownotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title: addTitle.value,
        text: addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    shownotes();
});

//shownotes
function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {
        html += `<div class=" noteCard card my-2 mx-1" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${index+1})  ${element.title}</h5>
      <p class="card-text">${element.text}</p>
      <button id=${index} onclick = "deletenotes(this.id)" class="btn btn-primary">Delete Note</button>
    </div>
  </div>`;

    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `No notes added Yet!`;
    }

}
//delete nodes
function deletenotes(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownotes();

}

// search

let search = document.getElementById("searchtxt");
search.addEventListener("input", function() {
    let inputVal = search.value;
    let noteCards = document.getElementsByClassName("noteCard");


    Array.from(noteCards).forEach(function(element) {
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if (cardtxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })

})