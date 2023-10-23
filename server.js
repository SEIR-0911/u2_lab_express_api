const db = require('./config/db')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Import routes
const moviesRoutes = require('./routes/movies');
const actorsRoutes = require('./routes/actors');
const reviewsRoutes = require('./routes/reviews');

// Use routes
app.use('/movies', moviesRoutes);
app.use('/actors', actorsRoutes);
app.use('/reviews', reviewsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});