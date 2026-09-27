# Activity 2 - Student Profile

## Dalaota_StudentProfile



![Screenshot 2026-08-23 192803.png](www/img/Screenshot%202026-08-23%20192803.png)


---

# Activity 3 - Responsive Student Profile

## 1. Project Description

This project is an improved version of my Student Profile from Activity 2. I used HTML and CSS to improve the original design and make it responsive for Desktop, Tablet, and Mobile screen sizes.

The application contains my personal information, interests, educational background, goals, and skills. It was also continued as a Cordova project using the same GitHub repository from Activity 2.

---

## 2. Application Structure

The application is divided into different parts:

* **Header** – Contains my profile picture, name, "About Myself" subtitle, and navigation menu.
* **Navigation Menu** – Contains the About and Skills links.
* **About Section** – Contains two paragraphs about myself, my interests, educational background, and goals.
* **Skills Section** – Contains five skills with a short description for each one.
* **Footer** – Contains the copyright notice, my name, and the current year.

---

## 3. Responsive Design

I improved the Student Profile so that it can adjust to different screen sizes instead of having the same layout on every device.

I used CSS media queries to change the spacing, font sizes, navigation layout, and other elements depending on the screen width. This helps prevent horizontal scrolling and keeps the content organized on smaller screens.

For testing:

* **Desktop** – Tested using a desktop browser.
* **Tablet** – Tested using Google Chrome's responsive/device emulation to simulate a tablet screen size. I used this because my computer could not handle running an additional tablet Android emulator properly.
* **Mobile** – Tested using the Android emulator with the Cordova application.

---

## 4. UI/UX Principles Applied

### Responsive Layout

I used flexible widths and CSS media queries so the layout can adjust properly for Desktop, Tablet, and Mobile screens.

### Mobile-Friendly Spacing

I adjusted the padding, margins, and spacing between the different parts of the page so that the content does not feel too crowded, especially on mobile.

### Appropriate Typography

I used consistent fonts and different font sizes for headings and normal text. This makes the important parts easier to notice while keeping the text readable on smaller screens.

### Clear Visual Hierarchy

I made my name, section headings, and skill titles more noticeable by using different font sizes, spacing, and styling. This makes it easier to tell which information is more important.

### Usable Controls

The About and Skills links are clearly visible and have enough space around them to make them easy to click. On mobile, the navigation links are arranged vertically so they are easier to use.

### Basic Accessibility

I added alternative text to my profile picture and used headings and sections to organize the page. I also used readable text and colors with enough contrast so the content is easier to see.

### Consistent Design

I kept the same fonts, colors, spacing, navigation style, and section design throughout the application so the whole page has a consistent look.

---

## 5. Navigation

The navigation menu contains two links:

* **About** – Goes to the About section.
* **Skills** – Goes to the Skills section.

Both links use HTML anchor links (`href`) to move to their sections within the same page. JavaScript is not used for the navigation.

---

## 6. How to Run

### Requirements

* Node.js and npm
* Apache Cordova
* Android Studio
* Android SDK
* JDK

### Steps

1. Clone or download the repository.
2. Open the project folder in a terminal.
3. Run `npm install` if needed.
4. Build the Android application using:

`cordova build android`

5. Run the application using an Android emulator or Android device:

`cordova run android`

The generated APK can be found in:

`platforms/android/app/build/outputs/apk/debug/app-debug.apk`

---

## 7. Application Screenshots

### Desktop View
![Screenshot 2026-09-02 200652.png](www/img/Screenshot%202026-09-02%20200652.png)


### Tablet View
![Screenshot 2026-09-02 200638.png](www/img/Screenshot%202026-09-02%20200638.png)

*Tested using Google Chrome responsive/device emulation.*


### Mobile view
![Screenshot 2026-09-02 200439.png](www/img/Screenshot%202026-09-02%20200439.png)

*Tested using Google Chrome responsive/device emulation.*

---

# Activity 4 - Multi-Page Student Profile

## 1. Project Description

This project is an extension of my Student Profile from Activity 3. I developed it into a multi-page responsive student portfolio using HTML and CSS. The project remains an Apache Cordova application and uses the same GitHub repository from the previous activities.

The portfolio contains separate pages for my Profile, About, Skills, Projects, and Contact information. The pages use a consistent design and navigation system and are designed to work across Desktop, Tablet, and Mobile screen sizes.

---

## 2. Application Pages

### Profile

The Profile page serves as the homepage and main entry point of the portfolio. It contains my profile picture, name, introduction, and navigation menu.

### About

The About page contains information about myself, including my personal introduction, interests, educational background, and goals and aspirations.

### Skills

The Skills page presents five of my skills with a short description of each skill.

### Projects

The Projects page showcases three projects I have worked on:

* **Veterinary Clinic Management System** – A group project developed using Python, PySide, and MySQL. I worked on the backend by connecting the PySide GUI created by the frontend team to the MySQL database and handling database-related operations.
* **Responsive Student Profile** – A responsive student profile website developed using HTML, CSS, and Apache Cordova. I worked on the webpage structure, styling, and responsive layout.
* **Jumbled Rush** – A timed word-order puzzle game developed using HTML, CSS, JavaScript, and Supabase. I worked on managing the leaderboard data stored in Supabase, including viewing and deleting leaderboard records when needed.

### Contact

The Contact page provides my email address, GitHub profile, Facebook profile, and other relevant contact information.

---

## 3. Navigation

The application uses a consistent navigation menu across all five pages:

* **Profile** – Returns to the homepage.
* **About** – Opens the About page.
* **Skills** – Opens the Skills page.
* **Projects** – Opens the Projects page.
* **Contact** – Opens the Contact page.

Each page contains links to the other pages, allowing users to move between sections of the portfolio and return to the Profile page. Standard HTML links are used for navigation, and JavaScript is not required for page navigation.

---

## 4. Responsive Design

The portfolio was designed to work across different screen sizes using CSS media queries and flexible layouts.

For testing:

* **Desktop** – Tested using a desktop browser.
* **Tablet** – Tested using Google Chrome's responsive/device emulation to simulate a tablet screen size.
* **Mobile** – Tested using the Android emulator with the Apache Cordova application.

The responsive design adjusts the layout, navigation, spacing, and font sizes depending on the screen width. This helps prevent horizontal scrolling, overlapping content, and cut-off elements on smaller screens.

---

## 5. UI/UX Principles Applied

### Consistent Design

All five pages use the same colors, typography, navigation style, spacing, and overall visual design.

### Clear Visual Hierarchy

Headings, section titles, and important information use different font sizes, spacing, and styling to make the content easier to understand.

### Responsive Layout

CSS media queries and flexible widths are used to make the pages adapt to Desktop, Tablet, and Mobile screen sizes.

### Readable Typography

Font sizes, spacing, and contrast were selected to keep the content readable across different screen sizes.

### Usable Navigation

The navigation links are clearly visible and consistently placed on every page. On smaller screens, the navigation menu changes to a vertical layout to make the links easier to use.

### Basic Accessibility

The profile image includes alternative text, headings are used to organize the content, and links are clearly identifiable. Text and background colors also provide sufficient contrast for readability.

---

## 6. How to Run

### Requirements

* Node.js and npm
* Apache Cordova
* Android Studio
* Android SDK
* JDK

### Steps

1. Clone or download the repository.
2. Open the project folder in a terminal.
3. Run `npm install` if needed.
4. Build the Android application using:

`cordova build android`

5. Run the application using an Android emulator or Android device:

`cordova run android`

The generated APK can be found in:

`platforms/android/app/build/outputs/apk/debug/app-debug.apk`

---

## 7. Application Screenshots

### Profile

![Activity 4 - Profile (Cordova App).png](www/img/Activity%204%20-%20Profile%20%28Cordova%20App%29.png)

### About

![Activity 4 - About me (Cordova App).png](www/img/Activity%204%20-%20About%20me%20%28Cordova%20App%29.png)

### Skills

![Activity 4 - My Skills (Cordova App).png](www/img/Activity%204%20-%20My%20Skills%20%28Cordova%20App%29.png)

### Projects

![Activity 4 - Projects (Cordova App).png](www/img/Activity%204%20-%20Projects%20%28Cordova%20App%29.png)

### Contact

![Activity 4 - Contact (Cordova App).png](www/img/Activity%204%20-%20Contact%20%28Cordova%20App%29.png)

### Desktop View

![Activity 4 - Desktop.png](www/img/Activity%204%20-%20Desktop.png)

### Tablet View

![Activity 4 - Tablet.png](www/img/Activity%204%20-%20Tablet.png)

*The Desktop and Tablet screenshots demonstrate the responsive layout at different screen sizes. Due to limitations with running a tablet Android emulator on my computer, the Tablet view was tested using Google Chrome's responsive/device emulation instead.*



# Activity 5 - Profile Editing and Local Storage

## 1. Project Description

This project is an extension of my responsive multi-page Student Profile from Activity 4. In Activity 5, I added JavaScript functionality that allows users to edit and update profile information directly through the application.

The application remains an Apache Cordova project and continues to use the same GitHub repository and five-page structure from the previous activities. The new functionality includes an Edit Profile form, JavaScript validation, dynamic profile updates, Save and Cancel buttons, and local storage for saving profile information.

---

## 2. Application Pages

### Profile

The Profile page serves as the homepage and main entry point of the application. It displays my profile picture, name, course, year level, About Me information, and skills. It also contains the new **Edit Profile** button that allows the displayed profile information to be modified.

### About

The About page contains information about myself, including my personal introduction, interests, educational background, and goals and aspirations.

### Skills

The Skills page presents my skills and provides a short description of each skill.

### Projects

The Projects page showcases the projects I have worked on and provides information about each project.

### Contact

The Contact page provides my email address, GitHub profile, Facebook profile, and other relevant contact information.

---

## 3. Profile Editing

The Profile page includes an **Edit Profile** button. When the button is clicked, the normal profile view is replaced by an editing form.

The Edit Profile form allows the user to modify the following information:

* Full Name
* Course / Program
* Year Level
* About Me
* Skills

After entering new information, the user can select **Save** to apply the changes or **Cancel** to discard them.

---

## 4. JavaScript Functionality

JavaScript is used to control the Edit Profile form and dynamically update the profile information.

### Form Handling

JavaScript detects when the Edit Profile button, Save button, and Cancel button are clicked. It also retrieves the values entered into the form fields.

### Validation

Before saving, JavaScript checks that the required fields are not empty. The required fields are Full Name, Course / Program, Year Level, and About Me. If any required field is empty, the application displays a validation message and prevents the profile from being saved.

### Profile Updates

When valid information is submitted, JavaScript updates the displayed profile information without requiring manual changes to the HTML file.

### Save

The Save button stores the updated profile information in `localStorage` and immediately displays the new information on the Profile page.

### Cancel

The Cancel button closes the editing form and returns to the previous profile information without saving the changes.

---

## 5. Local Data Storage

The application uses the browser's `localStorage` to store the user's profile information.

The following information is stored:

* Full Name
* Course / Program
* Year Level
* About Me
* Skills

When the application starts, JavaScript checks `localStorage` for previously saved information. If saved information exists, it is retrieved and displayed automatically.

If no saved information exists, the application displays the default profile information. This allows the profile to have initial content even when the user has not made any edits.

The saved information remains available after refreshing or closing and reopening the application.

---

## 6. Responsive Design

The Activity 5 application continues to use the responsive design developed in the previous activities.

CSS media queries and flexible layouts allow the application to adjust to different screen sizes:

* **Desktop** – The profile and editing form are displayed using the larger available screen space.
* **Tablet** – Spacing, font sizes, and layout adjust to fit a medium-sized screen.
* **Mobile** – The layout changes to fit smaller screens, including a vertically arranged navigation menu and appropriately sized form elements.

This allows the Profile and Edit Profile interfaces to remain usable across Desktop, Tablet, and Mobile devices.

---

## 7. How to Run

### Requirements

* Node.js and npm
* Apache Cordova
* Android Studio
* Android SDK
* JDK

### Steps

1. Clone or download the repository.
2. Open the project folder in a terminal.
3. Run `npm install` if needed.
4. Build the Android application using:

`cordova build android`

5. Run the application using an Android emulator or Android device:

`cordova run android`

The generated APK can be found in:

`platforms/android/app/build/outputs/apk/debug/app-debug.apk`

---

## 8. Application Screenshots

### Student Profile

![Act 5 - Student Profile.png](www/img/Act%205%20-%20Student%20Profile.png)

### Edit Profile

![Act 5 - Edit Profile.png](www/img/Act%205%20-%20Edit%20Profile.png)

### Updated Profile

![Act 5 - Updated Profile.png](www/img/Act%205%20-%20Updated%20Profile.png)

### Contact

![Act 5 - Contact.png](www/img/Act%205%20-%20Contact.png)

---

# Activity 6

A Cordova-based Student Profile mobile application developed as part of the ITCC activities. The application allows users to view student information, edit their profile, manage skills, and update their profile picture using the device camera.

## Project Description

The Student Profile application is a responsive Cordova mobile application that presents student information through multiple pages. It also provides profile editing functionality using JavaScript and `localStorage`, as well as device camera integration for changing the profile picture.

The project was developed using HTML, CSS, JavaScript, Apache Cordova, Android Studio, and the Cordova Camera plugin.

## Application Pages

The application contains the following pages:

* **Profile** – Displays the student's profile information and profile picture.
* **About** – Displays information about the student.
* **Skills** – Displays the student's skills and abilities.
* **Projects** – Displays the student's projects and related information.
* **Contact** – Provides the student's contact information.

## Profile Editing and Local Storage

The Profile page includes an **Edit Profile** feature that allows the user to modify their:

* Full Name
* Course
* Year Level
* About Me
* Skills

The application uses JavaScript validation to make sure required fields are completed before saving.

When the user selects **Save**, the updated profile information is stored using browser/client-side `localStorage`. This allows the information to remain available after the application is restarted.

The **Cancel** button exits the editing form without saving new changes.

## Camera Integration

Activity 6 adds an interactive profile picture feature using the device camera.

The application uses the **`cordova-plugin-camera`** plugin to access the Android device camera.

### Camera Workflow

1. The user selects **Change Profile Picture**.
2. The Cordova Camera plugin requests camera access when necessary.
3. The device camera opens.
4. The user captures a photo.
5. The camera returns the captured image to the application.
6. The image is displayed as the new profile picture.
7. The captured image is stored in `localStorage`.
8. When the application is opened again, the saved image is loaded and displayed.

The project uses the following camera configuration:

* JPEG image format
* Image quality of 60
* Maximum target size of 500 × 500 pixels
* Correct image orientation
* Photo is not automatically saved to the device photo album

## Device Feature Integration

The application communicates with the Android device through Apache Cordova and the `cordova-plugin-camera` plugin.

JavaScript calls the Cordova camera API:

```javascript
navigator.camera.getPicture()
```

Cordova then communicates with the native Android camera functionality. After the user captures an image, the camera plugin returns the image data to the JavaScript success callback.

The returned image data is then assigned to the profile image:

```javascript
document.getElementById("profileImage").src = imageData;
```

The same image data is also saved to client-side storage:

```javascript
localStorage.setItem("profileImage", imageData);
```

## Image Handling and Persistence

The application uses the camera image returned by the Cordova Camera plugin as the new profile picture.

The captured image is stored using:

```javascript
localStorage.setItem("profileImage", imageData);
```

When the application starts, it checks whether a previously saved profile image exists:

```javascript
const savedProfileImage = localStorage.getItem("profileImage");
```

If an image is found, it is loaded into the profile picture element.

This allows the captured profile picture to remain available after the application is closed and reopened.

Taking another picture replaces the previously saved profile picture.

If the user cancels the camera operation, the existing profile picture remains unchanged.

## Error Handling

The application includes error handling for camera-related problems.

### Camera Permission

If camera permission is required, Android requests permission from the user before camera access is provided.

### Camera Cancellation

If the user cancels or exits the camera without taking a picture, the application keeps the existing profile picture and returns to the profile page without crashing.

### Camera Errors

If the camera cannot be accessed, the application displays an error message asking the user to check camera permissions and try again.

The application uses a failure callback from `navigator.camera.getPicture()` to handle camera errors.

## Responsive Design

The application uses a shared CSS stylesheet to provide a responsive interface across different screen sizes.

The pages are designed to remain usable on:

* Mobile devices
* Tablets
* Desktop screens

The same project and repository contain all application pages and shared styling.

## Project Technologies

* HTML5
* CSS3
* JavaScript
* Apache Cordova
* Android
* Android Studio
* Gradle
* `cordova-plugin-camera`
* `localStorage`
* Git and GitHub

## Dependencies

The project requires:

* Node.js
* Apache Cordova CLI
* Android Studio
* Android SDK
* Android SDK Platform Tools
* Java Development Kit (JDK)
* Gradle
* Android device or Android emulator

### Cordova Camera Plugin

The camera functionality requires:

```text
cordova-plugin-camera
```

Install the plugin with:

```cmd
cordova plugin add cordova-plugin-camera
```

To verify installed Cordova plugins:

```cmd
cordova plugin ls
```

## How to Run

### 1. Clone the Repository

Clone the project repository from GitHub.

### 2. Open the Project

Open the project folder in Android Studio or a terminal.

### 3. Install Cordova Dependencies

Run:

```cmd
cordova prepare android
```

This prepares the Android platform and synchronizes the Cordova configuration, plugins, and application files.

### 4. Connect an Android Device

Enable the following on the Android device:

* Developer Options
* USB Debugging
* Install via USB

Connect the Android device to the computer using USB.

Verify the device with:

```cmd
adb devices
```

The device should appear with the status:

```text
device
```

### 5. Build and Run

Run:

```cmd
cordova run android --device
```

Cordova will build the Android application, install it on the connected device, and launch the application.

## Screenshots

### 1. Student Profile & Change Profile Picture

Shows the main Student Profile page and Change Profile Picture Button.

![Act 6 - Change Profile.jpg](www/img/Act%206%20-%20Change%20Profile.jpg)

### 2. Camera

Shows the Android device camera opened through the application.

![Act 6 - Camera.jpg](www/img/Act%206%20-%20Camera.jpg)

### 3. Captured Image

Shows the captured image after returning from the device camera.

![Act 6 - Captured Image.jpg](www/img/Act%206%20-%20Captured%20Image.jpg)

### 4. Updated Profile Picture

Shows the newly captured image displayed as the student's profile picture.

![Act 6 - Updated Profile.jpg](www/img/Act%206%20-%20Updated%20Profile.jpg)

## Activity 5 Functionality Retained

The Activity 6 version continues to include the functionality implemented in Activity 5:

* Student Profile
* About
* Skills
* Projects
* Contact
* Edit Profile
* Save Profile
* Cancel Editing
* JavaScript validation
* Profile information persistence using `localStorage`

Activity 6 extends the existing application by adding device camera integration without removing the previous functionality.

## GitHub Workflow

Activity 6 was developed using a separate Git branch before being merged into the `main` branch.

Workflow:

```text
main
  ↓
activity-6-camera
  ↓
Activity 6 development and testing
  ↓
Pull Request
  ↓
main
```

The `activity-6-camera` branch is retained after merging.

## Testing

The following Activity 6 functions were tested on an Android device:

* Camera opens successfully
* Profile picture can be captured
* Captured image is displayed
* A new photo replaces the previous photo
* Camera cancellation keeps the existing photo
* Profile picture persists after application restart
* Existing Activity 5 profile editing functionality remains functional
* Camera permission and error handling are implemented

## Repository Structure

```text
Dalaota_StudentProfile/
│
├── www/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   └── profile.js
│   │
│   ├── img/
│   │   └── profile.jpeg
│   │
│   ├── index.html
│   ├── about.html
│   ├── skills.html
│   ├── projects.html
│   └── contact.html
│
├── config.xml
├── package.json
├── README.md
└── platforms/
```

## Author

**John Daniel Dalaota**

BSIT Student

---

# Activity 7 - Database and Authentication

## 1. Project Description

This project is an extension of my Student Profile application from the previous activities. In Activity 7, the application was improved into a database-driven application with user authentication and profile management.

The application now uses Supabase Authentication and a PostgreSQL database to authenticate users and store student profile information. The existing profile editing and camera functionality from the previous activities was also retained and integrated with the database.

---

## 2. Application Pages

The application contains the following pages:

### Profile

The Profile page displays the authenticated student's profile information, including their name, course, year level, About Me information, skills, and profile picture. It also provides the Edit Profile, Change Profile Picture, and Logout functions.

### About

The About page provides information about the student, including their introduction, interests, educational background, and goals.

### Skills

The Skills page displays the student's skills and descriptions.

### Projects

The Projects page showcases the student's projects and related information.

### Contact

The Contact page provides the student's contact information and relevant links.

### Login

The Login page allows users to authenticate using their Student ID or email address and password. Users must successfully authenticate before accessing the protected Student Profile functionality.

---

## 3. Authentication

The application uses **Supabase Authentication** to manage user login and sessions.

The login process follows:

**Login → Authentication → Student Profile**

1. The user enters their Student ID or email address and password.
2. If a Student ID is entered, the application retrieves the associated email address.
3. The credentials are sent to Supabase Authentication.
4. If authentication is successful, the user is redirected to the Student Profile.
5. If the credentials are incorrect, an error message is displayed and access is denied.

Passwords and other credentials are not included in the source code or README.

---

## 4. Student Profile Management

After authentication, the student can view their profile information retrieved from the database.

The Edit Profile feature allows the authenticated student to modify:

* Full Name
* Course / Program
* Year Level
* About Me
* Skills

The **Save** button sends the updated information to the database and displays a confirmation message.

The **Cancel** button exits the editing form without saving the changes.

The student can also use the **Change Profile Picture** function to capture a new image using the device camera.

The **Logout** button signs the user out of the application and returns them to the Login page.

---

## 5. Database Integration

The application uses **Supabase PostgreSQL** as its database.

Student profile information stored in the `profiles` table includes:

* Student ID
* Email
* Name
* Course
* Year Level
* About
* Skills
* Profile Picture / Image Data

Each profile is associated with an authenticated Supabase user through their unique user ID.

After authentication, the application retrieves the student's profile from the database instead of relying only on hard-coded profile information.

---

## 6. API / Backend

The Cordova application communicates with Supabase through its authentication and data APIs using the Supabase JavaScript client.

The basic architecture is:

**Cordova Application → Supabase API / Backend → PostgreSQL Database**

The Cordova application sends authentication and database requests through the Supabase API. Supabase then handles authentication and communication with the PostgreSQL database.

The application does not directly connect to the PostgreSQL database using database credentials.

---

## 7. CRUD Operations

The application demonstrates the four basic CRUD operations:

### Create

A student profile record can be created in the `profiles` database table.

### Read

After authentication, the student's profile information is retrieved from the database and displayed in the application.

### Update

The Edit Profile feature allows the student to modify their profile information and save the changes to the database. The profile picture can also be updated.

### Delete

A separate test profile was created for demonstrating the Delete operation and was then removed from the database.

---

## 8. Camera Integration

The camera functionality introduced in Activity 6 is retained in Activity 7.

The **Change Profile Picture** function uses the Cordova Camera Plugin to access the Android device camera.

The camera workflow is:

1. The user selects Change Profile Picture.
2. The Android camera opens.
3. The user captures a photo.
4. The captured image is displayed as the new profile picture.
5. The image data is saved to the student's profile in the database.

The captured profile picture can be retrieved again after logging out and logging back in.

---

## 9. Data Persistence

Activity 7 uses the Supabase database to persist student profile information.

When profile information is updated, the changes are saved to the database.

The saved information remains available when:

* The application is closed.
* The application is restarted.
* The user logs out.
* The user logs in again.

After logging in again, the application retrieves the student's profile from the database and displays the previously saved information.

The profile picture is also stored in the database and remains available after logout and login.

The existing `localStorage` functionality from previous activities is also retained.

---

## 10. Responsive Design

The application retains the responsive design developed in the previous activities.

The Student Profile application is designed to work across:

* **Desktop**
* **Tablet**
* **Mobile**

CSS media queries and flexible layouts are used to adjust the page layout, navigation, spacing, and text sizes for different screen widths.

---

## 11. Security

The application uses Supabase Authentication to handle user authentication and passwords.

Security measures include:

* Passwords are not stored as plain text in the application database.
* Database passwords and credentials are not included in the source code.
* Secret or service-role keys are not included in the public repository.
* The frontend uses a Supabase publishable key.
* Authentication is handled through Supabase.
* Row Level Security (RLS) is enabled on the `profiles` table.
* Database policies restrict profile operations to the authenticated user's own profile.
* Authentication is checked before protected profile information is retrieved or modified.

No actual passwords or sensitive credentials are included in this README.

---

## 12. How to Run

### Requirements

* Node.js and npm
* Apache Cordova
* Android Studio
* Android SDK
* JDK
* Android device or emulator
* Internet connection

### Steps

1. Clone or download the repository.
2. Open the project folder in a terminal.
3. Run `npm install` if required.
4. Make sure the Android SDK and JDK are configured.
5. Connect an Android device with USB debugging enabled or start an Android emulator.
6. Prepare the Android platform if needed:

```cmd
cordova prepare android
```

7. Build and run the application:

```cmd
cordova run android
```

The application opens on the Login page.

The Supabase project URL and publishable key are configured in the application's frontend configuration file. No secret or service-role key is included in the public repository.

---

## 13. Test Accounts

A separate demonstration account was created for testing the application's authentication and profile functionality.

**Student ID:** `DEMO-001`
**Email:** `demo.student@gmail.com`
**Password:** `hello123`

The account password is intentionally not included in the README or source code.

---

## 14. Application Screenshots

### Login Page

![Act 7 - Login & Logout.jpg](www/img/Act%207%20-%20Login%20%26%20Logout.jpg)

### Successful Login

![Act 7 - Login Succesful.jpg](www/img/Act%207%20-%20Login%20Succesful.jpg)

### Student Profile

![Act 7 - Student Profile.jpg](www/img/Act%207%20-%20Student%20Profile.jpg)

### Edit Profile

![Act 7 - Edit profile.jpg](www/img/Act%207%20-%20Edit%20profile.jpg)

### Updated Profile

![Act 7 - Updated Profile.jpg](www/img/Act%207%20-%20Updated%20Profile.jpg)

### Camera

![Act 7 - Camera.jpg](www/img/Act%207%20-%20Camera.jpg)

### Logout

![Act 7 - Login & Logout.jpg](www/img/Act%207%20-%20Login%20%26%20Logout.jpg)

### Database-Related Functionality

![Act 7 - Database.png](www/img/Act%207%20-%20Database.png)

---

## Activity 7 Technologies

* HTML5
* CSS3
* JavaScript
* Apache Cordova
* Android
* Supabase Authentication
* Supabase PostgreSQL
* Supabase Data API
* Cordova Camera Plugin
* localStorage
* Git and GitHub


