let bookmarks = [];

let bookmarkName = document.getElementById('bookmarkName');
let bookmarkUrl = document.getElementById('bookmarkURL');

let tableBody = document.getElementById('tableContent');
let box = document.getElementById('box');


function displayBookMarks(){
    tableBody.innerHTML = '';                       // clear before display
    for (let i = 0; i < bookmarks.length; i++) {        // i=0 => i=1 => i=2
        tableBody.innerHTML += `
            <tr>
                <td>` + ( i + 1 ) + `</td>
                <td>` + bookmarks[i].name + `</td>
                <td><button class="btn btn-success" onclick="visitUrl('` + bookmarks[i].url +`')"><i class="fa-solid fa-eye"></i> Visit</button></td>
                <td><button class="btn btn-danger" onclick="deleteBookmark(` + i + `)"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
            </tr>
        `;
    }
}

function visitUrl(url){
    window.open(url, '_blank');
}

function deleteBookmark(index){
    bookmarks.splice(index, 1);
    displayBookMarks();
}

function validateUrl(url) {
    const urlPattern = /^(https:\/\/|http:\/\/)([\w-]+\.)[\w-]+(:\d+)?(\/\S)?$/;
    return urlPattern.test(url);
}

function addBookmark(){
    if( bookmarkName.value != '' && validateUrl(bookmarkUrl.value)){     // if name is not empty and url is valid
        bookmarks.push(
            {
                name: bookmarkName.value, 
                url: bookmarkUrl.value
            }
        );
        displayBookMarks();
        bookmarkName.value = '';
        bookmarkUrl.value = '';
    }else{
        box.classList.remove('d-none');
    }
}

function hideBox(){
    box.classList.add('d-none');
}
