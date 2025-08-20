import mongoose from "mongoose"
import mmongoose , { Schema } from "mongoose"

const cartSchema = new Schema(
    {
        userid:{
            type : String,
            required: true
        },
        items:[
            {
                wineid:{
                    type: mongoose.Schema.Types.ObjectId,
                    ref : "wine"
                },
                quantity:{
                    type: Number,
                    required:true
                }
            }
        ]
    },
    {
        timestamps : true
    }
)

export const cart = mongoose.model("cart",cartSchema)