

const myLibrary = [];

function Book(title , author , pages , read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info =function(){
        return (title +' by '+author+' , '+ pages + ' ' + read)
    }
}

function addBooktoLibrary (title, author , pages , read){
    let book = new Book(title, author, pages, read);
  
    myLibrary.push(book);
        
        function addBookToPage(){
            let books = document.querySelector('.books')

            //removes bookcards before making new ones for whole library
           const bookCard = document.querySelectorAll('.bookCard');
           for (let i = 0 ; i < bookCard.length; i++){
            bookCard[i].remove();
           }
           let index = 0;
            myLibrary.forEach((book)=>{
              
                const bookCard = document.createElement('div');
                    bookCard.classList.add('bookCard');
                const bookTitle = document.createElement('h4');
                    bookTitle.classList.add('bookTitle');
                const bookAuthor= document.createElement('div');
                    bookAuthor.classList.add('bookAuthor')
                const bookPages = document.createElement('div');
                    bookPages.classList.add('bookPages');
                const bookRead = document.createElement('button')
                    bookRead.classList.add('bookRead');
                const bookRemove = document.createElement('button')
                    bookRemove.classList.add('bookRemove');

                    bookTitle.textContent = ` Title: ${book.title} `;
                    bookAuthor.textContent = `Author: ${book.author}`;
                    bookPages.textContent = `Number of pages: ${book.pages}`;
                    bookRemove.textContent = 'Remove';
                    bookRemove.dataset.linkedArray = index;
                    bookRead.dataset.linkedArray= index;
                    index++;
                    
                         if (book.read === true){
                            bookRead.textContent = 'Read';
                            bookRead.style.backgroundColor =  '#00AB66'
                         }else {
                            bookRead.textContent = 'Have not read';
                            bookRead.style.backgroundColor = 'rgba(236, 63, 63, .6)';   
                         };

                         bookRead.addEventListener('click', ()=>{
                            if (book.read === true){
                                book.read = false
                                bookRead.textContent = 'Have not read';
                            bookRead.style.backgroundColor = 'rgba(236, 63, 63, .6)';  
                            }else{
                                book.read = true;
                                bookRead.textContent = 'Read';
                                bookRead.style.backgroundColor =  '#00AB66'
                            }
                         })
                         bookRemove.addEventListener('click',()=>{
                            let verfifyBookToRemove = bookRemove.dataset.linkedArray;
                            myLibrary.splice(parseInt(verfifyBookToRemove), 1);
                            bookCard.remove();
                            addBookToPage();
                         })
                    
                    bookCard.appendChild(bookTitle);
                    bookCard.appendChild(bookAuthor);
                    bookCard.appendChild(bookPages);
                    bookCard.appendChild(bookRead);
                    bookCard.appendChild(bookRemove);
                 books.appendChild(bookCard);
                
            });
                  
         };
    addBookToPage();
}

const addBookButton = document.querySelector('.addBook');
const cancelButton = document.querySelector('#cancel');
const submitButton = document.querySelector('#submit');
const dialog = document.querySelector('#bookInfo');


function openCheck (dialog){
    if (dialog.open) {
        console.log('Dialog open');
    }else {
        console.log('Dialog closed');
    }
}

addBookButton.addEventListener('click',()=>{
    dialog.showModal();
    openCheck(dialog);
});

cancelButton.addEventListener('click',()=>{
    dialog.close("bookInfoMissing");
    openCheck(dialog);
})

submitButton.addEventListener('click',()=>{
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    if (title === ''||(author === '')||(pages === '') ){
        alert('missing info');
    } else{
    console.log(read.value)
        addBooktoLibrary(title, author, pages,read);
        dialog.close()
    document.querySelector('#form').reset()
    };

});





