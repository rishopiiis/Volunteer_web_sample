// Form submission success message
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for signing up! We will contact you soon.');
    this.reset();
});