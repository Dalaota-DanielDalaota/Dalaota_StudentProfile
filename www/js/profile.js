console.log("ACTIVITY 7 JS LOADED");
console.log("Supabase client loaded:", !!supabaseClient);

let currentYearLevel;

function formatYearLevel(year) {
    if (year === 1) return "1st Year";
    if (year === 2) return "2nd Year";
    if (year === 3) return "3rd Year";
    if (year === 4) return "4th Year";

    return year + "th Year";
}

async function loadProfileFromDatabase() {

    const { data: { user }, error: sessionError } =
        await supabaseClient.auth.getUser();

    if (sessionError || !user) {
        console.log("No authenticated user found.");
        window.location.href = "login.html";
        return;
    }

    console.log("Authenticated user:", user.id);

    const { data: profile, error: profileError } =
        await supabaseClient
            .from("profiles")
            .select("*")
            .eq("id", user.id)
            .single();

    if (profileError) {
        console.log("Profile retrieval error:", profileError.message);
        alert("Unable to load profile information.");
        return;
    }

    console.log("Profile loaded from database:", profile);
    currentYearLevel = profile.year_level;

    document.getElementById("headerName").textContent = profile.name;
    document.getElementById("headerCourse").textContent =
        profile.course + " | " + formatYearLevel(profile.year_level);

    document.getElementById("displayName").textContent = profile.name;
    document.getElementById("displayCourse").textContent = profile.course;
    document.getElementById("displayYear").textContent =
        formatYearLevel(profile.year_level);
    document.getElementById("displayAbout").textContent =
        profile.about || "";
    document.getElementById("displaySkills").textContent =
        profile.skills || "";

    if (profile.profile_picture) {
        document.getElementById("profileImage").src =
            profile.profile_picture;
    }
}

document.getElementById("profileForm").addEventListener("submit", async function(event) {
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

     const year = Number(yearLevel);

     if (!Number.isInteger(year) || year < 1 || year > 4) {
         alert("Please enter a valid year level (1-4).");
         return;
     }

    const { data: { user }, error: sessionError } =
        await supabaseClient.auth.getUser();

    if (sessionError || !user) {
        alert("Your session has expired. Please log in again.");
        window.location.href = "login.html";
        return;
    }

    const { error: updateError } =
        await supabaseClient
            .from("profiles")
            .update({
                name: fullName,
                course: course,
                year_level: year,
                about: aboutMe,
                skills: skills
            })
            .eq("id", user.id);

    if (updateError) {
        console.log("Profile update error:", updateError.message);
        alert("Unable to update profile information.");
        return;
    }

    localStorage.setItem("fullName", fullName);
    localStorage.setItem("course", course);
    localStorage.setItem("yearLevel", yearLevel);
    localStorage.setItem("aboutMe", aboutMe);
    localStorage.setItem("skills", skills);

    document.getElementById("headerName").textContent = fullName;
    document.getElementById("headerCourse").textContent =
        course + " | " + formatYearLevel(year);

    document.getElementById("displayName").textContent = fullName;
    document.getElementById("displayCourse").textContent = course;
   document.getElementById("displayYear").textContent =
       formatYearLevel(year);
    document.getElementById("displayAbout").textContent = aboutMe;
    document.getElementById("displaySkills").textContent = skills;


    alert("Profile updated successfully!");

    document.getElementById("editProfileForm").style.display = "none";
    document.getElementById("profileView").style.display = "block";
});


document.getElementById("editProfileBtn").addEventListener("click", function() {

    document.getElementById("profileView").style.display = "none";
    document.getElementById("editProfileForm").style.display = "block";

    document.getElementById("fullName").value =
        document.getElementById("displayName").textContent;

    document.getElementById("course").value =
        document.getElementById("displayCourse").textContent;

    document.getElementById("yearLevel").value =
       currentYearLevel;

    document.getElementById("aboutMe").value =
        document.getElementById("displayAbout").textContent;

    document.getElementById("skills").value =
        document.getElementById("displaySkills").textContent;
});


document.getElementById("cancelBtn").addEventListener("click", function() {

    document.getElementById("editProfileForm").style.display = "none";
    document.getElementById("profileView").style.display = "block";
});




window.addEventListener("load", function() {

    const savedProfileImage = localStorage.getItem("profileImage");

    if (savedProfileImage) {
        document.getElementById("profileImage").src = savedProfileImage;
    }

});

async function saveProfilePictureToDatabase(imageData) {

    const { data: { user }, error: sessionError } =
        await supabaseClient.auth.getUser();

    if (sessionError || !user) {
        console.log("Session error:", sessionError);
        alert("Your session has expired. Please log in again.");
        window.location.href = "login.html";
        return false;
    }

    const { error: updateError } =
        await supabaseClient
            .from("profiles")
            .update({
                profile_picture: imageData
            })
            .eq("id", user.id);

    if (updateError) {
        console.log(
            "Profile picture database error:",
            updateError.message
        );

        alert("Unable to save profile picture to the database.");
        return false;
    }

    console.log("Profile picture saved to database.");
    return true;
}


document.addEventListener("deviceready", function() {

    const changePictureButton =
        document.getElementById("changeProfilePictureBtn");

    changePictureButton.addEventListener("click", function() {

        const cameraOptions = {
            quality: 60,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.MediaType.PICTURE,
            targetWidth: 500,
            targetHeight: 500,
            correctOrientation: true,
            saveToPhotoAlbum: false
        };

        navigator.camera.getPicture(

            function(imageData) {


                document.getElementById("profileImage").src = imageData;


                localStorage.setItem("profileImage", imageData);


               saveProfilePictureToDatabase(imageData).then(function(success) {

                   if (success) {
                       alert("Profile picture updated successfully!");
            }


         });

       },

            function(error) {

                console.log("Camera error: " + error);

                if (error === "Camera cancelled.") {
                    return;
                }

                alert(
                    "Unable to access the camera. Please check your camera permissions and try again."
                );
            },

            cameraOptions
        );
    });

});
document.getElementById("logoutBtn").addEventListener("click", async function() {

    const { error } = await supabaseClient.auth.signOut();

    if (error) {
        console.log("Logout error:", error.message);
        alert("Unable to log out. Please try again.");
        return;
    }

    console.log("Logout successful.");

    window.location.href = "login.html";

});

loadProfileFromDatabase();
