import {Collection} from "../../models/Collection.js"

export async function allCollections(req, res) {
    const collections = await Collection.find({})
    return res.json(collections)
}