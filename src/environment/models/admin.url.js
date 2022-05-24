import { Common, Admin } from "../api";
import axios from "axios";

//Get
// Generat Rest Control where we pass filter and recive response
async function get(filter) {
    const url = Common.adminCommon + `?filter=${filter}`
    return await axios.get(url);
}

//post
// Creating New Instence

async function post(body) {
    const url = Common.adminCommon;
    return await axios.post(url, body);
}

//update
//Update any record based on filter

async function update(where, body) {
    const url = Common.adminCommon + `?where=${where}`;
    return await axios.post(url, body);
}

//Sign Up End Point

async function signUp(object) {
    const url = Admin.signUp;
    //console.log(url)
    return await axios.post(url,object);
}

//LOGIN METHOD ENDPOINT
async function loginAdmin(object){
    const url = Admin.login;
    //console.log(url,object)
    return await axios.post(url,object);
}

export {
    signUp,
    get,
    post,
    update,
    loginAdmin
}