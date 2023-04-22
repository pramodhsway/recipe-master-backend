import { findAllReviewsRdao } from "../../Dao/reviewDao.js";
const findAllReviewsMethod = async (req, res) => {
  const reviews = await findAllReviewsRdao();
  res.json(reviews);
};
const ReviewsController = (app) => {
  app.get('/api/reviews/status', (req, res) => {
    res.json({"status": 'Reviews Controller API is up and running!'})
  });

  app.get("/api/reviews", findAllReviewsMethod);
};
export default ReviewsController;
