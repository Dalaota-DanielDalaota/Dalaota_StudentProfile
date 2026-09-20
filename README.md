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

```

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

