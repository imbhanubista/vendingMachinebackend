const Amount = require("../models/cash.model")
const Items = require("../models/items.models")
const PurchaseItems = require("../models/purchase.models")


exports.refundItems = async(req,res)=>{
    let {refCode} = req.body

    try{
        let refundItems = await PurchaseItems.findOne({refCode})
        console.log(refundItems)
        if(!refundItems){
            res.json({
                type:"error",
                msg:"Items isn't purchased from here!"
            })
        }
        else{
            await Items.updateOne({_id:refundItems.item_id},{
                $inc:{
                    quantity : refundItems.purchaseQuantity
                }
            })
            let refundMoney = refundItems.pricePerItem * refundItems.purchaseQuantity
            await Amount.updateOne({},{
                $inc:{
                    cash: -refundMoney
                }
            })
            await PurchaseItems.deleteOne({refCode})
            res.json({
                type:"success",
                msg : `Return successfull. You got Rs. ${refundMoney} back! `
            })
        }

    }

    catch(err){
        res.json({
            type:"error",
            msg: err.message
        })
    }

}