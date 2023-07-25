import {useState} from "react";

export default function Grid({size, components})  {
    const gridStyle = {
        paddingLeft: "2vw",
        paddingRight: "2vw",
        width: "80vw",
        paddingTop: "10vh",
        paddingBottom: "10vh",
        backgroundColor: "red",
        marginLeft: "auto",
        marginRight: "auto",
    }

    const placeComponents = () => {

    }

    let i = 0;
    var width = ((80 - 4 - (2 * (size - 1))) / 5)
    for (const componentsKey in components) {
        console.log("test")
        return (
            <div style={gridStyle}>
                {componentsKey}
            </div>
        )
        i++;
    }



}
