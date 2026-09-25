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
    document.getElementById("headerCourse").textContent =
        course + " | " + yearLevel;

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

    document.getElementById("fullName").value =
        document.getElementById("displayName").textContent;

    document.getElementById("course").value =
        document.getElementById("displayCourse").textContent;

    document.getElementById("yearLevel").value =
        document.getElementById("displayYear").textContent;

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

                alert("Profile picture updated successfully!");
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

