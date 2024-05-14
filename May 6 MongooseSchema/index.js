var mongoose=require('mongoose')

var Schema=mongoose.Schema;
async function mongooseConnections(){
    var  skillSchema=new Schema(
        {
            skillName:String,
            experience:Number,
            proficiency:String
        }
    )

    var jobSeekerSchema=new Schema(
        {
            jobseekerName:String,
            emailId:String,
            age:Number,
            certified:Boolean,
            skills:[skillSchema]
        }
    )

    var js = mongoose.model('jobseeker',jobSeekerSchema);

    mongoose.connect("mongodb://127.0.0.1:27017/DemoBB");

    var jobseeker1 = new js({
        jobseekerName:"Mokan",
        emailId:"mokan@gmail.com",
        age:22,
        certified:true,
        skills:[{
            skillName:"java",
            experience:1,
            proficiency:"beginner"
        },
        {
            skillName:"python",
            experience:2,
            proficiency:"beginner"
        }]
    })
    // await js.deleteMany({jobseekerName:"Raam"});
    // jobseeker1.save()

    // const count = await js.countDocuments();
    // console.log(count);

    const result = await js.find({})
    result.map(record => console.log(record));
    // const updateresult1 = await js.updateMany({jobseekerName:"Mokan"} ,{$set: {jobseekerName:"Raam"}})
    // const result1 = await js.find({})
    // result1.map(record => console.log(record));


}

mongooseConnections();



// js.find({},(err,data)=> {
//     if(err) {
//         console.log("Error while retrieving the data"+err);
//     }
//     else{
//         console.log(data);
//     }
// })
// var mongoose=require('mongoose')

// var Schema=mongoose.Schema;


// var  skillSchema=new Schema({
//     skillName:String,
//     experience:Number,
//     proficiency:String
// })

// var jobSeekerSchema=new Schema({
// jobseekerName:String,
// emailId:String,
// age:Number,
// certified:Boolean,
// skills:[skillSchema]

// })

// var js=mongoose.model('person',jobSeekerSchema);
// mongoose.connect("mongodb://127.0.0.1:27017/aspire");
 
//  var jobseeker1=new js({
//     jobseekerName:"Raj",
//     age:22,
//     emailId:"raj@test.com",
//     certified:true,
//     skills:[{skillName:"java",experience:1,proficiency:"beginner"},
//         {skillName:"angular",experience:2,proficiency:"intermediate"}
//     ]

//     })

//      jobseeker1.save();