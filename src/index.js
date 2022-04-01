const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const newsController = require("./controllers/news.controller");
const latestPhotoController = require("./controllers/latest_photos.controller");
const feedController = require("./controllers/feed.controller");
const miniFeedController = require("./controllers/minifeed.controller");
// const ScheduleController = require("./controllers/schedule.controller");
// const VideosController = require("./controllers/videos.controller");
// const PhotosController = require("./controllers/photos.controller");
// const RankingController = require("./controllers/ranking.controller");

// app.get("/", function (req, res) {
//   return res.redirect("https://faballey-clone.vercel.app/");
// });

app.use("/feed", feedController);
app.use("/news", newsController);
app.use("/latestphoto", latestPhotoController);
app.use("/minifeed", miniFeedController);
// app.use("/schedule", ScheduleController);
// app.use("/videos", VideosController);
// app.use("/photos", PhotosController);
// app.use("/ranking", RankingController);
// app.use("/player_rankings", RankingController);

module.exports = app;
