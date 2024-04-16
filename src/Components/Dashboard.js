// Dashboard.js

import React, { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../Context/UserContext";

const Dashboard = () => {
    const [joke, setJoke] = useState("");
    const { token } = useContext(UserContext);

    const getJoke = async () => {
        try {
            const response = await axios.get("https://instagram-express-app.vercel.app/api/auth/zuku", {
                headers: { "authorization": `Bearer ${token}` }
            });
            setJoke(response.data.data.message);
        } catch (error) {
            console.log("Error:", error.response ? error.response.data.message : error.message);
            setJoke("Failed to get joke");
        }
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={getJoke}>Get Joke</button>
            {joke && <h2>{joke}</h2>}
        </div>
    );
}

export default Dashboard;
