import React from "react";

export default function Cookie({setScore, score}) {

    const cookieStyle = {
        width: "20vw",
        height: "20vw",
    }

    const handleClick = () => {
        setScore(score + 1);
        console.log(score);
    }

    return (
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Crystal_Project_cookie.png"
            style={cookieStyle}
            onClick={handleClick}
        ></img>
    )
}