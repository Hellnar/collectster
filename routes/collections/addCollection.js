import {Collection} from "../../models/Collection.js"

export async function addCollection(req, res) {
    const Col = new Collection({
        name: req.body.name,
        items: req.body.items,
        full: req.body.full,
        created: req.body.created
    })
    const result = await Col.save()
    if(result) res.json(result)
}