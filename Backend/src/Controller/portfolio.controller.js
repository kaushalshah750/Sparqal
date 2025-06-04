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