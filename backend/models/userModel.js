import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['admin', 'user'], // Specify allowed user types
    default: 'user' // Default type if not specified
  }
});

const User = mongoose.model('User', userSchema);

export default User;