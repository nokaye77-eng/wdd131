// Select the hamburger button
const menuButton = document.querySelector("#menu-button");

// Select the navigation menu
const navigation = document.querySelector("#navigation");

// Add click event to the button
menuButton.addEventListener("click", () => {

    // Toggle the open class
    navigation.classList.toggle("open");

    // Check if the menu is open
    const isOpen = navigation.classList.contains("open");

    // Change hamburger icon to X
    menuButton.textContent = isOpen ? "✕" : "☰";

    // Update accessibility attributes
    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});