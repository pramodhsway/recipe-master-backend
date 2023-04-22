import { findAllLikes } from "../../Dao/LikesDao.js";
const findAllLikesMethod = async (req, res) => {
  const likes = await findAllLikes();
  res.json(likes);
};
const LikesController = (app) => {
  app.get('/api/likes/status', (req, res) => {
    res.json({"status": 'Likes Controller API is up and running!'})
  });

  app.get("/api/likes", findAllLikesMethod);
};
export default LikesController;
