import { useEffect, useState } from "react"
import axios from "axios"


export type UserType={
    username:string,
    password:string,
    id:number
}

//for receving a token:
const log=async()=>{
    const config ={
        body:{
            "username": "972552990876", 
            "password": "1234"
        },
        headers:{
            'accept': 'application/ld+json',
             'content-type': 'application/ld+json',

        }
    }
    const result = await axios.post('https://console.dev.phone.do/api/business_account_users/login_check',config);

    //return getHotlinesList(result.data.token);
    return result.data.token;
}


const getHotlinesList=async()=>{
    let config = {
        headers: {
            'accept': 'application/ld+json',
            'content-type': 'application/ld+json',
            'authorization':`Bearer ${log()}`
        }
      }
    return await axios.get("https://console.dev.phone.do/api/hot_lines",config).then((response)=>{
        return response.data;
    })

}

const updateHotline=async(value:number,id:number)=>{
    let config = {
        headers: {
            'accept': 'application/ld+json',
            'content-type': 'application/ld+json',
            'authorization':`Bearer ${log()}`
        },

        body:{
            "status": {"value":value}
        },
    }
    await axios.put(`https://console.dev.phone.do/api/hot_lines/${id}/change_active_status,config`).then((response)=>{
    })
}

export default function Q1() {
    const [listofUsers, setlistofUsers] = useState<UserType[]>([]);

    useEffect(() => {
        getHotlinesList().then((response) => {
            setlistofUsers(response);
        })
    }, [])

    return(
        <>
            <button onClick={()=>updateHotline(2,listofUsers[0].id)}></button>
            {listofUsers.map((per) => <div>
                {per.username}
            </div>)}
        </>
    )

}

