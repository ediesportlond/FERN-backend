import dbConnect from "./dbConnect.js";

export function getAllAlbums(req, res) {
    const db = dbConnect();
    db.collection('albums').get()
        .then(collection => {
            const albumsArr = collection.docs.map(doc => {
                return { ...doc.data(), albumId: doc.id }
            })
            res.send({ success: true, message: albumsArr })
        })
        .catch(err => {
            res.status(500).send({ success: false, message: err })
        })
}

export async function createNewAlbum(req, res) {
    const db = dbConnect();
    const result = await db.collection('albums').add(req.body)
        .catch(err => {
            res.status(500).send({ success: false, message: err })
        })
    res.status(201).send({ success: true, message: result });
}

export async function deleteAlbum(req, res) {
    const db = dbConnect();
    const { id } = req.body;
    const result = await db.collection('albums').doc(id).delete()
        .catch(err => {
            res.status(500).send({ success: false, message: err })
        })
    res.status(201).send({ success: true, message: result });
}