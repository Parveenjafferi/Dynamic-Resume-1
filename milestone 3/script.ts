// get regerences to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement =document.getElementById('resume-display') as HTMLDivElement;
// handle form submission
form.addEventListener('submit',(event:Event)=>{
    event.preventDefault();
    // collect input value
    const name=(document.getElementById('name')as HTMLInputElement).value
    const email=(document.getElementById('email')as HTMLInputElement).value
    const Phone=(document.getElementById('Phone')as HTMLInputElement).value
    const eduction=(document.getElementById('education')as HTMLInputElement).value
    const Experience=(document.getElementById('Experience')as HTMLInputElement).value
    const skills=(document.getElementById('skills')as HTMLInputElement).value
// generate the rusme  content dynamically
const resumeHTML=`
<h2><b>Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b>${name}<p>
<p><b>Name:</b>${email}<p>
<p><b>Name:</b>${Phone}<p>

<h3>Education<h3>
<p>${education}</p>

<h3>Experience<h3>
<p>${Experience}</p>

<h3>Skills<h3>
<p>${skills}</p>
`;
// display the generated resume
if(resumeDisplayElement){
    resumeDisplayElement.innerHTML= resumeHTML;
}else{
    console.error('The resume display element is missing.');
}


})