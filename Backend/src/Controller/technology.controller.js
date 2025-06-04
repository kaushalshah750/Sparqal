const technologyService = require('../Services/technology.service');

exports.getTechnologies = async (req, res) => {
    try {
        technologyService.getTechnologies().then(technologies => {
            if (!technologies || technologies.length === 0) {
                res.status(404).json({ message: 'No technologies found' });
            } else {
                res.status(200).json(technologies);
            }
        })
    } catch (error) {
        console.error('Error fetching technologies:', error);
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
}

exports.addTechnologies = async (req, res) => {
    try {
        technologyService.addTechnologies(req.body).then(technologies => {
            if (!technologies || technologies.length === 0) {
                res.status(404).json({ message: 'No technologies found' });
            } else {
                res.status(200).json(technologies);
            }
        })
    } catch (error) {
        console.error('Error fetching technologies:', error);
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
}