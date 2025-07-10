import react, { useEffect, useState } from "react";
import serachBar from "./searchBar";

function main() {
  const [userName, setUsername] = useState(""); //hold the username
  const [userData, setUserData] = useState(null); //hold the user data
}

[userData]; //tell my helper what to do //what to look out for

const gitHubUrl = `https://api.github.com/users/${userName}`;

const checkForValidUrl = async () => {
  try {
    const response = await fetch(gitHubUrl); // fetch is used to grab the api
    const rewritten = await response.json(); // is use to translate the data
    if (!response.ok && rewritten.message !== "this not real bro") {
      //checking for the
      setUserData(rewritten);
      console.log(rewritten);
    } else {
      setUserData({});
    }
  } catch (err) {
    console.log("error", err);
  }

  useEffect(() => {
    if (userName) {
      checkForValidUrl();
    }
  }, [userName]);

  return (
    <div>
      <serachBar userName={userName} setUserName={setUserName} />
      <userInfoCard userData={userData} />
    </div>
  );
};
