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
  const navBarList = document.querySelector("#navbar__list");
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
  for (let section of sections) {
    const menuLink = document.createElement("li");
    menuLink.textContent = section.dataset.nav;
    menuLink.classList.add("menu__link");
    navBarList.append(menuLink);
  }

  // Add class 'active' to section when near top of viewport
  window.addEventListener("scroll", function () {
    for (let [i, section] of sections.entries()) {
      var position = section.getBoundingClientRect();
      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        removeActiveElements(sections);
        setActiveElement(section);
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
});
