const technologyModel = require('../Models/technology.model');

async function getTechnologies() {
    try {
        const technologies = await technologyModel.find();
        return technologies;
    } catch (error) {
        console.error('Error fetching technologies:', error);
        // throw new Error('Failed to fetch technologies');
    }
}

async function addTechnologies(techData) {
    try {
        const { name } = techData;
        var technologies = new technologyModel({
            name: name,
        })

        await technologies.save();

        return { message: name + ' - New Technology Added Successfully' };
    } catch (error) {
        console.error('Error saving technologies:', error);
        // throw new Error('Failed to fetch technologies');
    }
}

module.exports = { getTechnologies, addTechnologies };