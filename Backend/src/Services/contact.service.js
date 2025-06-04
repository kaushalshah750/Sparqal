const contactModel = require('../Models/contact.model');

async function submitContactForm(contactData) {
    const { name, email, type, project_detail } = contactData;
    console.log(`Contact Form Submission: Name: ${name}, Email: ${email}, Type: ${type}, Project Detail: ${project_detail}`);

    var contact = new contactModel({
        name: name,
        email: email,
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