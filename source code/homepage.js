document.addEventListener("DOMContentLoaded", function(){ 
    const booksButton = document.getElementById("books");
    const homepageContainer = document.getElementById("homepage");
    const booksinContainer = document.getElementById("booksin");
    booksButton.addEventListener("click", function() {
        homepageContainer.style.display = "none";
        booksinContainer.style.display = "block";
    });
});
document.addEventListener("DOMContentLoaded", function(){ 
    const studentsButton = document.getElementById("students");
    const homepageContainer = document.getElementById("homepage");
    const studentsinContainer = document.getElementById("studentsin");
    studentsButton.addEventListener("click", function() {
        homepageContainer.style.display = "none";
        studentsinContainer.style.display = "block";
    });
});
document.addEventListener("DOMContentLoaded", function(){ 
    const issueButton = document.getElementById("issue/return");
    const homepageContainer = document.getElementById("homepage");
    const issueinContainer = document.getElementById("issuein");
    issueButton.addEventListener("click", function() {
        homepageContainer.style.display = "none";
        issueinContainer.style.display = "block";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const addbookButton = document.getElementById("addbook");

    addbookButton.addEventListener("click", function() {
        window.open("./addbook.html","_blank");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const updatebookButton = document.getElementById("updatebook");

    updatebookButton.addEventListener("click", function() {
        window.open("./updatebook.html","_blank");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const deletebookButton = document.getElementById("deletebook");

    deletebookButton.addEventListener("click", function() {
        window.open("./deletebook.html","_blank");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const addstudentbutton = document.getElementById("addstudent");

    addstudentbutton.addEventListener("click", function() {
        window.open("./addstudent.html","_blank");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const removestudentButton = document.getElementById("removestudent");

    removestudentButton.addEventListener("click", function() {
        window.open("./removestudent.html","_blank");
    });
});