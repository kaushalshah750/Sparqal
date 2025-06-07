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

async function addPortfolio(portfolioDetails) {
    try {

        const portfolioData = await portfolioModel({
            title: portfolioDetails.title,
            subtitle: portfolioDetails.subtitle,
            category: portfolioDetails.category,
            tags: portfolioDetails.tags,
            image: portfolioDetails.image,
            description: portfolioDetails.description,
            longDescription: portfolioDetails.longDescription,
            features: portfolioDetails.features,
            results: portfolioDetails.results,
            technologies: portfolioDetails.technologies,
            timeline: portfolioDetails.timeline,
            client: portfolioDetails.client,
            liveUrl: portfolioDetails.liveUrl,
            githubUrl: portfolioDetails.githubUrl,            
        }).save();
        return portfolioData;
    } catch (error) {
        console.error('Error fetching portfolio data:', error);
        // throw new Error('Failed to fetch portfolio data');
    }
}

async function updatePortfolio(id, updatedDetails) {
    try {
        const updatedPortfolio = await portfolioModel.findByIdAndUpdate(
            id,
            updatedDetails
        );
        return updatedPortfolio;
    } catch (error) {
        console.error('Error updating portfolio data:', error);
    }
}

async function deletePortfolio(id) {
    try {
        const deletedPortfolio = await portfolioModel.findByIdAndDelete(id);
        return deletedPortfolio;
    } catch (error) {
        console.error('Error deleting portfolio data:', error);
    }
}

module.exports = { getPortfolio, addPortfolio, updatePortfolio, deletePortfolio };