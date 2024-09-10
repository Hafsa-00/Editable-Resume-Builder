document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault();

    // Type assertion
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;

    if(nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Create resume output
        const resumeOutput = `
        <fieldset>
            <legend>Personal Information</legend>
            <p><strong>Name:</strong> <span id= "edit-name" class= "editable">${name}</span></p>
            <p><strong>Email:</strong> <span id= "edit-email" class= "editable">${email}</span></p>
            <p><strong>Phone:</strong> <span id= "edit-phone" class= "editable">${phone}</span></p>
        </fieldset>
        
        <fieldset>
            <legend>Education</legend>
            <p><strong>Education:</strong> <span id= "edit-education" class= "editable">${education}</span></p>
        </fieldset>
        
        <fieldset>
            <legend>Experience</legend>
            <p><strong>Experience:</strong> <span id= "edit-experience" class= "editable">${experience }</span></p>
        </fieldset>
        
        <fieldset>
            <legend>Skills</legend>
            <p><strong>Skills:</strong> <span id= "edit-skills" class= "editable">${skills}</span></p>
        </fieldset>
        `;
        
        const resumeOutputElement = document.getElementById('resumeOutput');
        if(resumeOutputElement){
            resumeOutputElement.innerHTML = resumeOutput;
        makeEditable();
        }
    } else {
        console.error(`One or more input elements are missing`);
    }
});
function makeEditable() {
    const editableElements = document.querySelectorAll('.editable');
    
    editableElements.forEach(element => {
        element.addEventListener('click', function() {
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";

            // Replace content
            if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                const input = document.createElement('input');
                input.type = 'text';
                input.value = currentValue;
                input.classList.add('editing-input');


                input.addEventListener('blur',function(){
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline'
                    input.remove()
                })

                currentElement.style.display = 'none';
                currentElement.parentNode?.insertBefore(input, currentElement);
                input.focus();
            }
        });
    });
}
