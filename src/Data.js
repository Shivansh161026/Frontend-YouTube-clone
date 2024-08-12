export const API_KEY = "AIzaSyCmbp_9d-pQYfK0F8NMMgikHNKZ3MGWlP4";

export const value_converter=(value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"k";
    }
    else{
        return value;
    }
}
