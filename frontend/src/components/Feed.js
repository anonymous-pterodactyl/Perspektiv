import axios from 'axios'; 
import React, {useState, useRef} from 'react';
import logo from "../img/Perspektiv.gif";
import "../css/Feed.css";
// import styled from "styled-components";

const port = 8675;

function Feed() {

    async function getFeed() {
        try{
            const posts = await axios.get(`http://localhost:${port}/post`);
            const result = posts.data.post_list;
            var tempFeed = [];
            var lookFor = user.hpList;
            if (!user.hpList || user.hpList.length === 0)
                lookFor = ["<<default>>"];
            for (var i=0; i<result.length; i++){
                const postHPs = result[i]['hpList'];
                for(var j=0; j<postHPs.length; j++){
                    if(lookFor.includes(postHPs[j]))
                        tempFeed.push(result[i]);
                }
            }
            setFeed(tempFeed);
        }
        catch(er){
            console.log(er); 
        }
    }

    //window.onload = function(){getFeed()};

    // document.addEventListener('DOMContentLoaded', () => {
    //     window.location.reload(false);
    // });

    window.addEventListener('load', () => {
        getFeed();
    });

    const getUser =  async () => {
        var id = window.sessionStorage.getItem("id");
        try {
            var response = await axios.get(`http://localhost:${port}/users/${id}`)
            setUser(response.data.user);
        }
        catch(er) {
            console.log(er);
        }
    }

    const [user, setUser] = useState({});
    const [index, setIndex] = useState(0);
    const [userFeed, setFeed] = useState([{
                "url":logo,
                "caption":"Press the REFRESH button",
                "hpList":["<<default>>"],
                "comments":[],
                "date":"Loading..."}])
    const initializedRef = useRef(false);
    
    if (!initializedRef.current) {
      initializedRef.current = true;
      getUser();
    }

    //post example
    // {
    //     url:...,
    //     caption:...,
    //     hpList:...,
    //     comments:....,
    //     date:...
    // }

    let incrementIndex = () => setIndex(index + 1);
    let decrementIndex = () => setIndex(index - 1);
    if(index<=0) {
        decrementIndex = () => setIndex(0);
    }

    if(index === userFeed.length-1) {
        incrementIndex = () => setIndex(0);
    }

    const hodgePodgeEnum = () => {
      
        const hodges = [];
        for (let i = 0; i < userFeed[index].hpList.length; i++) {
            if (i === userFeed[index].hpList.length-1){
                hodges.push(
                    <small key={userFeed[index].hpList[i]}className="descr">{userFeed[index].hpList[i]}</small>);
            }
            else {
                hodges.push(<small key={userFeed[index].hpList[i]} className="descr">{userFeed[index].hpList[i]}</small>);
                hodges.push(<small key={i} className="descr">,&nbsp;</small>);
            }
        }

        return hodges;
      };

    const commentEnum = () => {
      
        const commList = [];
        for (let i = 0; i < userFeed[index].comments.length; i++) {
          commList.push(
          <div className='comment-box'>
            <small key={userFeed[index].comments[i].user} className="descr">{userFeed[index].comments[i].user}</small>
            <br/>
            <small key={userFeed[index].comments[i].comment} className="descr">{userFeed[index].comments[i].comment}</small>
          </div>);
        }

        return commList;
    };

    return (
        <div>
            <div className='subheader-cont'>
                <button className='refresh-button' onClick={getFeed}>REFRESH</button>
                <b className='feed-heading'>Recent Feed for {user.fullName}</b>
            </div>
            <div className='post-section-container'>
                <div className='post-container'>
                    <iframe src={userFeed[index].url}>
                    </iframe>
                </div>
                <div className='descr-container'>
                    <small className="descr">{userFeed[index].date} </small>
                    <br/>
                    {hodgePodgeEnum()}
                    <br/>
                    <br/>
                    <small className="descr">{userFeed[index].caption}</small>
                </div>
                <div className='comment-container'>
                    <small className="descr">Comments</small>
                    <br/>
                    {commentEnum()}
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