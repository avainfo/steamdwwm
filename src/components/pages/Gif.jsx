import React, {useState} from "react";
import Grid from "../common/Grid"

export default function Gif() {

    const [data, setData] = useState("");
    const [started, setStarted] = useState(false)

    var imgs = [];

    const getGif = async () => {
        if (!started) {
            setStarted(true);
            var response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=lV037QsCl68DVDWbpwWfkvQYN8GASzjG&q=coucou&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips");
            var json = await response.json();
            console.log(json["data"][0])
            setData(JSON.stringify(json))
        }
    }

    getGif();

    return (
        <Grid size={5} components={
            [
                <img
                    src="https://media3.giphy.com/media/MEsFQDEVsiY4Gxm2LU/giphy.gif?cid=c70710b9it1xknmnokhvhk7pggxv38v7qn54td4q14ibay51&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                    alt="gif"
                    style={{width: "100%"}}
                />,
                <img
                    src="https://media3.giphy.com/media/MEsFQDEVsiY4Gxm2LU/giphy.gif?cid=c70710b9it1xknmnokhvhk7pggxv38v7qn54td4q14ibay51&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                    alt="gif"
                    style={{width: "100%"}}
                />,
                <img
                    src="https://media3.giphy.com/media/MEsFQDEVsiY4Gxm2LU/giphy.gif?cid=c70710b9it1xknmnokhvhk7pggxv38v7qn54td4q14ibay51&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                    alt="gif"
                    style={{width: "100%"}}
                />,
                <img
                    src="https://media3.giphy.com/media/MEsFQDEVsiY4Gxm2LU/giphy.gif?cid=c70710b9it1xknmnokhvhk7pggxv38v7qn54td4q14ibay51&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                    alt="gif"
                    style={{width: "100%"}}
                />,
            ]
        }></Grid>
    );
}