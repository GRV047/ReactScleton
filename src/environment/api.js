import ENVIRONMENT from "./environment";

const Admin ={
    common:ENVIRONMENT.apiEndPoint+'/admin',
    createNewUser:common+'/createNewUser'
}

const Api = {
    Admin:Admin
}

export default Api;