const mongoose = require("mongoose");

const RentalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      unique: true,
      trim: true,
      maxlength: [50, "Name can not be more than 50 characters"],
    },
    address: {
      type: String,
      required: [true, "Please add an address"],
    },
    cost: {
      type: Number,
      default: 500,
    },
    tel: {
      type: String,
      minlength: [12, "Telephone number must be exactly 12 characters long"],
      maxlength: [12, "Telephone number must be exactly 12 characters long"],
    },
    promotions: [{
      type: mongoose.Schema.ObjectId,
      ref: "Promotion",
      default: "",
    }]
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

RentalSchema.virtual("populatedPromotions", {
  ref: "Promotion",
  localField: "promotions",
  foreignField: "_id",
  justOne: false,
});

module.exports = mongoose.model("Rental", RentalSchema);
