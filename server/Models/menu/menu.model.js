const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
    menus:[
        {
            name:{
                type: String,
                required: true
            },
            items:{
                type:mongoose.Types.ObjectId,
                ref:"Foods"
            }
        }
    ],
    recommended:[
        {
            type: mongoose.Types.ObjectId,
            ref:"Foods"
        }
    ]
},{
    timestamps:true
})

const MenuModel = mongoose.model("Menus", MenuSchema);

module.exports = MenuModel;