
import axios from "axios"
import config from "../../config/config"

 
const GetList = async () => {  //YOU CAN USE FUNCTION NAME ACCORDING YOUR NEED
    const reqOption = {
        method: 'GET',
        url: `${config.baseUrl}`,
        params: {
            query: cityHint
        }

    }
    
    const { data } = await axios.request(reqOption);
    return data.response;

}

const getSinglelList = async () => {
     const  requiredParams = {
    
     }

    const options = {
        method: 'POST',
        url: `${config.baseUrl}`,
        params: requiredParams
        // header: {
        //     // heade will come here if the is any 
        // }
    }
    const { data } = await axios.request(options);
    return data.response;
}


const Services = {   //change service name according to your project
    GetList,
    getSinglelList  
}

export default Services







