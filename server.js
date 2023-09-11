const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use('/api', apiRoutes); // Prefix all API routes with '/api'
app.use('/', htmlRoutes);   // HTML routes do not need a prefix
