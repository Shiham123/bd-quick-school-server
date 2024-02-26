const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

// ! routes
const UsersRouter = require("./Route/UsersRoute/UsersRoute");
const paymentRoute = require("./Route/PaymentRoute/PaymentRoute");
const OrderRoute = require("./Route/OrderRoute/OrderRoute");
const QuizRouter = require("./Route/QuizRoute/QuizRoute");
const ReviewRoute = require("./Route/ReviewRoute/ReviewRoute");
const ServicesRoute = require("./Route/CourseServicesRoute/CourseServicesRoute");
const likeDislikeRouter = require("./Route/LikeDislike/likeDislikeRoute");
const AnnouncementRoute = require("./Route/AnnouncementRoute/AnnouncementRoute");
const HelpDeskRoutes = require("./Route/HelpDeskRoutes/HelpDeskRoutes");
const servicesBookmarkRouter = require("./Route/servicesBookmark/servicesBookmark");
const CommentRoutes = require("./Route/HelpComment/CommentsRoutes");
const JobRoute = require("./Route/JobRoute/JobRoute");
const AdmissionRoute = require("./Route/AdmissionRoute/AdmissionRoute");
const FreeCourseJobRoute = require("./Route/JobRoute/FreeCourseJobRoute");
const videoRoute = require("./Route/VideoRoute/VideoRoute");
const NotificationRouter = require("./Route/NotificationRoute/NotificationRoute");
//middleWare
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//user Router declaration Middleware routes
app.use("/api/v1", UsersRouter);

//Order Router declaration Middleware
app.use("/api/v1", OrderRoute);

app.use("/api/v1", NotificationRouter);

//Payment Route
app.use("/payment", paymentRoute);

// quiz user route
app.use("/api/v2", QuizRouter);

// Services route
app.use("/api/v3", ServicesRoute);

//review route
app.use("/api/v2", ReviewRoute);

// like dislike section
app.use("/api/v2", likeDislikeRouter);

//Announcement route
app.use("/api/v1", AnnouncementRoute);

//Video route
app.use("/api/v1", videoRoute);

//HelpDeskRoutes route
app.use("/api/v1", HelpDeskRoutes);

//Comments route
app.use("/api/v1", CommentRoutes);

// this is services bookmark router
app.use("/api/v2", servicesBookmarkRouter);

// job preparation route
app.use("/api/v2", JobRoute);

// admission route
app.use("/api/v2", AdmissionRoute);

// job preparation routee for free course
app.use("/api/v2", FreeCourseJobRoute);

// Error Router
app.use((err, req, res, next) => {
  res.status(500).send("Something went wrong");
});

//Exports
module.exports = app;
