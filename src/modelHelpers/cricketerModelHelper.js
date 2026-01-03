// create cricketer profile from params received from service
const CricketerProfile = require('../models/cricketerModel.js');
const createCricketerProfile = async (apiParams) => {
    try {
        const newProfile = await CricketerProfile.create(apiParams);
        return newProfile;
    } catch (error) {
        console.error(error);
        throw new Error('Error creating cricketer profile');
    }
};
const updateCricketerProfile = async (apiParams) => {
    try {
        console.log('Updating cricketer profile with params:', apiParams);
        const updatedProfile = await CricketerProfile.findByIdAndUpdate(apiParams.id, apiParams, { new: true });
        return updatedProfile;
    } catch (error) {
        console.error(error);
        throw new Error('Error updating cricketer profile');
    }
};

//write a method to delete the data of cricketer profile by id
const deleteCricketerProfile = async (id) => {
    try {
        const deletedProfile = await CricketerProfile.findByIdAndDelete(id);
        return deletedProfile;
    } catch (error) {
        console.error(error);
        throw new Error('Error deleting cricketer profile');
    }
};
const findCricketerById = async (id) => {
    try {
        const profile = await CricketerProfile.findById(id);
        return profile;
    } catch (error) {
        console.error(error);
        throw new Error('Error finding cricketer profile');
    }
};

module.exports = { createCricketerProfile, updateCricketerProfile, deleteCricketerProfile, findCricketerById };
