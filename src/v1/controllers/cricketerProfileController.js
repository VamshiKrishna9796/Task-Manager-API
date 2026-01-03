const {createNewCricketerProfile, updateOldCricketerProfile, deleteCricketerProfileRecord, getCricketerById} = require("../services/cricketerProfileService")
const mongoose = require('mongoose');
//create cricketer 
exports.createCricketerProfile = async (req, res) => {
    try {
        if(!req.body){
            return res.status(400).json({ error: 'Request body is required' });
        }
        const apiParams = req.body;
        console.log('hello');
        const createCricketerProfile = await createNewCricketerProfile(apiParams);
        return res.status(201).json(createCricketerProfile);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.updateCricketerProfile = async (req, res) => {
    try {
        const apiParams = req.body;
        if(!req.body){
            return res.status(400).json({ error: 'Request body is required' });
        }
        if (req.body.id === undefined) {
            return res.status(400).json({ error: 'Cricketer profile ID is required for update' });
        }
        // Call the update service with the API params
        const updatedProfile = await updateOldCricketerProfile(apiParams);
        return res.status(200).json(updatedProfile);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.deleteCricketerProfile = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        error: 'Invalid cricketer profile ID'
      });
    }

    const deletedProfile = await deleteCricketerProfileRecord(id);

    if (!deletedProfile) {
      return res.status(404).json({
        error: 'Cricketer profile not found'
      });
    }

    return res.status(200).json(deletedProfile);

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Internal Server Error'
    });
  }
};

exports.fetchCricketerProfile = async (req, res) => {
    try {
        const { id } = req.params;

        // Validate the ID format
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                error: 'Invalid cricketer profile ID'
            });
        }

        const profile = await getCricketerById(id);

        if (!profile) {
            return res.status(404).json({
                error: 'Cricketer profile not found'
            });
        }

        return res.status(200).json(profile);

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};

exports.fetchCricketerProfile = async (req, res) => {
    try {
        const { id } = req.params;

        // Validate the ID format
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                error: 'Invalid cricketer profile ID'
            });
        }

        const profile = await getCricketerById(id);

        if (!profile) {
            return res.status(404).json({
                error: 'Cricketer profile not found'
            });
        }

        return res.status(200).json(profile);

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};

    
