const portfolioService = require('../Services/portfolio.service');

exports.getPortfolio = async (req, res) => {
    try {
        portfolioService.getPortfolio().then(portfolioData => {
            res.status(200).json(portfolioData);
        });
    } catch (error) {
        console.error('Error fetching portfolio:', error);
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
}

exports.addPortfolio = async (req, res) => {
    try {
        portfolioService.addPortfolio(req.body).then(portfolioData => {
            res.status(200).json(portfolioData);
        });
    } catch (error) {
        console.error('Error fetching portfolio:', error);
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
}

exports.updatePortfolio = async (req, res) => {
    try {
        const id = req.params.id;
        portfolioService.updatePortfolio(id, req.body).then(portfolioData => {
            res.status(200).json(portfolioData);
        });
    } catch (error) {
        console.error('Error fetching portfolio:', error);
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
}

exports.deletePortfolio = async (req, res) => {
    try {
        const id = req.params.id;

        const deletedPortfolio = await portfolioService.deletePortfolio(id);

        if (!deletedPortfolio) {
            return res.status(404).json({ error: 'Portfolio not found or already deleted' });
        }

        res.status(200).json({ message: 'Portfolio deleted successfully' });
    } catch (error) {
        console.error('Error deleting portfolio:', error);
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};
