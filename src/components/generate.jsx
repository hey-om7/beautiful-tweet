import React from 'react'
import "./Generate.scss"
import { saveAs } from 'file-saver';
import { username } from '../App.jsx';
import { description } from '../App';
import { BrowserView, MobileView } from 'react-device-detect';


export default function Generate() {
    // let imgUrl = "https://allakamaa.pythonanywhere.com/heygetimg";

    const downloadImage = () => {
        let imgUrl = "https://allakamaa.pythonanywhere.com/getimg/";
        if ((username === "") || (description === "")) {
            console.log("empty username or description");
            alert("Empty username or description");
        } else {
            imgUrl = imgUrl + username + "/" + description;
            saveAs(imgUrl, 'beautifulTweet.jpg') // Put your image url here.
        }


    }

    return (
        <div className="theGenerateBtn">
            <BrowserView>
                <div className="generateBtn" onClick={downloadImage}>
                    <h1>Generate</h1>
                </div>
            </BrowserView>
            <MobileView>
                <div className="generateBtn" onClick={downloadImage}>
                    <h1>Generate</h1>
                </div>
            </MobileView>

        </div>


    )
}


