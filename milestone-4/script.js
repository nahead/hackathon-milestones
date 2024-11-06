// get references  to the display area 
var form = document.getElementById('resume-builder');
var display_resume = document.getElementById('resume-display');
//handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // generate the resume content dynamically
    var resumeHTML = "\n     <h2><b>Editable Resume</b></h2>\n     <h3>Personal Information </h3>\n     <p>Name:<span contenteditable=\"true\">".concat(name, "</span></p>\n      <p>email:<span contenteditable=\"true\">").concat(email, "</span></p>\n       <p>phone:<span contenteditable=\"true\">").concat(phone, "</span></p>\n\n       <h3> Education </h3>\n       <p  contenteditable=\"true\"> ").concat(education, "</p>\n\n         <h3> Experience </h3>\n       <p  contenteditable=\"true\"> ").concat(experience, "</p>\n\n         <h3> Skills </h3>\n       <p  contenteditable=\"true\"> ").concat(skills, "</p>\n    ");
    //display the generated resume
    if (display_resume) {
        display_resume.innerHTML = resumeHTML;
    }
    else {
        console.log('the resume display element missing please check display resume');
    }
});
