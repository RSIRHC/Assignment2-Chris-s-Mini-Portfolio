/*
 Author: Christopher Ritchil 
 Student # : 300702644
 Date Modified: June 3, 2016
 Description: This is a simple portfolio page which demonstrate the basic knowledge of java script text
 */

//Java script goes here
//IIFE 

(function () {
    "use strict";

    console.log("app is running :)");

    var paragraphElements = [];


    paragraphElements[0] = document.getElementById("paragraphOne");
    paragraphElements[1] = document.getElementById("paragraphTwo");



    // Define paragraph array
    var paragraphs = [];
    paragraphs[0] = "<strong>Name: Christopher Ritchil <br>Program: Software Engineering Technology <br>Centennial College <br>Toronto,ON</strong>" +
        "<br><br>I am a beginner in the programming world and already fell in love with coding. I am learning and my future goal is to become a front end developer. I am also interested doing Android programming in future." +
        '<br><br>One of my favorite quote is:<br><blockquote>"Manners maketh man."</blockquote>';
    paragraphs[1] = "<ul>" +
        "<li><a href='https://www.flickr.com/photos/chrstprrmrk/' target='_blank'>Photography</a></li>" +
        "<li><a href='http://studentweb.cencol.ca/critchil/' target='_blank'>Semester 1 HTML webpage</a></li>" +
        "</ul> ";

    //create a reference to the sendButton
    var sendButton = document.getElementById("sendButton");
    if (sendButton) {
        sendButton.addEventListener("click", function (event) {
            console.log("Send button Clicked!!");
        })
    }

    // create a reference to the form 
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var contactNumber = document.getElementById("contactNumber");
    var yourMessage = document.getElementById("yourMessage");


    //create a reference for the form
    var contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            console.log("FORM HAS BEEN SUBMITTED");
            showFormInput();
            contactForm.reset();
        })
    }
    // This showFormInput() function ouputs the form information to the console when client press the send button
    function showFormInput() {
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        console.log("    First Name: " + firstName.value);
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        console.log("     Last Name: " + lastName.value);
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        console.log("         Email: " + email.value);
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        console.log("Contact Number: " + contactNumber.value);
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        console.log("  Your Message: " + yourMessage.value);
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    }



    // Data for my pages..
    var paragraphElementsLength = paragraphElements.length - 1;
    for (var index = paragraphElementsLength; index >= 0; index--) {

        if (paragraphElements[index]) {
            paragraphElements[index].innerHTML = paragraphs[index];
        }
    }


})();