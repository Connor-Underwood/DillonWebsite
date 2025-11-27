const researchExperiences = [
    {
        name: "Project oCEANIC",
        domain: "Software Engineering",
        professor: "Dr. Katie Jarriel"
    },
    {
        name: "City of Lafayette Data Automation Project",
        domain: "Data Science",
        professor: "Dr. Jason Ware"
    }
]

function buildResearchExperiences() {
    let researchExperiencesList = document.createElement("li")
    researchExperiencesList.id = "research-experiences-list"
    const header = document.createElement("h2")
    header.textContent = "Connor's Research Projects"
    const connorPage = document.getElementById("connor-page")
    connorPage.appendChild(header)
    connorPage.appendChild(researchExperienceList)
    for (let i = 0; i < researchExperiences.length; i++) {
        let researchExperience = researchExperiences[i]
        let researchExperienceListElement = document.createElement("li")
        researchExperienceListElement.className = "research-experience-list-element"

        let researchExperienceListElementButton = document.createElement("button")
        const projectNameSpan = document.createElement("span");
        projectNameSpan.textContent = researchExperience.name;
        projectNameSpan.style.display = "block"; // Make it sit on its own line if you want
        projectNameSpan.style.fontWeight = "bold";

        // 2. Add the domain (Use SPAN, not P)
        // FIX 1: Added 'const'
        // FIX 2: Changed "p" to "span"
        const domainSpan = document.createElement("span"); 
        domainSpan.textContent = researchExperience.domain;
        domainSpan.style.display = "block"; 
        researchExperienceListElementButton.appendChild(projectNameSpan)
        researchExperienceListElementButton.appendChild(domainSpan)
        researchExperienceListElement.appendChild(researchExperienceListElementButton)
        researchExperienceList.appendChild(researchExperienceListElement)
    }
}