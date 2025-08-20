import mongoose , {Schema} from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"
const wineSchema = new Schema(
{
name : {
    type: String,
    required : true
},
enum : {
    type : String,
    enum : ["Red", "White", "Rosé", "Sparkling", "Dessert", "Fortified"],
    required : true
},
thumbnail:{
    type : string,//cloudinary url
    required : true
},
price : {
    type : Number,
    required : true
},
quantity : {
    type : Number,
    required : true
}


},
{
    timestamps: true
}
)    

export const wine = mongoose.model("wine",wineSchema)

