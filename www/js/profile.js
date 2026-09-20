document.getElementById("profileForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const course = document.getElementById("course").value.trim();
    const yearLevel = document.getElementById("yearLevel").value.trim();
    const aboutMe = document.getElementById("aboutMe").value.trim();
    const skills = document.getElementById("skills").value.trim();

    if (fullName === "" || course === "" || yearLevel === "" || aboutMe === "") {
        alert("Please complete all required fields.");
        return;
    }

    localStorage.setItem("fullName", fullName);
    localStorage.setItem("course", course);
    localStorage.setItem("yearLevel", yearLevel);
    localStorage.setItem("aboutMe", aboutMe);
    localStorage.setItem("skills", skills);

    document.getElementById("headerName").textContent = fullName;
    document.getElementById("headerCourse").textContent = course + " | " + yearLevel;

    document.getElementById("displayName").textContent = fullName;
    document.getElementById("displayCourse").textContent = course;
    document.getElementById("displayYear").textContent = yearLevel;
    document.getElementById("displayAbout").textContent = aboutMe;
    document.getElementById("displaySkills").textContent = skills;

    document.getElementById("editProfileForm").style.display = "none";
    document.getElementById("profileView").style.display = "block";
});

document.getElementById("editProfileBtn").addEventListener("click", function() {
    document.getElementById("profileView").style.display = "none";
    document.getElementById("editProfileForm").style.display = "block";

    document.getElementById("fullName").value = document.getElementById("displayName").textContent;
    document.getElementById("course").value = document.getElementById("displayCourse").textContent;
    document.getElementById("yearLevel").value = document.getElementById("displayYear").textContent;
    document.getElementById("aboutMe").value = document.getElementById("displayAbout").textContent;
    document.getElementById("skills").value = document.getElementById("displaySkills").textContent;
});

document.getElementById("cancelBtn").addEventListener("click", function() {
    document.getElementById("editProfileForm").style.display = "none";
    document.getElementById("profileView").style.display = "block";
});

window.addEventListener("load", function() {

    const defaultFullName = "John Daniel Dalaota";
    const defaultCourse = "BS Information Technology";
    const defaultYearLevel = "3rd Year";
    const defaultAboutMe = "Hello! I am John Daniel Dalaota, a 3rd year BSIT student interested in technology, programming, web development, and learning new skills.";
    const defaultSkills = "HTML, CSS, JavaScript, and basic programming.";

    const savedFullName = localStorage.getItem("fullName");
    const savedCourse = localStorage.getItem("course");
    const savedYearLevel = localStorage.getItem("yearLevel");
    const savedAboutMe = localStorage.getItem("aboutMe");
    const savedSkills = localStorage.getItem("skills");

    const fullName = savedFullName || defaultFullName;
    const course = savedCourse || defaultCourse;
    const yearLevel = savedYearLevel || defaultYearLevel;
    const aboutMe = savedAboutMe || defaultAboutMe;
    const skills = savedSkills || defaultSkills;

    document.getElementById("headerName").textContent = fullName;
    document.getElementById("headerCourse").textContent = course + " | " + yearLevel;

    document.getElementById("displayName").textContent = fullName;
    document.getElementById("displayCourse").textContent = course;
    document.getElementById("displayYear").textContent = yearLevel;
    document.getElementById("displayAbout").textContent = aboutMe;
    document.getElementById("displaySkills").textContent = skills;
});

