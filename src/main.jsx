import React, { Fragment } from 'react'
import TourCard from "./tourCard";
import  {data}  from "./data";
import './main.css'

export default function Main() {
    return (
        <Fragment>
            <div className="title">Our Tours<span className="underline"></span></div>
            {Object.entries(data).map(([key, tour]) => 
            <TourCard tour={tour} key={key}/>)
            }
        </Fragment>
    )
}

