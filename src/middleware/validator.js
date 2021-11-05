'use strict';

function validator(req,res,next){
    const query=req.query.name;
    if(query){
        console.log('QUERY:',query,req.path);
        next();
    }
    else{
        next("Invalid");
    }
 
     
}

module.exports=validator;