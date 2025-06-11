
# How to Run the Program

## Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- A modern web browser (Chrome, Firefox, Edge)

## Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/Wenkangy/Final-project.git
   ```

## Journal

For the first part of building this site, I designed the page using a mobile-first approach. I focused on making sure the layout looked good on smaller screens like phones before scaling up. Once the main page was finished and working well on a smaller scree, I planned to use media queries to adjust the layout and styling for larger screens and different resolutions.

## Tools

- Html
- CSS
- JavaScrip
- bootstrap

## Navbar

I created the navbar using Bootstrap to save time instead of building it from scratch. However, I add some CSS to for style:

- The navbar is fixed, so it follows the user while scrolling down.
- On smaller screens, the brand stands out more, making the navbar visually distinct.

- One issue I encountered while styling with CSS was the alignment of navigation elements when using the collapse feature. This causes items to shift unexpectedly, leading to extra spacing around the menu and disrupting the overall layout.

![alt text](<journal images/nav.png>)

### Intro

- To give my website a more distinctive touch, I incorporated a typing animation in the intro section. My goal was to create a dynamic greeting by cycling through a list of words, simulating a typing effect.

#### How I Built It

HTML: I set up a simple `<div>` to hold the dynamic text, with a separate `<span>` for the blinking cursor.

CSS: The .cursor has a blinking animation created with keyframes.

JavaScript

- The typeWriter() function adds characters one by one.
  - I referenced the following resources as examples while building the function:
    - <https://www.w3schools.com/howto/howto_js_typewriter.asp>
    - <https://www.geeksforgeeks.org/javascript/text-typing-animation-effect-using-html-css-and-javascript/>
  - Instead of animating a single word, I modified the logic to cycle through a list of words.
  - Take the first word from the array.
  - Split the word into individual characters.
  - Display the characters one by one using JavaScript.
  - when the words is complete it call a delete cunction to delt the current words.

- The deleteWord() function removes the current words and  switching to the next word.
  - Checks if the word still has characters left.
  - If yes, remove the last character using word.pop().
  - Update the #word span to reflect the change.
  - Repeat until the word is fully deleted.
  - Once the word is gone it moves to the next word if available.
  - If no more words, restart the cycle.
  - Increrse the index and call typeWriter() to begin typing the new word.

- Used setTimeout() to control the speed of typing and deleting.

- Problem:
  - I encountered an issue where the cursor wasn’t positioned directly next to a letter, making the typing effect look misaligned. I haven’t found a solution yet.

## courses

This section presents some of the academic courses I’ve completed or am currently taking. I wanted to give it a timeline-inspired design to show the chronological order and duration of each course.

HTML

- I wrapped the section in a `<section>` with the ID `about` for styling.
- Inside, I added a container and a heading titled Courses Taken.
- Each course is displayed inside a `.item` div and includes a date, course code and description of the class

CSS

- Each `.item` has a left border line in magenta to simulate the vertical timeline structure.
- I used `::before` and `::after` pseudo-elements to build the timeline connectors:
  - `::before`: a short horizontal magenta line
  - `::after`: a white circle with a magenta border that looks like a dot on the timeline
- Dates are styled in black with bold font weight.
- Course codes are styled in magenta and intentionally oversized to highlight them visually.
- All content is spaced and padded for clarity and consistency.

The style was based on these examples from the following resources:

- <https://www.w3schools.com/howto/howto_css_timeline.asp>
- <https://codepen.io/alvarotrigo/pen/ZEXzOWQ>

However, one thing I noticed that wasn’t covered in either resource  is the need to manually adjust the positioning of the pseudo-elements  (`::before` and `::after`) to line up properly with my custom heading . It took some trial and error to get them visually aligned with the date. Since the bar is place on the left side of the page it only requires to ajust:

```css
left: 0px;
top: 51px;
```

## Skills

For this section, I used Bootstrap's progress bars as the skeleton and added my own CSS to customize the look and layout.

Each skill includes:

- A label showing the skill name and my current proficiency
- A progress bar styled with inline `width` values to visually show my experience level

HTML

- I wrapped the entire section in a `<section>` tag with the ID `skills`, which helps with styling.
- I grouped my skills into categories like Programming Languages, Web Development, and Game Development.
- Each skill has a label and a progress bar showing the percentage.

CSS

- Section titles use large, bold fonts and custom color variables like `--olvi` and `--white`.
- Headings are center-aligned and clearly structured.
- For the background color, I used a dark gray (`var(--gray3)`).
- The fill of each progress bar is white (`rgb(214, 214, 214)`).
- All bars have rounded edges for a modern look.
- I used Flexbox to place the skill name on the left and the percentage on the right, keeping the layout clean and organized.

Resources

<https://getbootstrap.com/docs/5.3/components/progress/#bar-sizing>

## Projects

### initial Project section

![alt text](<journal images/project1.png>)

HTML

- For the initial approach for the projects section i set up a container-based layout to display my project similar to a image gallery .
- Implementing Bootstrap's grid system to orginize the projects.
- Wrapping each project inside .project-item so I can apply individual hover effects and links.
- when hover over the project two options will shoe a magnifiiong glas to  pop-up a modal allowing users to view detailed descriptions for each project with the full size image of the project  .

CSS

I made sure the design stays clean and functional while also adding interactive elements:

For the effects i use:

- transform: scale(1.1); enlarges images when hovered.
- filter: brightness(0.2); darkens images slightly for better contrast for the magnifying  and github icons to show:
- opacity: 0  keeps project details hidden until hovered.
- transition: opacity 0.3s ease-in-out; helps to smooth fade-in effect when moving the cursor away form the picture

![alt text](<journal images/modal.png>)

I've encountered some challenges with contrast in my project descriptions. Initially, the contrast ratio between the text and the background was 1:1, making it hard to read. My solution was adjusting the .project-info p styling to add a background color and increasing the size of the font.

```text
.project-info p {
  margin: 20px 0;
  width: 250px;
  height: 30px;
  font-size: 20px;
  color: var(--white);
  background-color: rgb(116, 42, 42);
  border-radius: 10px;
}
```

![alt text](<journal images/problem1.png>) ![alt text](<journal images/solution1.png>)

Resourses:

- <https://getbootstrap.com/docs/5.0/components/modal/>
- <https://fontawesome.com/icons>
- <https://getbootstrap.com/docs/4.0/layout/grid/>

### Final Project section

![alt text](<journal images/project2.png>)

For my project display, I decided to move away from my previous attempt and instead opted for a Bootstrap-powered slideshow.

Setting up the slideshow was fairly easy, though I encountered  issues with Bootstrap 5. The carousel felt laggy and unresponsive, so I switched to Bootstrap 5.3, which resolved the issue

#### Slideshow changes

- To improve visibility in situatiopn where images are to dark or bright, I added a black background and white icons.

```text
#projects .carousel-control-prev-icon ,
#projects .carousel-control-next-icon {
  background-color: var(--gray2);
  width: 50px;
  height: 50px;
}
```

To add the icons, I created a `<div class="carousel-caption d-none d-md-block">`, I keep the modal functionality, allowing users to click the magnifying glass icon to open a larger image along with the project description.

- This time, working with the icons was much more straightforward. I didn’t have to manually align icons and descriptions using CSS like the previous attempt. I added a hover effect to the icons to make them easier to spot and interact with.

resources:
<https://getbootstrap.com/docs/5.0/components/carousel/>

## Form

This section allows users to get in touch with me directly via a contact form, email, or phone number, while also featuring social media links.

- I used Bootstrap classes to structure the layout quickly and responsively, especially for aligning the form with the image and maintaining column behavior across screen sizes.

HTML

- The section starts with a main title and a subtitle inviting users to reach out via Email or Number.
- I created a  two-column layout using Bootstrap's grid where:
  - The left column contains a contact form* with:
    - Name
    - Email
    - Subject
    - Message
    - A submit button
  - The right column displays an image (Gameboy), giving it a fun retro touch and also to aligith with the general theme of the page .
- Below that, there’s a contacts section with:
  - Social media icons using Font Awesome
  - Email and phone contact information

CSS

- For the css id did some change to match the style of the page
- I set the background color of the section using a dark gray, keeping it consistent with the rest of my site.
- Titles are styled with custom colors:
  - Main titles use `--olvi` color
  - Inputs and textareas have dark backgrounds with white text
  - The submit button uses a bold, white-on-olive look with large padding and a centered layout
- I used `display: flex` to center the submit button horizontally across the full width.
- Social media icons are large, evenly spaced, and use the same olive color for visual consistency.
- Contact info items have clear, bold headers and large readable text.
