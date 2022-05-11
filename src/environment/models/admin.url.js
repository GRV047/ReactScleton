import Api from "../api";
import axios from "axios";

//Get
// Generat Rest Control where we pass filter and recive response
async function get(filter){
    const url = Api.Admin.common+`?filter=${JSON.stringify(filter)}`
    return await axios.get(url);
}

//post
// Creating New Instence

async function post(body){
    const url = Api.Admin.common;
    return await axios.post(url,body);
}

//update
//Update any record based on filter

async function update(where,body){
    const url = Api.Admin.common+`?where=${JOSN.stringify(where)}`;
    return await axios.post(url,body);
}

//Sign Up End Point

async function signUp(object){
    const url = Api.Admin.createNewUser;
    return await axios.post(object);
}

export {
    signUp,
    get,
    post,
    update
}