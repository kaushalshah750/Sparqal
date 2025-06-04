const portfolioModel = require('../Models/portfolio.model');

async function getPortfolio() {
    try {
        const portfolioData = await portfolioModel.find();
        return portfolioData;
    } catch (error) {
        console.error('Error fetching portfolio data:', error);
        // throw new Error('Failed to fetch portfolio data');
    }
}

module.exports = {getPortfolio};