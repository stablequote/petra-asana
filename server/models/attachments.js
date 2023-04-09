const mongoose = require('mongoose');

const attachmentSchema = new mongoose.Schema({
	name: String,
	img:{
	    data: Buffer,
		contentType: String
	},
    task: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "task"
    }
});

const Attachment = mongoose.model('Attachment', attachmentSchema);
module.exports = Attachment;