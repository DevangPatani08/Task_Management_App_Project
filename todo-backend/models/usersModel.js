// Necessary package imports
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Creating User schema 
const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    { timestamps: true }
);

// Hashing password before saving user document
userSchema.pre('save', async function (next) {
    
    if (!this.isModified('password')) {
        return next();
    }
    
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Comparing entered password with hashed password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Exporting User model
module.exports = mongoose.model('User', userSchema);