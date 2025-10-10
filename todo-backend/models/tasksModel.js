// Necessary package imports
const mongoose = require('mongoose');


// Creating Task schema
const taskSchema = new mongoose.Schema(
    {
        message: { type: String, required: true, trim: true, maxlength: 500, unique: true },
        priority: { type: String, enum: ['todo', 'do-today', 'for-later'], default: 'todo' },
        deadline: { type: Date, required: true },
        completed: { type: Boolean, default: false },
        completedAt: { type: Date },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    },
    {
        timestamps: true
    }
);

// Auto-deleting completed tasks after 30 days
taskSchema.index({ completed: 1, completedAt: 1 }, {
    expireAfterSeconds: (60 * 60 * 24 * 30) // 30 days in seconds 
});

// Exporting Task model
module.exports = mongoose.model('Task', taskSchema);