import react, { useEffect, useState } from "react";
import React,{react,useffect} from "react";
import serachBar from "./serachBar";


 const [userName,setUsername] = useState("")//hold the username
 const [userData,setUserData] = useState(null); //hold the user data


 useEffect(() => { //my helper looking for changes
  getuserData(); //tell my helper what to do
  [userData];//what to look out for
 })
  const gitHubUrl = `https://api.github.com/users/${username}`;    
 
const checkForValidUrl = async () => {
    try{
const response = await fetch(gitHubUrl)// fetch is used to grab the api
const rewritten = await response.json();// is use to translate the data
if(!response && rewritten !== "this not real bro"){ //checking for the
    setUserData(rewritten);
    console.log(data);
}
else {
        setUserData({});
    }
    }
    catch(err){
        console.log("error", err);
    }
   
}




return <serachBar userName ={userName}></serachBar>