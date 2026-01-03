const validateCricketerProfile = (req, res, next) => {
    if (!req.body) {
        return res.status(400).json({ error: 'Request body is required' });
    }
    const { name, age, country, battingStyle, bowlingStyle } = req.body;
    const missingFields = [];
    if (!name) missingFields.push('name');
    if (!age) missingFields.push('age');
    if (!country) missingFields.push('country');
    if (!battingStyle) missingFields.push('battingStyle');
    if (!bowlingStyle) missingFields.push('bowlingStyle');
    if (missingFields.length > 0) {
        return res.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
    }
    next();
};
module.exports = {
    validateCricketerProfile
};