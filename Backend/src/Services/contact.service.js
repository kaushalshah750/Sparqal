const contactModel = require('../Models/contact.model');

async function submitContactForm(contactData) {
    const { name, email, message, type, project_detail } = contactData;
    console.log(`Contact Form Submission: Name: ${name}, Email: ${email}, Message: ${message}, Type: ${type}, Project Detail: ${project_detail}`);

    var contact = new contactModel({
        name: name,
        email: email,
        message: message,
        type: type,
        project_detail: project_detail
    });

    await contact.save();

    // Simulate successful submission
    return { message: 'Contact form submitted successfully' };
}

module.exports = {
    submitContactForm
};