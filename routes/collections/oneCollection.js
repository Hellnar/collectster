import { Collection } from "../../models/Collection.js"

export async function oneCollection(req, res) {
    const collection = await Collection.find({_id:req.params.id})
    collection.length > 0 ? res.json(collection) : res.sendStatus(404)
}