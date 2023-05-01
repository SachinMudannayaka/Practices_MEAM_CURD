const mongoose=require('mongoose');
const employeeSchema=new mongoose.Schema({

    employeeId:{
        type:String,
        required:true
    },
    employeeName:{
        type:String,
        required:true
    },

    employeePosition:{
        type:String,
        required:true
    },
    empSalary:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model('employeeData',employeeSchema);