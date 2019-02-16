const navDropdown = document.querySelector(".clickable-dropdown");
if (navDropdown) {
  const dropdownActivator = navDropdown.querySelector(".clickable-dropdown__activator");
  const dropdownMenu = navDropdown.querySelector(".clickable-dropdown__menu");

  if (dropdownActivator) {
    dropdownActivator.onclick = () => {
      dropdownMenu.classList.toggle("visible");
    }
  }
}

