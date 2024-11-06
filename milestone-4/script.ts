// get references  to the display area 
const form = document.getElementById('resume-builder') as HTMLFormElement
const display_resume = document.getElementById('resume-display') as HTMLDivElement

//handle form submission
form.addEventListener('submit', (event: Event) => {
  event.preventDefault();//prevent page reload

   //collect input values
  const name = (document.getElementById('name') as HTMLInputElement).value
  const email = (document.getElementById('email') as HTMLInputElement).value
  const phone = (document.getElementById('phone') as HTMLInputElement).value
  const education = (document.getElementById('education') as HTMLInputElement).value
  const experience = (document.getElementById('experience') as HTMLInputElement).value
  const skills = (document.getElementById('skills') as HTMLInputElement).value

 // generate the resume content dynamically
  const resumeHTML = `
     <h2><b>Editable Resume</b></h2>
     <h3>Personal Information </h3>
     <p>Name:<span contenteditable="true">${name}</span></p>
      <p>email:<span contenteditable="true">${email}</span></p>
       <p>phone:<span contenteditable="true">${phone}</span></p>

       <h3> Education </h3>
       <p  contenteditable="true"> ${education}</p>

         <h3> Experience </h3>
       <p  contenteditable="true"> ${experience}</p>

         <h3> Skills </h3>
       <p  contenteditable="true"> ${skills}</p>
    `
    //display the generated resume
  if (display_resume) {
    display_resume.innerHTML = resumeHTML
  }
  else {
    console.log('the resume display element missing please check display resume');

  }

})
