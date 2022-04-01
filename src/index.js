const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const newsController = require("./controllers/news.controller");
const latestPhotoController = require("./controllers/latest_photos.controller");
const feedController = require("./controllers/feed.controller");
const miniFeedController = require("./controllers/minifeed.controller");
const scheduleController = require("./controllers/schedule.controller");
const videosController = require("./controllers/videos.controller");
const photosController = require("./controllers/photos.controller");
const rankingController = require("./controllers/ranking.controller");

app.use("/feed", feedController);
app.use("/news", newsController);
app.use("/latestphoto", latestPhotoController);
app.use("/minifeed", miniFeedController);
app.use("/schedule", scheduleController);
app.use("/videos", videosController);
app.use("/photos", photosController);
app.use("/ranking", rankingController);
// app.use("/player_rankings", RankingController);

module.exports = app;
