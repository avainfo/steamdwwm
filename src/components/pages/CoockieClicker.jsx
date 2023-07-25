import React, {useState} from "react";
import Cookie from "../common/cookieClicker/Cookie"

export default function CoockieClicker() {

    const [score, setScore] = useState(0);

    return (
        <Cookie setScore={setScore} score={score}></Cookie>
    )
}