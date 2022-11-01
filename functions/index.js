import functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
import { getAllAlbums, createNewAlbum, deleteAlbum } from './src/albums.js';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/albums', getAllAlbums);
app.post('/albums', createNewAlbum);
app.post('/albums/delete', deleteAlbum);

export const api = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
