var form = document.getElementById('resume-builder');
var display_resume = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n     <h2><b>resume</b></h2>\n     <h3>Personal Information </h3>\n     <p>Name:".concat(name, "</p>\n      <p>email:").concat(email, "</p>\n       <p>phone:").concat(phone, "</p>\n       <h3> Education </h3>\n       <p> ").concat(education, "\n         <h3> Experience </h3>\n       <p> ").concat(experience, "\n         <h3> Skills </h3>\n       <p> ").concat(skills, "\n    ");
    if (display_resume) {
        display_resume.innerHTML = resumeHTML;
    }
    else {
        console.log('the resume display element missing please check display resume');
    }
});
