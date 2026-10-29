require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const { connectDB } = require('./config/db');
const { authMiddleware } = require('./middleware/auth');
const authRoutes = require('./routes/auth');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

app.get('/api/health', async (req, res) => {
  try {
    if (mongoose && mongoose.connection && mongoose.connection.readyState === 1) {
      return res.status(200).json({ status: 'ok', db: 'connected' });
    }
    return res.status(200).json({ status: 'ok', db: 'not-connected' });
  } catch (error) {
    return res.status(200).json({ status: 'ok', db: 'unknown' });
  }
});

app.get('/api/test', authMiddleware, (req, res) => {
  res.json({ message: 'Auth works', user: req.user });
});

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const port = process.env.PORT || 4000;

async function startServer() {
  const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/foodrescue-ai';
  await connectDB(mongoUri);

  io.on('connection', (socket) => {
    socket.on('join:rescue', (payload) => {
      const rescueId = payload && payload.rescueId ? payload.rescueId : null;
      if (rescueId) socket.join(`rescue:${rescueId}`);
    });

    socket.on('join:pulse', () => {
      socket.join('pulse');
    });
  });

  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

startServer().catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
