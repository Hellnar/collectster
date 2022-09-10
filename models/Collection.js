import mongoose from "mongoose"

export const Collection = mongoose.model("Collection", mongoose.Schema({
    name: String,
    items: Number,
    full: Boolean,
    created: String
}))