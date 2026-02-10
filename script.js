// Google Login
function handleLogin(response) {
    console.log("Google login success:", response);
    alert("Logged in successfully!");
}

// Sidebar Menu Switch
const menuItems = document.querySelectorAll('.menu li');
const sections = document.querySelectorAll('.content-section');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove active class from all menu
    menuItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    // Show corresponding section
    const target = item.getAttribute('data-target');
    sections.forEach(section => {
      if(section.id === target) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  });
});

// Logout
document.getElementById('logout').addEventListener('click', () => {
  alert("You have been logged out!");
  // Reload or redirect to login page
  window.location.reload();
});

// Registration Form
document.getElementById('registration-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Registration Successful!");
  document.getElementById('registration-form').reset();
});
