import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
  title: String,
  name: String,
  discription: String,
  tags: [String],
  imageFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const TourModal = mongoose.model("Tour", tourSchema);

export default TourModal;
