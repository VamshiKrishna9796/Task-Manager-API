const {createCricketerProfile, updateCricketerProfile, deleteCricketerProfile, findCricketerById} = require('../../modelHelpers/cricketerModelHelper');
const createNewCricketerProfile = async (apiParams) => {
    try {
        const existing = await findCricketerById(apiParams._id || apiParams.id);
        if (existing) {
            return { status: 409, message: 'Cricketer profile already exists' };
        }

        const newProfile = await createCricketerProfile(apiParams);
        return newProfile;
    } catch (error) {
        console.error(error);
        throw new Error('Error creating cricketer profile');
    }
};
 const updateOldCricketerProfile = async (apiParams) => {
    try {
        console.log('Service updating cricketer profile with params:', apiParams);
        const updatedProfile = await updateCricketerProfile(apiParams, { new: true });
        return updatedProfile;
    } catch (error) {
        console.error(error);
        throw new Error('Error updating cricketer profile');
    }
};
const deleteCricketerProfileRecord = async (id) => {
    try {
        const deletedProfile = await deleteCricketerProfile(id);
        return deletedProfile;
    } catch (error) {
        console.error(error);
        throw new Error('Error deleting cricketer profile');
    }
};
const getCricketerById = async (id) => {
    try {
        const profile = await findCricketerById(id);
        return profile;
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching cricketer profile');
    }
};

module.exports = { createNewCricketerProfile, updateOldCricketerProfile, deleteCricketerProfileRecord, getCricketerById };