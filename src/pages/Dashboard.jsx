import { useEffect, useState } from "react";
import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Button } from "../components/Button";
import { Users } from "../components/Users";


export function Dashboard(){
    const [balance,setBalance]=useState("");
    useEffect(()=>{
        const token=localStorage.getItem("token");
        axios.get("https://vercel-backend-kanak-pandeys-projects.vercel.app/api/v1/account/balance", {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then(response => {
            setBalance(response.data.balance.toFixed(2));
        })
        .catch(error => {
            console.error("Failed to fetch balance:", error);
            setBalance("0.00");
        });
    },[])
    return <div>
        <AppBar/>
        <div className="m-8">
            <Balance value={balance}></Balance>
            <Users></Users>
            

        </div>
    </div>
}