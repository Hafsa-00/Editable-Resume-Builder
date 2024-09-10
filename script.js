var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Create resume output
        var resumeOutput = "\n        <fieldset>\n            <legend>Personal Information</legend>\n            <p><strong>Name:</strong> <span id= \"edit-name\" class= \"editable\">".concat(name_1, "</span></p>\n            <p><strong>Email:</strong> <span id= \"edit-email\" class= \"editable\">").concat(email, "</span></p>\n            <p><strong>Phone:</strong> <span id= \"edit-phone\" class= \"editable\">").concat(phone, "</span></p>\n        </fieldset>\n        \n        <fieldset>\n            <legend>Education</legend>\n            <p><strong>Education:</strong> <span id= \"edit-education\" class= \"editable\">").concat(education, "</span></p>\n        </fieldset>\n        \n        <fieldset>\n            <legend>Experience</legend>\n            <p><strong>Experience:</strong> <span id= \"edit-experience\" class= \"editable\">").concat(experience, "</span></p>\n        </fieldset>\n        \n        <fieldset>\n            <legend>Skills</legend>\n            <p><strong>Skills:</strong> <span id= \"edit-skills\" class= \"editable\">").concat(skills, "</span></p>\n        </fieldset>\n        ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error("One or more input elements are missing");
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            // Replace content
            if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
