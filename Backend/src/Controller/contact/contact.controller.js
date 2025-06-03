const contactService = require('../../Services/contact.service');

exports.submitContactForm = async (req, res) => {
    try {
        const { name, email, message, type, project_detail } = req.body;
        if (!name || !email || !message || !type || !project_detail) {
            throw new Error('All fields are required');
        }
        console.log('Received contact form submission:', req.body);
        contactService.submitContactForm(req.body).then(response => {
            res.status(200).json(response);
        });
    } catch (error) {
        console.error('Error submitting contact form:', error);
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
}