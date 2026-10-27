/* Skull Bracelets - WEDE5020 Part 3
   DOM manipulation, arrays, event listeners, functions,
   validation and AJAX.
*/
"use strict";

document.addEventListener("DOMContentLoaded", function () {

  // 1. Mobile menu
  const menuButton = document.getElementById("menu-toggle");
  const navigation = document.getElementById("site-nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
      const opened = navigation.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(opened));
      menuButton.textContent = opened ? "Close menu ✕" : "Menu ☰";
    });
  }

  // 2. Scroll animation
  if (
    "IntersectionObserver" in window &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    const revealItems = document.querySelectorAll(".reveal");

    if (revealItems.length) {
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 });

      document.body.classList.add("js-ready");

      revealItems.forEach(function (item) {
        observer.observe(item);
      });
    }
  }

  // 3. Product data from the original website
  
const products = [
    {
        name: "Classic Skull Bracelet",
        price: 120,
        category: "everyday",
        image: "images/classic skull bracelet.jpg",
        description: "Simple skull-inspired bracelet for everyday style."
    },
    {
        name: "Black Skull Bracelet",
        price: 150,
        category: "statement",
        image: "images/black skull bracelet.jpg",
        description: "Dark bracelet with a bold alternative-fashion look."
    },
    {
        name: "Beaded Skull Bracelet",
        price: 140,
        category: "beaded",
        image: "images/imbeaded skull bracelet.jpg",
        description: "Beaded design with a detailed skull centrepiece."
    },
    {
        name: "Premium Skull Bracelet",
        price: 200,
        category: "premium",
        image: "images/Premium skull bracelet.jpg",
        description: "Detailed skull bracelet with a premium appearance."
    }
];
  function money(amount) {
    return "R" + amount.toFixed(2);
  }

  // 4. Product search, filtering and sorting
  const productGrid = document.getElementById("product-grid");
  const productSearch = document.getElementById("product-search");
  const productCategory = document.getElementById("product-category");
  const productSort = document.getElementById("product-sort");
  const productCount = document.getElementById("product-count");

  function renderProducts() {
    if (!productGrid) return;

    const searchText = productSearch
      ? productSearch.value.trim().toLowerCase()
      : "";

    const category = productCategory
      ? productCategory.value
      : "all";

    const sortOrder = productSort
      ? productSort.value
      : "default";

    const matches = products.filter(function (product) {
      const searchMatch = (
        product.name + " " + product.description
      ).toLowerCase().includes(searchText);

      return searchMatch &&
        (category === "all" || product.category === category);
    });

    if (sortOrder === "price-low") {
      matches.sort(function (a, b) {
        return a.price - b.price;
      });
    }

    if (sortOrder === "price-high") {
      matches.sort(function (a, b) {
        return b.price - a.price;
      });
    }

    if (sortOrder === "name") {
      matches.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
    }

    productGrid.replaceChildren();

    matches.forEach(function (product) {
      const card = document.createElement("article");
      card.className = "card product-card reveal visible";

      const picture = document.createElement("img");
      picture.src = product.image;
      picture.alt = product.name + " product photograph";
      picture.loading = "lazy";
      picture.width = 400;
      picture.height = 300;

      const heading = document.createElement("h3");
      heading.textContent = product.name;

      const description = document.createElement("p");
      description.textContent = product.description;

      const price = document.createElement("p");
      price.className = "price";
      price.textContent = money(product.price);

      const link = document.createElement("a");
      link.className = "btn";
      link.href = "enquiry.html?product=" +
        encodeURIComponent(product.name);
      link.textContent = "Enquire about this";

      card.append(picture, heading, description, price, link);
      productGrid.appendChild(card);
    });

    if (!matches.length) {
      const empty = document.createElement("p");
      empty.textContent =
        "No bracelets found. Try a different search or category.";
      productGrid.appendChild(empty);
    }

    if (productCount) {
      productCount.textContent =
        matches.length + " bracelet(s) shown";
    }
  }

  if (productGrid) {
    if (productSearch) {
      productSearch.addEventListener("input", renderProducts);
    }

    if (productCategory) {
      productCategory.addEventListener("change", renderProducts);
    }

    if (productSort) {
      productSort.addEventListener("change", renderProducts);
    }

    renderProducts();
  }

  // 5. Gallery lightbox
  const lightbox = document.getElementById("gallery-lightbox");

  if (lightbox && typeof lightbox.showModal === "function") {
    const largeImage = document.getElementById("lightbox-image");
    const caption = document.getElementById("lightbox-caption");

    document.querySelectorAll(".gallery-item").forEach(
      function (button) {
        button.addEventListener("click", function () {
          largeImage.src = button.querySelector("img").src;
          largeImage.alt = button.dataset.caption;
          caption.textContent = button.dataset.caption;
          lightbox.showModal();
        });
      }
    );

    document.getElementById("close-lightbox")
      .addEventListener("click", function () {
        lightbox.close();
      });

    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) {
        lightbox.close();
      }
    });
  }

  // 6. Interactive OpenStreetMap
  const mapElement = document.getElementById("location-map");

  if (mapElement) {
    if (typeof L !== "undefined") {
      const map = L.map("location-map").setView(
        [-26.2041, 28.0473], 11
      );

      L.tileLayer(
        "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          maxZoom: 18,
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }
      ).addTo(map);

      L.circle([-26.2041, 28.0473], {
        radius: 3800,
        color: "#ed454b",
        fillColor: "#ed454b",
        fillOpacity: 0.13
      })
        .addTo(map)
        .bindPopup(
          "Johannesburg city-centre area (illustration only). " +
          "No verified Skull Bracelets shop address supplied."
        );
    } else {
      mapElement.classList.add("map-fallback");
      mapElement.textContent =
        "Map not available. See the OpenStreetMap link below.";
    }
  }

  // 7. Enquiry cost calculation
  const enquiryProduct = document.getElementById("enquiry-product");
  const enquiryQuantity = document.getElementById("enquiry-quantity");
  const estimateOutput = document.getElementById("enquiry-estimate");

  function updateEstimate() {
    if (!enquiryProduct || !enquiryQuantity || !estimateOutput) {
      return;
    }

    const selected = products.find(function (item) {
      return item.name === enquiryProduct.value;
    });

    const quantity = Number(enquiryQuantity.value);

    if (
      selected &&
      Number.isInteger(quantity) &&
      quantity >= 1 &&
      quantity <= 20
    ) {
      estimateOutput.textContent =
        "Estimated product cost: " +
        money(selected.price * quantity) +
        ". Stock, delivery and final price need confirmation.";
    } else {
      estimateOutput.textContent =
        "Choose a bracelet and a quantity from 1 to 20 " +
        "to see an estimated price.";
    }
  }

  if (enquiryProduct) {
    const incoming = new URLSearchParams(
      window.location.search
    ).get("product");

    if (products.some(function (item) {
      return item.name === incoming;
    })) {
      enquiryProduct.value = incoming;
    }

    enquiryProduct.addEventListener("change", updateEstimate);
    enquiryQuantity.addEventListener("input", updateEstimate);
    updateEstimate();
  }

  // 8. Validation functions from lecture concepts

  function showError(form, field, message) {
    const display = form.querySelector(
      '[data-error-for="' + field.id + '"]'
    );

    if (display) {
      display.textContent = message;
    }

    field.setAttribute("aria-invalid", "true");

    if (display) {
      field.setAttribute("aria-describedby", display.id);
    }
  }

  function clearError(form, field) {
    const display = form.querySelector(
      '[data-error-for="' + field.id + '"]'
    );

    if (display) {
      display.textContent = "";
    }

    field.removeAttribute("aria-invalid");
    field.removeAttribute("aria-describedby");
  }

  function checkField(form, field) {
    const value = field.type === "checkbox"
      ? ""
      : field.value.trim();

    let message = "";

    if (field.type === "checkbox") {
      if (field.required && !field.checked) {
        message = "Please tick the box to continue.";
      }
    } else if (field.required && value === "") {
      message = "This field is required.";
    } else if (value && field.validity.typeMismatch) {
      message = "Please enter a valid email address.";
    } else if (value && field.validity.patternMismatch) {
      message = "Please check the requested format.";
    } else if (value && field.validity.tooShort) {
      message =
        "Please enter at least " +
        field.minLength +
        " characters.";
    } else if (value && field.validity.tooLong) {
      message = "This answer is too long.";
    } else if (value && field.validity.rangeUnderflow) {
      message = "The quantity is below the minimum.";
    } else if (value && field.validity.rangeOverflow) {
      message = "The quantity is above the maximum.";
    } else if (value && !field.checkValidity()) {
      message = "Please check the information entered.";
    }

    if (message) {
      showError(form, field, message);
      return false;
    }

    clearError(form, field);
    return true;
  }

  function validateForm(form) {
    let isValid = true;

    const fields = form.querySelectorAll(
      "input:not([type=hidden]), select, textarea"
    );

    fields.forEach(function (field) {
      if (!checkField(form, field)) {
        isValid = false;
      }
    });

    return isValid;
  }

  function report(form, message, isError) {
    const status = form.querySelector(".form-status");

    if (status) {
      status.textContent = message;
      status.className =
        "form-status " + (isError ? "error" : "success");
    }
  }

  // 9. Contact and enquiry AJAX submissions
  document.querySelectorAll(".netlify-form").forEach(
    function (form) {
      const fields = form.querySelectorAll(
        "input:not([type=hidden]), select, textarea"
      );

      fields.forEach(function (field) {
        field.addEventListener("blur", function () {
          field.dataset.touched = "yes";
          checkField(form, field);
        });

        field.addEventListener("input", function () {
          if (field.dataset.touched === "yes") {
            checkField(form, field);
          }
        });

        field.addEventListener("change", function () {
          field.dataset.touched = "yes";
          checkField(form, field);
        });
      });

      form.addEventListener("submit", async function (event) {
        event.preventDefault();

        if (!validateForm(form)) {
          report(
            form,
            "Please correct the highlighted fields.",
            true
          );

          const firstError = form.querySelector(
            '[aria-invalid="true"]'
          );

          if (firstError) {
            firstError.focus();
          }

          return;
        }

        const localTesting =
          location.protocol === "file:" ||
          ["localhost", "127.0.0.1"].includes(
            location.hostname
          ) ||
          location.hostname.endsWith(".github.io");

        if (localTesting) {
          report(
            form,
            "Your information is valid. Submit on the " +
            "published Netlify site to send it.",
            false
          );
          return;
        }

        const sendButton = form.querySelector(
          'button[type="submit"]'
        );

        if (sendButton) {
          sendButton.disabled = true;
        }

        report(form, "Submitting your message...", false);

        try {
          const body = new URLSearchParams(
            new FormData(form)
          );

          const response = await fetch("/", {
            method: "POST",
            headers: {
              "Content-Type":
                "application/x-www-form-urlencoded"
            },
            body: body.toString()
          });

          if (!response.ok) {
            throw new Error(
              "Form submission failed: " + response.status
            );
          }

          let feedback =
            "Thank you. Your message was submitted. " +
            "Please wait for a response.";

          if (form.id === "enquiry-form") {
            feedback =
              "Thank you. Your bracelet enquiry was submitted. " +
              "Any estimated cost is subject to confirmation.";
          }

          report(form, feedback, false);
          form.reset();

          fields.forEach(function (field) {
            clearError(form, field);
            delete field.dataset.touched;
          });

          updateEstimate();

        } catch (error) {
          console.error(error);
          report(
            form,
            "The message could not be submitted. Please try again.",
            true
          );
        } finally {
          if (sendButton) {
            sendButton.disabled = false;
          }
        }
      });
    }
  );

  // 10. Contact email feature
  // The business owner must supply a real email address.
  const BUSINESS_EMAIL = "";

  const emailButton = document.getElementById("prepare-email");
  const contactForm = document.getElementById("contact-form");

  if (emailButton && contactForm) {
    emailButton.addEventListener("click", function () {

      if (!validateForm(contactForm)) {
        report(
          contactForm,
          "Correct the highlighted fields before preparing an email.",
          true
        );
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(BUSINESS_EMAIL)) {
        report(
          contactForm,
          "The owner must configure a real recipient email " +
          "address first. You can use Send Message instead.",
          true
        );
        return;
      }

      const data = new FormData(contactForm);

      const subject = encodeURIComponent(
        "Skull Bracelets: " + data.get("topic")
      );

      const message =
        "Name: " + data.get("full-name") + "\n" +
        "Email: " + data.get("email") + "\n" +
        "Phone: " + (data.get("phone") || "Not provided") +
        "\n\n" +
        String(data.get("message"));

      window.location.href =
        "mailto:" + BUSINESS_EMAIL +
        "?subject=" + subject +
        "&body=" + encodeURIComponent(message);

      report(
        contactForm,
        "Your email app should open. " +
        "Press Send there to deliver the email.",
        false
      );
    });
  }

});
