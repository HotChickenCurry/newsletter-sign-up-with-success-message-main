# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

| Desktop Preview | Mobile Preview |
|-----------------|----------------|
| ![](./desktop.png) | ![](./mobile.png) |

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/newsletter-form-with-tailwindcss-and-js-live-validation-u5DldQmFbi](https://www.frontendmentor.io/solutions/newsletter-form-with-tailwindcss-and-js-live-validation-u5DldQmFbi)
- Live Site URL: [https://hotchickencurry.github.io/newsletter-sign-up-with-success-message-main/](https://hotchickencurry.github.io/newsletter-sign-up-with-success-message-main/)

## My process
Started by setting up semantic HTML and Tailwind CSS, following a mobile-first approach with responsive modifiers for larger screens. Structured the layout using Flexbox for the list and form sections, and implemented custom list bullets and spacing. Added interactivity with JavaScript by validating the email form live, handling error states dynamically, and redirecting to a separate success page while passing the email securely.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- TailwindCSS
- Javascript

### What I learned

Learned how to add custom images as list bullets in Tailwind CSS and implement JavaScript form validation with real-time feedback. Explored getting and assigning values from the URL to HTML elements, using FormData and Object.fromEntries, and cleaning up the URL after retrieving values. Also practiced preventing the default form submission to handle validation and redirection smoothly.

### Continued development

Improve from validations using regex, add animations to sucess and error states, and connect the form to a backend to store submissions. I’d also improve accessibility further and refactor the JavaScript to make validation and URL handling more reusable for other forms or components.

### Useful resources

- [Screenfly](https://screenfly.org) - For testing responsiveness

## Author

- Frontend Mentor - [@HotChickenCurry](https://www.frontendmentor.io/profile/HotChickenCurry)

## Acknowledgments

I’d like to thank Frontend Mentor for providing this challenge, which helped me practice responsive design, Tailwind CSS, and JavaScript form handling. I also appreciate the resources and community tips that guided me through implementing form validation, accessibility best practices, and dynamic UI features.