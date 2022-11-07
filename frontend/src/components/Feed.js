//import axios from 'axios'; 
import React, {useState} from 'react';
import "../css/Feed.css";
// import styled from "styled-components";

const Feed = () => {
    const [index, setIndex] = useState(0);
    var posts = [
        {url: `https://viewer.diagrams.net/?tags=%7B%7D&highlight=000000&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G14J62bJ-mwPuvyI3UK9FMqsZkeiWTJrnE&layers=1&nav=1&title=Feed%20Sample%201#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D14J62bJ-mwPuvyI3UK9FMqsZkeiWTJrnE%26export%3Ddownload`,
        hodgepodges: ["Comp Neuro", "BCI"],
        initialPost: "6 November 2022",
        caption: `What are your thoughts on brain-computer interfacing (BCI)? 
                Many BCI companies are coming to light and trying to help people 
                and augment certain aspects of our lives.`,
        comments: [
            {user: "@ewagne02",
             comment: "I want to pursue that field and hopefully work for one of those companies one day!"}]},
    
        {url: `https://viewer.diagrams.net/?tags=%7B%7D&highlight=000000&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1koA2qI5hvjCAWdWbL-Z-3J_-QRl-44ov&layers=1&nav=1&title=Copy%20of%20ClassDiagramExercise.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1koA2qI5hvjCAWdWbL-Z-3J_-QRl-44ov%26export%3Ddownload`,
        hodgepodges: ["CSC 307", "Cal Poly CS"],
        initialPost: "6 November 2022",
        caption: `Today we learned about class diagrams. Comment the 
        translation of this class diagram. Add further abstractions or additons to this class diagram!`,
        comments: [
            {user: "@ewagne02",
            comment: `A house may have any number of pets living in it. The two possible types 
                        of pets that can live in a house are dogs and cats. Each dog or cat has 
                        a name. An animal's house is its one and only home. You can tell animal 
                        to make a noise and it will do it in its own way.`}]},
        
        {url: `https://viewer.diagrams.net/?tags=%7B%7D&highlight=000000&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1PGACNzTa4kmVNAsr3wuT4PO0c-AYvdW-&layers=1&nav=1&title=Copy%20of%20PerspektivClassDiagram#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1PGACNzTa4kmVNAsr3wuT4PO0c-AYvdW-%26export%3Ddownload`,
        hodgepodges: ["Perspektiv"],
        initialPost: "6 November 2022",
        caption: `After learning about class diagrams in CSC 307, we need to make a class diagram
                    for our website application project. Add to the diagram and review it so we can
                    get an idea of how our data is represented.`,
        comments: [
            {user: "@ewagne02",
            comment: `I think this is ready to be turned in to Professor Klingenberg.`}]},
    
        {url: `https://viewer.diagrams.net/?tags=%7B%7D&highlight=000000&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1i71FGVTRSzt98wLTDi58tFon95K2p6RX&layers=1&nav=1&title=Copy%20of%20PerspektivUseCaseDiagram#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1i71FGVTRSzt98wLTDi58tFon95K2p6RX%26export%3Ddownload`,
        hodgepodges: ["Perspektiv"],
        initialPost: "6 November 2022",
        caption: `This use case diagram will guide us to build functionality for our website
                    application. Add or edit the use case diagram by Wednesday 11/10.`,
        comments: [
            {user: "@ewagne02",
            comment: `This use case diagram is good to go for our Sprint #2 but it does not
                        accurately represent the work we did for the sprint.`},
            {user: "@taile",
            comment: `@ewagne02 I think that is because we did a lot of design this sprint and does not
                        consist of a lot of functionality coverage. Looks good.`}]}
    ]

    let incrementIndex = () => setIndex(index + 1);
    let decrementIndex = () => setIndex(index - 1);
    if(index<=0) {
        decrementIndex = () => setIndex(0);
    }
    if(index === posts.length-1) {
        incrementIndex = () => setIndex(0);
    }

    return (
        <div>
            <div className='subheader-cont'>
                <h1>Recent Feed</h1>
            </div>
            <div className='post-section-container'>
                <div className='post-container'>
                    <iframe src={posts[index].url}>
                    </iframe>
                </div>
                <div className='descr-container'>
                    <t>Post Description</t>
                </div>
                <div className='comment-container'>
                    <t>Comments</t>
                </div>
                <div className='button-container'>
                    <button onClick={decrementIndex} className='scroll-button-top'>
                        <div className='tri-top'></div>
                    </button>
                    <button onClick={incrementIndex} className='scroll-button-bottom'>
                        <div className='tri-bottom'></div>
                    </button>
                </div>
            </div>
        </div>
        
    );
}

export default Feed;