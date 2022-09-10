import express from "express"
const router = express.Router()

import {allCollections} from "./collections/allCollections.js"
import {addCollection} from "./collections/addCollection.js"
import {deleteCollection} from "./collections/deleteCollection.js"
import {oneCollection} from "./collections/oneCollection.js"
import {editCollection} from "./collections/editCollection.js"

// COLLECTIONS
router.get("/collections", (req, res) => allCollections(req, res))
router.get("/collections/:id", (req, res) => oneCollection(req, res))
router.post("/collections", (req, res) => addCollection(req, res))
router.patch("/collections/:id", (req, res) => editCollection(req, res))
router.delete("/collections", (req, res) => deleteCollection(req, res))

export default router

//editCollection(req, res)