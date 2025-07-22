function handleSubmit(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Basic validation (in addition to HTML5 validation)
    if (!name || !email || !subject || !message || !phone) {
        alert('Please fill in all required fields');
        return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    // Create the mailto URL
    const mailtoUrl = `mailto:rhratul235@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    )}`;

    // Open the user's default email client
    window.location.href = mailtoUrl;

    // Clear the form
    document.getElementById('contactForm').reset();

    return false;
}
