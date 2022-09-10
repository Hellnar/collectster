import { Collection } from "../../models/Collection.js"

export async function editCollection(req, res) {
    console.log(req.body)
    const result = await Collection.findOneAndUpdate({_id:req.params.id}, req.body) 
    console.log(result)
    if(result) res.json(result)
}