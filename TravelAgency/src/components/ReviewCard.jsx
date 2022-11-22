import React from 'react';
import './ReviewCard.css';

export default function ReviewCard(props){
    const stars="https://cdn-icons-png.flaticon.com/512/1601/1601243.png";
    const icon="https://bysperfeccionoral.com/wp-content/uploads/2020/01/136-1366211_group-of-10-guys-login-user-icon-png.jpg";
    return (
        <div class="reviewcard">
            <div class="name">
                <img src={icon} alt="user photo" width="60%" class="img"></img>
                <h1>{props.title}</h1>
            </div>
            <div class="info">
                {props.review}
                <img src={stars} class="stars"></img>
                <img src={stars} class="stars"></img>
                <img src={stars} class="stars"></img>
                <img src={stars} class="stars"></img>
            </div>
        </div>
    );
}