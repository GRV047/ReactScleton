import ENVIRONMENT from "./environment";

//Instance of Base URL
export const apiAtEndpint = ENVIRONMENT.apiEndPoint;

//Base Url for each model
const Common = {
    adminCommon:apiAtEndpint+'/admin',
}

//Admin Model
const Admin = {
    signUp:Common.adminCommon+'/signUp',
    login:Common.adminCommon+'/login'
}


//Export all models
export {
    Common,
    Admin
}