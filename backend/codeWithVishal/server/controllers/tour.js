import TourModal from "../models/tour.js";

export const createTour = async (req, res) => {
  const tour = req.body;
  const newTour = new TourModal({
    ...tour,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });
  try {
    await newTour.save();
    res.status(201).json(newTour);
  } catch (err) {
    res.status(404).json({ message: "something went wrong" });
  }
};

export const getTours = async (req, res) => {
  try {
    const tours = await TourModal.find();
    res.status(200).json(tours);
  } catch (err) {
    res.status(404).json({ message: "something went wrong" });
  }
};

export const getTour = async (req, res) => {
  const { id } = req.param;
  try {
    const tour = await TourModal.findById(id);
    res.status(200).json(tour);
  } catch (err) {
    res.status(404).json({ message: "something went wrong" });
  }
};
