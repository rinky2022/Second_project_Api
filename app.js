let express = require('express');
let app = express();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
//const mongoUrl = "mongodb://localhost:27017"
const mongoUrl = "mongodb+srv://testuser1:testlearn123@cluster0.bbetz.mongodb.net/Travel_Db?retryWrites=true&w=majority"
const dotenv = require('dotenv')
dotenv.config()
const bodyParser = require('body-parser')
const cors = require('cors')
let port = process.env.PORT || 8210;
var db;

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

//get 
app.get('/',(req,res) => {
    res.send("Welcome to express")
})

//Search using category
app.get('/Category/:id',(req,res) => {
    let categoryId  = Number(req.params.id)
   
    db.collection('traveldata').find({category_id:categoryId}).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})

//Explore trip idea
app.get('/type/:id',(req,res) => {
    let typeId  = Number(req.params.id)
   
    db.collection('traveldata').find({type:typeId}).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})

// Load from destination dropdown
app.get('/fromDestination',(req,res) => {  
   
    db.collection('from_destination').find({}).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})

//Load to_destination data wrt from_destination dropdown
app.get('/toDestination_details/:id',(req,res) => {
    let categoryId  = Number(req.params.id)
    let from_destination = req.query.from
    let query = {};
    if(from_destination){
        query = {"from":from_destination,"category_id":categoryId}
    }    
    
    db.collection('traveldata').find(query).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})

//Load flights on search
app.get('/flightsearch/1',(req,res) => {
    let categoryId  = 1
    let to_destination = req.query.to
    let from_destination = req.query.from
    let passenger_count = req.query.passengers
    let query = {};
    if(from_destination && to_destination && passenger_count){
        query = {from:from_destination,to:to_destination,passengers:passenger_count,"category_id":categoryId}
    }
    else if(from_destination){
        query = {from:from_destination,"category_id":categoryId}
    }
    else if(to_destination){
        query = {to:to_destination,"category_id":categoryId}
    }
    
    db.collection('traveldata').find(query).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})

//data respect to flightname and stops
app.get('/filter/1',(req,res) => {
    let categoryId  = 1
    let stops = req.query.stop
    let flight_name = req.query.name
    
    let query = {};
    if(stops && flight_name){
        query = {Stop:stops,name:flight_name,"category_id":categoryId}
    }
    else if(stops){
        query = {Stop:stops,"category_id":categoryId}
    }
    else if(flight_name){
        query = {"name":flight_name,"category_id":categoryId}
    }
    
    db.collection('traveldata').find(query).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})

//cost filter
app.get('/filter_cost/:id',(req,res) => {
    let sort = {price:1}
    let categoryId  = Number(req.params.id) 
    let lprice = Number(req.query.lprice)
 
    let hprice = Number(req.query.hprice)
    let query = {}
    if(lprice&hprice){
        query = {"category_id":categoryId,
         
            $and:[{price:{$gt:lprice,$lt:hprice}}]
        }
    }  
    if(req.query.sort){
        sort = {price:req.query.sort,"category_id":categoryId}
    }
          

    db.collection('traveldata').find(query).sort(sort).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})

// filter wrt cost and flight name 
app.get('/filter/1',(req,res) => {
    let sort = {price:1}
    let categoryId  = 1  
    let lprice = Number(req.query.lprice)
 
    let hprice = Number(req.query.hprice)
    let flight_name = req.query.name
    let query = {}
    if(lprice&hprice&flight_name){
        query = {"category_id":categoryId,"name":flight_name,
         
            $and:[{price:{$gt:lprice,$lt:hprice}}]
        }
    }  
    if(req.query.sort){
        sort = {price:req.query.sort,"category_id":categoryId}
    }
          

    db.collection('traveldata').find(query).sort(sort).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})


//Load trains on search
app.get('/trainsearch/2',(req,res) => {
    let categoryId  = 2
    let to_destination = req.query.to
    let from_destination = req.query.from
    let class_name = req.query.class
   
    let query = {};
    if(from_destination && to_destination && class_name){
        query = {from:from_destination,to:to_destination,class:class_name,"category_id":categoryId}
    }
    else if(from_destination && to_destination){
        query = {from:from_destination,to:to_destination,"category_id":categoryId}
    }
    else if(from_destination){
        query = {from:from_destination,"category_id":categoryId}
    }
    else if(to_destination){
        query = {to:to_destination,"category_id":categoryId}
    }
    
    db.collection('traveldata').find(query).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})

//Filter wrt class 
app.get('/filter_class/2',(req,res) => {
    let categoryId  = 2
    let class_name = req.query.class
     
    let query = {};
   
   if(class_name){
        query = {class:class_name,"category_id":categoryId}
    }
   
    
    db.collection('traveldata').find(query).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})

// filter wrt cost and train class 
app.get('/filter/2',(req,res) => {
    let sort = {price:1}
    let categoryId  = 2  
    let lprice = Number(req.query.lprice)
 
    let hprice = Number(req.query.hprice)
    let class_name = req.query.class
    let query = {}
    if(lprice&hprice&class_name){
        query = {"category_id":categoryId,"class":class_name,
         
            $and:[{price:{$gt:lprice,$lt:hprice}}]
        }
    }  
    if(req.query.sort){
        sort = {price:req.query.sort,"category_id":categoryId}
    }
          

    db.collection('traveldata').find(query).sort(sort).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})

//Load buses on search
app.get('/bussearch/3',(req,res) => {
    let categoryId  = 3
    let to_destination = req.query.to
    let from_destination = req.query.from   
   
    let query = {};
    if(from_destination && to_destination){
        query = {from:from_destination,to:to_destination,"category_id":categoryId}
    }
    else if(from_destination){
        query = {from:from_destination,"category_id":categoryId}
    }
    else if(to_destination){
        query = {to:to_destination,"category_id":categoryId}
    }
    
    db.collection('traveldata').find(query).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})

//Filter wrt class 
app.get('/filter_class_hrs/3',(req,res) => {
    let categoryId  = 3
    let class_name = req.query.class
    let hrs = req.query.hours
     
    let query = {};
    if(class_name && hrs){
        query = {class:class_name,hours:hrs,"category_id":categoryId}
    }
   
   else if(class_name){
        query = {class:class_name,"category_id":categoryId}
    }
    else if(hrs){
        query = {hours:hrs,"category_id":categoryId}
    }
   
    
    db.collection('traveldata').find(query).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})

// filter wrt cost and bus class 
app.get('/filter/3',(req,res) => {
    let sort = {price:1}
    let categoryId  = 3  
    let lprice = Number(req.query.lprice)
 
    let hprice = Number(req.query.hprice)
    let class_name = req.query.class
    let query = {}
    if(lprice&hprice&class_name){
        query = {"category_id":categoryId,"class":class_name,
         
            $and:[{price:{$gt:lprice,$lt:hprice}}]
        }
    }  
    if(req.query.sort){
        sort = {price:req.query.sort,"category_id":categoryId}
    }
          

    db.collection('traveldata').find(query).sort(sort).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})


// Load hotel/holiday destination dropdown dropdown
app.get('/city',(req,res) => {  
   
    db.collection('hotel_holiday_destination').find({}).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})

//Load hotels on search
app.get('/hotelsearch/4',(req,res) => {
    let categoryId  = 4
    let city = Number(req.query.cityid)    
    let rooms = Number(req.query.rooms)
    let guests = Number(req.query.guests)  
   
    let query = {};
    if(city && rooms && guests){
        query = {cityid:city,rooms:rooms,guests:guests,"category_id":categoryId}
    }
    else if(city && rooms){
        query = {cityid:city,rooms:rooms,"category_id":categoryId}
    }
    else if(city && guests){
        query = {cityid:city,guests:guests,"category_id":categoryId}
    }
    
    db.collection('traveldata').find(query).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})

//Filter wrt free breakfast,refundable option,star category,rating,facilites,cost filter
app.get('/filter_search/4',(req,res) => {
    let sort = {price:1}
    let categoryId  = 4 
    let lprice = Number(req.query.lprice) 
    let hprice = Number(req.query.hprice)    
    let breakfast = req.query.breakfast
    let stars = Number(req.query.stars)
    let refundable = req.query.isRefundable
    let rating = req.query.rating
    let facilites = req.query.faclities
     
    let query = {};
    if(breakfast && stars && refundable &&rating){
        query = {breakfast:breakfast,stars:stars,isRefundable:refundable,rating:rating,"category_id":categoryId}
    }
   
   else if(breakfast && stars && refundable){
        query = {breakfast:breakfast,stars:stars,isRefundable:refundable,"category_id":categoryId}
    }
    else if(breakfast && stars){
        query = {breakfast:breakfast,stars:stars,"category_id":categoryId}
    }
    else if(breakfast && rating){
        query = {breakfast:breakfast,rating:rating,"category_id":categoryId}
    }
    else if(refundable){
        query = {isRefundable:refundable,"category_id":categoryId}
    }
    else if(rating){
        query = {rating:rating,"category_id":categoryId}
    }
    else if(stars){
        query = {stars:stars,"category_id":categoryId}
    }
    else if(breakfast){
        query = {breakfast:breakfast,"category_id":categoryId}
    }
    else if(facilites){
        query = {faclities:facilites,"category_id":categoryId}
    }
   
    if(lprice&hprice&rating){
        query = {"category_id":categoryId,"rating":rating,
         
            $and:[{price:{$gt:lprice,$lt:hprice}}]
        }
    }  
    
    if(req.query.sort){
        sort = {price:req.query.sort,"category_id":categoryId}
    }
          

    db.collection('traveldata').find(query).sort(sort).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})

// filter wrt cost and rating
// app.get('/filter/4',(req,res) => {
//     let sort = {price:1}
//     let categoryId  = 4 
//     let lprice = Number(req.query.lprice)
 
//     let hprice = Number(req.query.hprice)
//     let rating = Number(req.query.rating)
//     let query = {}
//     if(lprice&hprice&rating){
//         query = {"category_id":categoryId,"rating":rating,
         
//             $and:[{price:{$gt:lprice,$lt:hprice}}]
//         }
//     }  
//     if(req.query.sort){
//         sort = {price:req.query.sort,"category_id":categoryId}
//     }
          

//     db.collection('traveldata').find(query).sort(sort).toArray((err,result) =>{
//         if(err) throw err;
//         res.send(result)
//     })
// })

//holiday packages search
app.get('/holiday_packagesearch/5',(req,res) => {
    let categoryId  = 5
    let from = req.query.from
    let to = req.query.cityid  
    
   
    let query = {};
    if(from && to){
        query = {from:from,to:to,"category_id":categoryId}
    }
   
    else if(to){
        query = {to:to,"category_id":categoryId}
    }
    else if(from){
        query = {from:from,"category_id":categoryId}
    }
    
    db.collection('traveldata').find(query).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})

//reviewdetail
app.get('/reviewdetail/:id',(req,res) => {
    let sort = {id:1}
    let categoryId  = Number(req.params.id) 
    let id =Number(req.query.id)
    let query = {}
    if(id){
        query = {"category_id":categoryId, id:id       
          
        }
    }  
    if(req.query.sort){
        sort = {id:req.query.sort,"category_id":categoryId}
    }
          

    db.collection('traveldata').find(query).sort(sort).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})

//book ticket
app.post('/bookticket',(req,res) => { 
    db.collection('ticket').insert(req.body,(err,result) =>{
        if(err) throw err;
        res.send('ticket Added')
    })
})

//delete ticket
app.delete('/deleteticket',(req,res) => {
    let status = req.query.status
    let query = {}
    if(status)
    {
        query = {"status":status}
    }
    db.collection('ticket').remove(query,(err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})

app.put('/updateticket/:id',(req,res) => {
    let oId = mongo.ObjectId(req.params.id)
    let status = req.query.status?req.query.status:'Pending'
    db.collection('ticket').updateOne(
        {_id:oId},
        {$set:{
            "status":status,
            "bank_name":req.body.bank_name,
            "bank_status":req.body.bank_status
        }},(err,result)=>{
            if(err) throw err;
            res.send(`Status Updated to ${status}`)
        }
    )
})

// get tickets
app.get('/gettickets',(req,res) => {
    let email  = req.query.email
    let query = {};
    if(email){
        query = {"email":email}
    }
    db.collection('ticket').find(query).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})




MongoClient.connect(mongoUrl, (err,client) => {
    if(err) console.log("Error While Connecting");
    db = client.db('Travel_Db');
    app.listen(port,()=>{
        console.log(`listening on port no ${port}`)
    });
})


