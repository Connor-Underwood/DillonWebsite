// TODO: Add logo as property to each internship 
const internships = [
    { 
        company: "JD Finish Line", 
        role: "Data Scientist Intern",
        location: "Indianapolis, IN",
    },
    { 
        company: "Purdue University", 
        role: "Software Engineer Intern",
        location: "Hawai'i"
    },
    { 
        company: "Amazon", 
        role: "Data Scientist Intern",
        location: "Austin, TX"

    },
    { 
        company: "Wabash National", 
        role: "Project Management Intern",
        location: "West Lafayette, IN"
    },
    { 
        company: "Microsoft", 
        role: "Data Scientist Intern",
        location: "Redmond, WA"
    },
    { 
        company: "Google", 
        role: "Software Engineer Intern",
        location: "Moutain View, CA"
    }
];

function buildInternships() {
    let internshipList = document.createElement("ul")
    internshipList.id = "internship-list"
    const header = document.createElement("h2")
    header.textContent = "Connor's Internships"
    const connorPage = document.getElementById("connor-page")
    connorPage.appendChild(header)
    connorPage.appendChild(internshipList)
    for (let i = 0; i < internships.length; i++) {
        let internship = internships[i]
        let internshipListElement = document.createElement("li")
        console.log("setting class name")
        internshipListElement.className = "internship-list-element"

        let internshipListElementButton = document.createElement("button")
        const companySpan = document.createElement("span");
        companySpan.textContent = internship.company;
        companySpan.style.display = "block"; // Make it sit on its own line if you want
        companySpan.style.fontWeight = "bold";

        // 2. Add the Role (Use SPAN, not P)
        // FIX 1: Added 'const'
        // FIX 2: Changed "p" to "span"
        const roleSpan = document.createElement("span"); 
        roleSpan.textContent = internship.role;
        roleSpan.style.display = "block"; 
        internshipListElementButton.appendChild(companySpan)
        internshipListElementButton.appendChild(roleSpan)
        internshipListElement.appendChild(internshipListElementButton)
        internshipList.appendChild(internshipListElement)
    }
}

function showInternships() {
    let internshipList = document.getElementById('internship-list')
    if (internshipList) {
        internshipList.classList.remove('hidden')
    } else {
        alert("Internship list is not built yet!")
    }
}