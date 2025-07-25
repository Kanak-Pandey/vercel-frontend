import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import {Heading} from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios";
import { useNavigate } from "react-router-dom"
export function Signin(){
        const [username,setUsername]=useState("");
        const [password,setPassword]=useState("");
        const navigate=useNavigate();
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign in"}/>
                <SubHeading label={"Enter your credentials to access your account"}/>
                <InputBox onChange={e=>{
                    setUsername(e.target.value)
                }} placeholder="eg.John_60" label="Email"/>
                <InputBox onChange={e=>{
                    setPassword(e.target.value)
                }} placeholder="eg.xyz" label="Password"/>
                <div className="pt-4">
                    
                    <Button onClick={async ()=>{
                        const response =await axios.post("https://vercel-backend-kanak-pandeys-projects.vercel.app/api/v1/user/signin",{
                            username,
                            password
                        })
                        if(response.data.token){
                            localStorage.setItem("token",response.data.token);
                        }
                        navigate("/dashboard")
                    }} label={"Sign in"}/>
                    
                </div>
                <BottomWarning label="Don't have an account?" linkText={"Sign up"} to={"/Signup"}/>
                </div>
            </div>
        </div>
}
