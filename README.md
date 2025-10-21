# HNG Internship (Frontend Track) - Stages 0 & 1

This repository contains the solution for the HNG Internship (Frontend Track) tasks for Stage 0 and Stage 1. This project is a multi-page personal profile site built with pure HTML, CSS, and vanilla JavaScript, with a strong focus on semantic structure, responsiveness, accessibility, and testability.

##  Live Demo

You can view the live deployed project here:
**[https://ndefocj.github.io/ndefocj-frontend-profile-card/](https://ndefocj.github.io/ndefocj-frontend-profile-card/)**



## Table of Contents

-   [Project Overview]
-   [Features]
-   [Tech Stack]
-   [How to Run Locally]
-   [Task Requirements]


##  Project Overview

This project is a 3-page website:
1.  **Profile Page (Stage 0):** A personal profile card that displays static information, links, and a dynamic, real-time UTC clock.
2.  **Contact Me Page (Stage 1):** A functional contact form with comprehensive client-side validation.
3.  **About Me Page (Stage 1):** A reflective page detailing my goals and journey in the HNG program.

The primary goal was to build a clean, accessible, and responsive user interface while ensuring all key elements are testable by including `data-testid` attributes.


## Features

### General
* **Fully Responsive:** Looks great on mobile, tablet, and desktop devices.
* **Accessible:** Built with semantic HTML, `aria` attributes, and full keyboard navigation.
* **Testable:** All required elements have `data-testid` attributes for automated testing.
* **Multi-Page Navigation:** A consistent navigation bar allows users to move between the Profile, Contact, and About pages.

### Page-Specific
* **Profile Page (`index.html`):**
    * Displays a user avatar, name, and biography.
    * Includes a list of hobbies and dislikes.
    * Features a dynamic, real-time clock showing the current UTC time in milliseconds.
* **Contact Page (`contact.html`):**
    * A functional contact form with `name`, `email`, `subject`, and `message` fields.
    * Robust client-side validation using JavaScript.
    * Displays specific error messages for each field if validation fails.
    * Shows a clear success message after a valid submission and resets the form.
* **About Me Page (`about.html`):**
    * Contains structured sections for a personal bio, program goals, areas of low confidence, and a note to my future self.


## Tech Stack

* **HTML5 (Semantic)**
* **CSS3 (Modern CSS):**
    * Flexbox & CSS Grid
    * Media Queries
    * CSS Variables
* **Vanilla JavaScript (ES6+):**
    * DOM Manipulation
    * Event Handling
    * Client-Side Form Validation


## How to Run Locally

To run this project on your local machine:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/ndefocj/ndefocj-frontend-profile-card.git](https://github.com/ndefocj/ndefocj-frontend-profile-card.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd ndefocj-frontend-profile-card
    ```

3.  **Open the project:**
    * Simply open the `index.html` file in your web browser.
    * **OR**
    * For the best experience (to avoid any potential CORS issues), open the folder in VS Code and use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.



##  Task Requirements

For context, here were the briefs for each stage.

<details>
  <summary><strong>Stage 0 Task: Build a Testable Profile Card</strong></summary>

  - **Content:** Profile card, Name, Biography, Current time (ms), Avatar, Social links, Hobbies list, Dislikes list.
  - **Testing:** All elements must include a `data-testid` attribute.
  - **Semantics:** Use `<article>`, `<header>`, `<h2>`, `<p>`, `<figure>`, `<img>`, `<nav>`, `<ul>`, `<section>`.
  - **Behavior:** Time must be accurate (`Date.now()`). Social links must open in a new tab.
  - **Responsiveness:** Must look good on mobile, tablet, and desktop.
</details>

<details>
  <summary><strong>Stage 1 Task: Contact & About Me Pages</strong></summary>
  
  - **General:** Must be a continuation of the Stage 0 task.
  - **Contact Us Page:**
    - **Fields:** Full name, Email, Subject, Message, Submit button.
    - **Validation:** All fields required, email must be valid, message >= 10 chars.
    - **Feedback:** Error messages for each field (`data-testid="test-contact-error-<field>"`), and a success message (`data-testid="test-contact-success"`).
    - **Accessibility:** All inputs must have `<label>`s and be linked with `aria-describedby` for errors.
  - **About Me Page:**
    - **Content:** Bio, Goals, Areas of low confidence, Note to future self, Extra thoughts.
    - **Structure:** Must use `<main>`, `<section>`, and proper headings.
    - **Testing:** All sections must have their respective `data-testid` attributes.

</details>

