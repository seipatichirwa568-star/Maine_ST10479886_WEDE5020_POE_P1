# Skull Bracelets Website

**Student Number:** ST10479886  
**Project:** Skull Bracelets Website  
**Development Tool:** Visual Studio Code  
**Languages Used:** HTML5 and CSS3  
**Year:** 2026

---

## 1. Project Overview

The Skull Bracelets website is a small e-commerce style website created for an organisation that sells skull-themed bracelets and accessories.

The purpose of the website is to provide customers with information about the organisation and its products. The website allows visitors to explore different bracelet designs, view a gallery, learn more about the organisation and find contact information.

The website was developed using HTML5 and CSS3. JavaScript was not included in this first version because the main focus was on creating the basic structure, navigation and visual appearance of the website.

---

## 2. Organisation Description

Skull Bracelets is a small accessory organisation that focuses on selling unique skull-inspired bracelets.

The organisation is aimed at customers who enjoy alternative fashion, bold accessories and products that allow them to express their individual style.

The website provides customers with a simple way to view available products and learn more about the organisation.

---

## 3. Aim of the Website

The main aim of the website is to create an attractive and easy-to-use online platform where customers can:

- Learn about Skull Bracelets.
- View available bracelet products.
- Browse different bracelet designs.
- View product images in the gallery.
- Learn about the organisation.
- Contact the organisation.
- Find information about prices and services.

---

## 4. Website Objectives

The objectives of the website are to:

1. Create a professional online presence for Skull Bracelets.
2. Display different skull bracelet products.
3. Provide customers with clear product information.
4. Create an image gallery for the bracelet collection.
5. Provide contact information for customers.
6. Make the website simple and easy to navigate.
7. Use HTML to create the structure of the website.
8. Use CSS to improve the appearance and presentation of the website.

---

## 5. Website Pages

The website consists of five main pages.

### 5.1 Home Page - `index.html`

The Home page is the main landing page of the website.

It introduces visitors to Skull Bracelets and explains what the organisation offers. The page also includes reasons why customers may choose the organisation and a link to explore the bracelet collection.

---

### 5.2 Bracelets Page - `services.html`

The Bracelets page displays the main products offered by the organisation.

The page includes:

- Classic Skull Bracelet
- Black Skull Bracelet
- Beaded Skull Bracelet
- Premium Skull Bracelet

Each product includes a short description and price.

The page also contains information about additional services such as custom bracelet requests, gift packaging and bulk orders.

---

### 5.3 Gallery Page - `gallery.html`

The Gallery page allows visitors to view images of different bracelet designs.

The gallery includes:

- Classic Skull Bracelet
- Black Skull Bracelet
- Beaded Skull Bracelet
- Premium Skull Bracelet

The gallery helps customers visually understand the products available.

---

### 5.4 About Us Page - `about.html`

The About Us page provides information about the organisation.

It includes:

- Who We Are
- Our Mission
- Our Vision
- Our Values

The purpose of this page is to give visitors a better understanding of the organisation and what it aims to achieve.

---

### 5.5 Contact Page - `contact.html`

The Contact page provides customers with different ways of contacting the organisation.

The page includes:

- Email address
- Telephone number
- Location
- Business hours
- Contact form

The contact form allows a customer to enter their name, email address, preferred bracelet and message.

---

## 6. Technologies Used

### HTML5

HTML5 was used to create the structure and content of the website.

HTML elements were used for:

- Headings
- Paragraphs
- Navigation
- Lists
- Images
- Forms
- Links
- Sections
- Footer content

According to Mozilla (2025), HTML is used to structure content on websites and provides elements that describe the meaning and structure of web content.

### CSS3

CSS was used to improve the visual appearance of the website.

The CSS was placed inside each HTML document during this stage of development.

CSS was used for:

- Background colours
- Text colours
- Navigation styling
- Product cards
- Gallery layouts
- Borders
- Spacing
- Buttons
- Form styling
- Hover effects

MDN Web Docs (2025) explains that CSS is used to describe the presentation and styling of documents written in HTML.

### Visual Studio Code

Visual Studio Code was used as the main development environment for creating and editing the website files.

The HTML files were created and tested using Visual Studio Code.

---

## 7. Website Design

The website uses a dark theme to match the skull bracelet brand.

The main colours used are:

- Black
- Dark grey
- White
- Red

The red colour is mainly used for headings, borders and interactive elements. This creates a strong contrast against the dark background.

The design was kept simple so that users can easily navigate between the different pages.

---

## 8. Website Navigation

The website uses a navigation bar that appears on all five pages.

The navigation links are:

```text
Home
Bracelets
Gallery
About Us
Contact
```

Each link connects to a separate HTML page.

For example:

```html
<a href="index.html">Home</a>
<a href="services.html">Bracelets</a>
<a href="gallery.html">Gallery</a>
<a href="about.html">About Us</a>
<a href="contact.html">Contact</a>
```

This allows users to move between the different sections of the website.

---

## 9. Folder Structure

The project is organised using the following folder structure:

```text
Skull-Bracelet-Website
│
├── index.html
├── services.html
├── gallery.html
├── about.html
├── contact.html
│
└── images
    ├── classic-skull.jpg
    ├── black-skull.jpg
    ├── beaded-skull.jpg
    └── premium-skull.jpg
```

The HTML files contain the different website pages while the `images` folder contains the bracelet images used on the Gallery page.

---

## 10. Gallery Images

The Gallery page uses images stored in the `images` folder.

The images are connected to the HTML document using the `<img>` element.

Example:

```html
<img src="images/classic-skull.jpg"
     alt="Classic skull bracelet">
```

The `alt` attribute provides alternative text describing the image.

---

## 11. Contact Form

The Contact page contains a basic HTML form.

The form collects:

- Customer name
- Customer email
- Bracelet of interest
- Customer message

Example:

```html
<form>

    <label for="name">Full Name</label>

    <input type="text"
           id="name"
           name="name">

    <label for="email">Email Address</label>

    <input type="email"
           id="email"
           name="email">

</form>
```

The form is currently a front-end form only. JavaScript and a back-end system have not been added at this stage.

---

## 12. CSS Features

Several CSS features were used to make the website more visually appealing.

### Background Colours

The website uses dark colours to create a skull-themed appearance.

### Borders

Red borders are used around selected sections and cards to create visual separation.

### Hover Effects

Navigation links and buttons change appearance when the user moves the mouse over them.

Example:

```css
nav a:hover {
    color: #e00000;
}
```

### Product Cards

The bracelet products are displayed inside separate cards to make the information easier to read.

### Gallery Layout

The gallery uses CSS to position the bracelet images in a structured layout.

---

## 13. How to Run the Website

To run the website, follow these steps:

### Step 1

Download or copy the project folder onto the computer.

### Step 2

Open the project folder using Visual Studio Code.

### Step 3

Make sure the following files are inside the project folder:

```text
index.html
services.html
gallery.html
about.html
contact.html
```

### Step 4

Create an `images` folder.

Place the bracelet images inside the folder.

### Step 5

Open `index.html` in Visual Studio Code.

### Step 6

Open the website using a browser.

If the Live Server extension is installed, the website can be opened by selecting **Open with Live Server**.

### Step 7

Use the navigation menu to test each page.

---

## 14. Testing

The website should be tested to make sure that:

- The Home page opens correctly.
- The navigation links work.
- The Bracelets page displays the products.
- The Gallery displays the bracelet images.
- The About Us page displays organisation information.
- The Contact page displays contact information.
- The contact form fields can be selected and typed into.
- The CSS styling appears correctly.
- Images display correctly.
- There are no broken page links.

---

## 15. Limitations

The current version of the website has some limitations.

Firstly, JavaScript has not been included because this version focuses on the HTML and CSS components.

Secondly, the contact form does not currently send information to a database or email address.

Thirdly, the website does not currently include an online payment system.

Lastly, customers cannot currently add products to a shopping cart or complete an online purchase.

These features can be considered for future development.

---

## 16. Future Improvements

The website can be improved in the future by adding:

- JavaScript functionality.
- A shopping cart.
- Online payment functionality.
- Product search.
- Product filtering.
- Customer accounts.
- A database.
- An order management system.
- Responsive design for mobile devices.
- More bracelet products.
- Product reviews.
- Social media links.
- An automated contact form.

---

## 17. Conclusion

The Skull Bracelets website provides a basic online platform for an organisation selling skull-themed bracelets.

The website contains five pages: Home, Bracelets, Gallery, About Us and Contact. HTML5 was used to create the website structure, while CSS was used to improve the appearance and user experience.

The website demonstrates basic web development concepts such as page linking, navigation, images, forms, headings, lists and CSS styling.

Although the current website does not contain JavaScript, databases or online payment functionality, it provides a foundation that can be developed further in future versions.

---

# References

Mozilla Developer Network (MDN) (2025) *HTML: HyperText Markup Language*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML (Accessed: 14 August 2026).

Mozilla Developer Network (MDN) (2025) *CSS: Cascading Style Sheets*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS (Accessed: 14 August 2026).

Mozilla Developer Network (MDN) (2025) *HTML elements reference*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements (Accessed: 14 August 2026).

Microsoft (2026) *Visual Studio Code documentation*. Available at: https://code.visualstudio.com/docs (Accessed: 14 August 2026).

World Wide Web Consortium (W3C) (2026) *HTML Standard*. Available at: https://html.spec.whatwg.org/ (Accessed: 14 August 2026).

World Wide Web Consortium (W3C) (2026) *CSS*. Available at: https://www.w3.org/Style/CSS/ (Accessed: 14 August 2026).

IIE Rosebank College (2026) *IIE Rosebank College*. Available at: https://www.rosebankcollege.co.za/ (Accessed: 14 August 2026).

---

## 18. Student Information

**Student Number:** ST10479886

**Project Name:** Skull Bracelets Website

**Website Type:** E-commerce / Product Showcase Website

**Development Environment:** Visual Studio Code

**Languages:** HTML5 and CSS3

**JavaScript:** Not included in this stage

**Year:** 2026