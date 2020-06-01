document.addEventListener("DOMContentLoaded", () => {
  /**
   *
   * Manipulating the DOM exercise.
   * Exercise programmatically builds navigation,
   * scrolls to anchors from navigation,
   * and highlights section in viewport upon scrolling.
   *
   * Dependencies: None
   *
   * JS Version: ES2015/ES6
   *
   * JS Standard: ESlint
   *
   */

  /**
   * Define Global Variables
   *
   */
  const navbarList = document.querySelector("#navbar__list");
  const sections = document.querySelectorAll("section");

  /**
   * End Global Variables
   * Start Helper Functions
   *
   */

  /**
   * End Helper Functions
   * Begin Main Functions
   *
   */

  // build the nav
  for (let [i, section] of sections.entries()) {
    const menuLink = document.createElement("li");
    menuLink.textContent = section.dataset.nav;
    menuLink.classList.add("menu__link");
    if (i === 0) {
      menuLink.classList.add("active");
    }
    navbarList.appendChild(menuLink);
    section.addEventListener("click", () => {
      document
        .querySelectorAll(".section__content")
        [i].classList.toggle("collapsed");
    });
  }

  // Add class 'active' to section when near top of viewport
  window.addEventListener("scroll", function () {
    for (let [i, section] of sections.entries()) {
      var position = section.getBoundingClientRect();
      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        removeActiveElements(sections);
        setActiveElement(section);

        // set active menuLink
        removeActiveElements(navbarList.children);
        setActiveElement(document.querySelectorAll(".menu__link")[i]);
      }
    }
  });

  // Scroll to anchor ID using scrollTO event

  /**
   * End Main Functions
   * Begin Events
   *
   */

  // Build menu

  // Scroll to section on link click
  navbarList.addEventListener("click", (event) => {
    const sectionId = event.target.textContent
      .split(" ")
      .join("")
      .toLowerCase();
    removeActiveElements(navbarList.children);
    setActiveElement(event.target);
    const elementToScroll = document.querySelector(`#${sectionId}`);
    elementToScroll.scrollIntoView({
      behavior: "smooth",
    });
  });

  // Set active element
  function setActiveElement(element) {
    element.classList.add("active");
  }

  // remove active elements
  function removeActiveElements(elements) {
    for (let element of elements) {
      element.classList.remove("active");
    }
    return elements;
  }

  // collapse section
});
