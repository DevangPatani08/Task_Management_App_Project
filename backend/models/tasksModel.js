const mg = require('mongoose');

const taskSchema = new mg.Schema({
    message: { type: String, required: true, trim: true, maxlength: 500, unique: true },
    priority: { type: String, enum: ['todo', 'do-today', 'for-later'], default: 'todo' },
    deadline: { type: Date, required: true },
    completed: { type: Boolean, default: false },
    completedAt: { type: Date },
    userId: {type: mg.Schema.Types.ObjectId, ref: 'User', required: true}
}, { timestamps: true });

// Auto-delete completed tasks after 30 days
taskSchema.index({ completed: 1, completedAt: 1 }, {
    expireAfterSeconds: (60 * 60 * 24 * 30) // 30 days in seconds
});

module.exports = mg.model('Task', taskSchema);