const mongoose = require("mongoose");

const userModel = mongoose.Schema(
	{
		userName: {
			type: String,
		},
		email: {
			type: String,
			unique: true,
		},
		password: {
			type: String,
		},
		avatar: {
			type: String,
		},
		avatarID: {
			type: String,
		},
		verified: {
			type: Boolean,
		},

		myToken: {
			type: String,
		},

		verifiedToken: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "verifies",
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("users", userModel);
