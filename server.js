const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

let players = [];  // Store players in the tournament
let matches = [];  // Store match information

// Sample route to get players
app.get('/players', (req, res) => {
    res.json(players);
});

// Sample route to create tournament
app.post('/create-tournament', (req, res) => {
    // Logic for creating tournament
});

// Handle socket connections (real-time updates)
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});