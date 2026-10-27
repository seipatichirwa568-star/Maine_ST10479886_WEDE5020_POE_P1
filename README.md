# Skull Bracelets | WEDE5020 Part 3 Portfolio of Evidence

**Student:** Netefatso Maine  
**Student Number:** ST10479886  
**Institution:** Rosebank College  
**Module:** Web Development (Introduction) – WEDE5020  
**Project:** Skull Bracelets Website  
**Year:** 2026  
**Development Tool:** Visual Studio Code  
**GitHub Repository:** https://github.com/seipatichirwa568-star/Maine_ST10479886_WEDE5020_POE_P1  
**Branch:** master  
**Published Website:** [https://bracelet-st10479886.netlify.app]

---

## 1. Project Overview

Skull Bracelets is a website project for a small accessories business concept that focuses on skull-inspired bracelets.

The website allows visitors to learn about the business, view different bracelet designs, compare listed prices and enquire about products.

In Part 1, I focused on the website structure using HTML. In Part 2, I added external CSS to improve the appearance and responsiveness.

For Part 3, I focused on adding JavaScript functionality, improving SEO and making the Contact and Enquiry forms interactive.

The original bracelet collection contains:

| Product | Listed Price |
|---|---:|
| Classic Skull Bracelet | R120 |
| Black Skull Bracelet | R150 |
| Beaded Skull Bracelet | R140 |
| Premium Skull Bracelet | R200 |

The prices are based on the original project. Product availability and final costs need to be confirmed.

## 2. Website Objectives

The objectives of my website are to:

- Provide information about Skull Bracelets.
- Display bracelet products and their prices.
- Allow customers to search and sort products.
- Display larger product photographs through a lightbox.
- Let customers enquire about products and quantities.
- Provide a separate form for general contact messages.
- Make the website responsive on desktop and mobile devices.
- Improve the website's SEO and accessibility.

## 3. Website Pages

The updated website contains six main pages.

| Page | Description |
|---|---|
| `index.html` | Introduces the business and featured products. |
| `services.html` | Displays the bracelet collection with JavaScript search, filtering and sorting. |
| `gallery.html` | Displays bracelet photographs using an interactive lightbox. |
| `about.html` | Explains the organisation's mission, vision and values, and includes an FAQ and map. |
| `enquiry.html` | Allows customers to enquire about products, quantities and estimated costs. |
| `contact.html` | Allows customers to send general messages using a validated form. |

## 4. Part 2 Results and Lecturer Feedback

My Part 2 assessment result was **75/100**.

The feedback showed that the website had a working external stylesheet, but several areas needed improvement, including responsive navigation, documentation and referencing.

### 4.1 External CSS

**Mark: 10/10**

The lecturer confirmed that the external stylesheet was correctly implemented across the website.

I retained the external stylesheet in Part 3 to keep the design consistent.

### 4.2 Default CSS Styling

**Mark: 4/5**

The feedback indicated that the basic styles were present but could be improved.

For Part 3, I organised the shared styles for buttons, sections, product cards and forms to improve consistency.

### 4.3 Typography

**Mark: 4/5**

The lecturer indicated that text styles were present but had some inconsistencies.

I improved the heading sizes, paragraph spacing and text hierarchy. I also used flexible heading sizes to improve readability on smaller screens.

### 4.4 Layout Structure

**Mark: 4/5**

The lecturer indicated that some elements needed better alignment and spacing.

I improved the layout by using CSS Grid and Flexbox. I also applied consistent padding, margins and content widths throughout the website.

### 4.5 Decoration and Colour

**Mark: 4/5**

The lecturer indicated that the colours and decorative styles were present but could be more consistent.

I maintained the black, grey and red theme while improving the styling of cards, borders and interactive elements.

### 4.6 CSS Pseudo-Classes

**Mark: 7/10**

The lecturer indicated that the pseudo-classes worked but could be improved.

I added clearer hover and focus effects to buttons, links and navigation elements to give visitors better visual feedback.

### 4.7 Responsive Media Queries

**Mark: 7/10**

The lecturer indicated that responsive breakpoints were present but needed improvement.

I improved the mobile and tablet media queries to make the website adapt more consistently to different screen sizes.

### 4.8 Responsive Layout and Typography

**Marks: 4/5 each**

The lecturer identified minor issues with layout and typography on smaller screens.

I improved the responsive grid layouts, spacing and heading sizes.

### 4.9 Mobile Navigation

**Mark: 2/5**

This was one of the main areas requiring improvement.

The lecturer indicated that the navigation menu did not adapt correctly on mobile devices.

To address this in Part 3, I introduced a mobile navigation button controlled by JavaScript. The menu opens and closes when the button is clicked.

### 4.10 Responsive Images

**Mark: 4/5**

The lecturer indicated that the images adapted mostly correctly but still required improvement.

I used relative image paths, responsive sizing and descriptive alternative text. I also improved the gallery layout so that images can adapt to smaller screens.

### 4.11 GitHub Commits

**Mark: 4/5**

The lecturer indicated that commits were present but lacked detail.

For Part 3, I am using descriptive commit messages to explain the purpose of changes. The GitHub commit history provides the record of when those changes were actually made.

### 4.12 README Documentation

**Mark: 4/5**

The lecturer indicated that the README was present but could be improved.

I expanded the README to include the new JavaScript functionality, the feedback corrections, testing instructions, SEO improvements and a detailed changelog.

### 4.13 References

**Mark: 2/5**

The lecturer indicated that the references were incomplete or incorrectly formatted.

I improved the reference list by using a consistent author-date format and adding in-text citations for the main technologies and resources.

## 5. Technologies Used

### HTML5

HTML5 was used to structure the website using elements such as headings, navigation menus, sections, forms and footers (MDN Web Docs, s.a.-a).

### CSS3

CSS was used to improve the appearance of the website, including colours, spacing, layout and responsive design (MDN Web Docs, s.a.-b).

### JavaScript

JavaScript was used to add functionality such as interactive navigation, product searching, gallery lightboxes, estimated costs and form validation (MDN Web Docs, s.a.-c).

### Leaflet and OpenStreetMap

Leaflet and OpenStreetMap were used to demonstrate an interactive map centred on Johannesburg. This is an illustrative map and does not represent a confirmed Skull Bracelets shop address (Leaflet, s.a.; OpenStreetMap contributors, s.a.).

### GitHub

GitHub was used to store the project files and maintain a development history.

### Netlify

Netlify is used to publish the website and can receive messages through its Forms feature (Netlify, s.a.).

## 6. JavaScript Functionality

### 6.1 Mobile Navigation

A mobile menu button was added to allow visitors to open and close the navigation on smaller screens.

The JavaScript uses `addEventListener()` and changes the menu's visibility when the visitor clicks the button.

### 6.2 Dynamic Product Listings

The bracelet products are stored in a JavaScript array.

The script creates product cards dynamically and displays their names, prices, descriptions and photographs.

### 6.3 Search and Sorting

Visitors can search for bracelets, filter products by category and sort them according to name or price.

This was implemented using JavaScript functions, arrays and DOM manipulation.

### 6.4 Gallery Lightbox

The Gallery page uses JavaScript to enlarge product photographs when clicked.

The lightbox allows visitors to see the products more clearly and close the enlarged image when finished.

### 6.5 Interactive Map

The About page contains an interactive Leaflet map that allows visitors to zoom and explore an illustrative Johannesburg area.

### 6.6 Product Enquiry Cost

The Enquiry page allows a visitor to choose a bracelet and quantity.

JavaScript calculates the estimated product total.

For example, two Black Skull Bracelets at R150 each produce an estimated cost of R300.

The final cost and availability still need confirmation.

## 7. JavaScript Form Validation

For the Contact and Enquiry forms, I applied validation techniques covered in the WEDE5020 JavaScript Form Validation lecture material (The IIE, 2026).

These include:

- `addEventListener()` to handle user actions.
- `.value.trim()` to read and clean input.
- `if` and `else` statements to check conditions.
- `checkValidity()` to check HTML validation rules.
- `isValid` to record whether the form passes validation.
- `showError()` to display errors.
- `clearError()` to remove errors after corrections.
- `event.preventDefault()` to prevent unwanted submissions.

The forms check required fields, email addresses and other input rules before allowing submission.

Error messages appear underneath invalid fields so that visitors can correct their information.

The forms also use AJAX through `fetch()`, allowing valid information to be submitted without reloading the page (MDN Web Docs, s.a.-d).

Client-side validation improves usability, but it does not replace server-side validation.

## 8. Search Engine Optimisation

SEO was improved using:

- Unique page titles.
- Relevant meta descriptions.
- Descriptive headings.
- Relevant keywords.
- Internal navigation links.
- Descriptive image filenames and alt text.
- Mobile-responsive layouts.
- `robots.txt`.
- `sitemap.xml`.

These features help search engines discover and understand the website content (Google Search Central, s.a.).

SEO does not guarantee a particular Google ranking.

## 9. Changelog

This section records the Part 3 improvements and explains why they were made.

| Development period | File or feature | Changes and reasons |
|---|---|---|
| October 2026 | CSS and layout | Improved spacing, typography, colours and responsive layouts following Part 2 feedback. |
| October 2026 | Mobile navigation | Added JavaScript-controlled navigation to address mobile menu problems. |
| October 2026 | `services.html` and `script.js` | Added dynamic bracelet cards, searching, filtering and sorting. |
| October 2026 | Gallery | Added the interactive lightbox and improved image paths. |
| October 2026 | About page | Added an FAQ accordion and interactive map. |
| October 2026 | Enquiry form | Added product selection, quantity controls and estimated cost calculation. |
| October 2026 | Contact form | Added a separate general-message form and JavaScript validation. |
| October 2026 | SEO files | Added `robots.txt` and `sitemap.xml`. |
| 27 October 2026 | README | Expanded the lecturer feedback corrections, changelog, references and testing documentation. |

These are development summaries. The actual dates and history of individual commits should be checked in GitHub.

## 10. Project File Structure

```text
Skull_Bracelets/
├── index.html
├── about.html
├── services.html
├── gallery.html
├── enquiry.html
├── contact.html
├── CSS/
│   └── style.css
├── JS/
│   └── script.js
├── images/
│   ├── classic-skull-bracelet.jpg
│   ├── black-skull-bracelet.jpg
│   ├── beaded-skull-bracelet.jpg
│   └── premium-skull-bracelet.jpg
├── robots.txt
├── sitemap.xml
├── _headers
└── README.md
```

File and folder names must match the paths used in the HTML.

## 11. Testing Checklist

The following features must be tested on the final published website:

- [ ] All six webpages open.
- [ ] Navigation links work.
- [ ] The mobile menu opens and closes.
- [ ] All product photographs display.
- [ ] Product search and sorting work.
- [ ] Gallery images enlarge and close.
- [ ] The interactive map loads.
- [ ] Enquiry estimates calculate correctly.
- [ ] Invalid form inputs display error messages.
- [ ] Valid Contact and Enquiry forms submit successfully.
- [ ] Both forms appear under Netlify Verified submissions.
- [ ] `robots.txt` and `sitemap.xml` contain the correct live website address.
- [ ] The business owner has approved the contact details and image usage.
- [ ] GitHub and Netlify links are included in the final submission.

## 12. Deployment

The website is intended to be hosted on Netlify and maintained through its GitHub repository.

**GitHub:** https://github.com/seipatichirwa568-star/Maine_ST10479886_WEDE5020_POE_P1

**Netlify:** [https://bracelet-st10479886.netlify.app]

The lecturer can access the source files through the `master` branch if that is the final submission branch.

## 13. Limitations and Future Improvements

The current website does not process online payments or maintain a live stock database.

Bracelet prices are taken from the original project and require confirmation.

The interactive map does not represent a verified physical store.

Future improvements could include a real stock management system, updated product photography and online ordering, subject to the business owner's requirements.

## 14. Conclusion

Part 3 expands the original Skull Bracelets website by improving its appearance and adding interactive functionality.

I focused on addressing the Part 2 lecturer feedback, particularly mobile navigation, responsive layouts, documentation and references.

The project now includes JavaScript-based product searching, a gallery lightbox, an interactive map, cost estimates and validated forms.

The remaining requirement is to confirm that the features work on the published website and that the final GitHub and Netlify links are correct.

## 15. References

Google Search Central. s.a. *SEO Starter Guide*. [Online]. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide [Accessed 27 October 2026].

Leaflet. s.a. *Leaflet API Reference*. [Online]. Available at: https://leafletjs.com/reference.html [Accessed 27 October 2026].

MDN Web Docs. s.a.-a. *HTML: HyperText Markup Language*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML [Accessed 27 October 2026].

MDN Web Docs. s.a.-b. *CSS: Cascading Style Sheets*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS [Accessed 27 October 2026].

MDN Web Docs. s.a.-c. *JavaScript*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript [Accessed 27 October 2026].

MDN Web Docs. s.a.-d. *Using the Fetch API*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch [Accessed 27 October 2026].

MDN Web Docs. s.a.-e. *Client-side form validation*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation [Accessed 27 October 2026].

Netlify. s.a. *Forms setup*. [Online]. Available at: https://docs.netlify.com/manage/forms/setup/ [Accessed 27 October 2026].

OpenStreetMap contributors. s.a. *OpenStreetMap*. [Online]. Available at: https://www.openstreetmap.org/ [Accessed 27 October 2026].

The Independent Institute of Education (The IIE). 2026. *WEDE5020 JavaScript Form Validation*. [Lecture slides].

The Independent Institute of Education (The IIE). 2026. *Formative 2 Part 2 Marking Rubric: WEDE5020, Netefatso Maine*. [Unpublished assessment feedback].
