import React, {useState} from "react";
import Style from "../../style/CookieClickerStyle"

export default function CoockieClicker() {

    const [cookieSize, setCookieSize] = useState(20);

    const columnStyle = {
        display: "grid",
        justifyItems: "center",
    }
    const style1 = {
        width: "80vw",
        height: "10vh",
        borderTopLeftRadius: "2vw",
        borderTopRightRadius: "2vw",
        gridRow: 1,
        gridColumn: 1,
        backgroundColor: "#2f3948",
    };
    const style2 = {
        backgroundColor: "#2f3948",
        borderBottomLeftRadius: "2vw",
        borderBottomRightRadius: "2vw",
        gridRow: 2,
        gridColumn: 1,
        width: "80vw",
    };

    const cookieStyle = {
        alignContent: "center",
        width: "20vw",
        marginLeft: "30vw",
        marginRight: "30vw",
        marginTop: "5vh",
        marginBottom: "5vh",
        cursor: "pointer",
        transitionDuration: ".8s",
    }

    const handleMouseHover = () => {
      
    }

    return (
        <div style={columnStyle}>
            <div style={style1}></div>
            <div style={style2}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Crystal_Project_cookie.png"
                     alt="cookie"
                     style={cookieStyle}
                     onMouseEnter={handleMouseHover}
                     onClick={function (event) {
                         console.log("test");
                     }}
                />
            </div>
        </div>
    )
}