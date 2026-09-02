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

![Desktop View](desktop.png)

### Tablet View

![Tablet View](tablet.png)

*Tested using Google Chrome responsive/device emulation.*

### Mobile View

![Mobile View](mobile.png)




### Desktop View
![Screenshot 2026-09-02 200652.png](www/img/Screenshot%202026-09-02%20200652.png)


### Tablet View
![Screenshot 2026-09-02 200638.png](www/img/Screenshot%202026-09-02%20200638.png)



### Mobile view
![Screenshot 2026-09-02 200439.png](www/img/Screenshot%202026-09-02%20200439.png)
