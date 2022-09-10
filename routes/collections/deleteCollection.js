import {Collection} from "../../models/Collection.js"

export async function deleteCollection(req, res) {
    const result = await Collection.deleteOne({_id: req.body._id})
    if(result) res.json(result)
}