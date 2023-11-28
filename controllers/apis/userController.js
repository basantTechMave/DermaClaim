// controllers/api/userController.js
const User = require('../../models/model/user');

exports.getUserProfile = async function (req, res) {
  try {
    // Get user profile based on the token
    const user = await User.get(req.user.id);
    
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Exclude sensitive information from the response if needed
    const { password, ...userData } = user;

    res.json(userData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.updateUserProfile = async function (req, res) {
  const { username, email } = req.body;

  try {
    // Get user profile based on the token
    const user = await User.get(req.user.id);

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Update user data
    user.username = username || user.username;
    user.email = email || user.email;

    // Save updated user to the database
    await user.save();

    res.json({ msg: 'User profile updated successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Add other user-related functions as needed
