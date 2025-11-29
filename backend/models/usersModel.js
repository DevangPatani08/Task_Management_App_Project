const mg = require('mongoose');
const b = require('bcryptjs');

const UserSchema = new mg.Schema({
    username: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true}
}, { timestamps: true });

// hashing password
UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return (next());

    const s = await b.genSalt(10);
    this.password = await b.hash(this.password, s);
    next();
});


// comparing password with hashed password
UserSchema.methods.comparePassword = async function(enteredPassword) {
    return (await b.compare(enteredPassword, this.password));
};

module.exports = mg.model('User', UserSchema);