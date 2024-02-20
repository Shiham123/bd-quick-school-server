const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

// ! routes
const UsersRouter = require('./Route/UsersRoute/UsersRoute');
const paymentRoute = require('./Route/PaymentRoute/PaymentRoute');
const OrderRoute = require('./Route/OrderRoute/OrderRoute');
const QuizRouter = require('./Route/QuizRoute/QuizRoute');
const ReviewRoute = require('./Route/ReviewRoute/ReviewRoute');
const ServicesRoute = require('./Route/CourseServicesRoute/CourseServicesRoute');
const likeDislikeRouter = require('./Route/LikeDislike/likeDislikeRoute');
const AnnouncementRoute = require('./Route/AnnouncementRoute/AnnouncementRoute');
const HelpDeskRoutes = require('./Route/HelpDeskRoutes/HelpDeskRoutes');
const servicesBookmarkRouter = require('./Route/servicesBookmark/servicesBookmark');

//middleWare
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//user Router declaration Middleware routes
app.use('/api/v1', UsersRouter);

//Order Router declaration Middleware
app.use('/api/v1', OrderRoute);

//Payment Route
app.use('/payment', paymentRoute);

// quiz user route
app.use('/api/v2', QuizRouter);

// Services route
app.use('/api/v3', ServicesRoute);

//review route
app.use('/api/v2', ReviewRoute);

// like dislike section
app.use('/api/v2', likeDislikeRouter);
//Announcement route
app.use('/api/v1', AnnouncementRoute);

//HelpDeskRoutes route
app.use('/api/v1', HelpDeskRoutes);

app.use('/api/v2', servicesBookmarkRouter);

// Error Router
app.use((err, req, res, next) => {
  res.status(500).send('Something went wrong');
});

//Exports
module.exports = app;
