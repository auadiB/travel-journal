import React from 'react'


export default function Card(props) {
    return (
        <div className="card">
            <img src={props.imageUrl} className="card-img"/>
            <div className="card-content">
                <img src="./images/pin.png" className="card-pin" />
                <span className="card-location">{props.location}</span>
                <span><a className="card-map" href={props.googleMapsUrl}>View on Google Maps</a></span>
                <h2 className="card-title">{props.title}</h2>
                <p className="card-date">{props.startDate} - {props.endDate}</p>
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    )
}