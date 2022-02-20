import React, { useState } from 'react'
import './Home.css'
import { SUBGRAPHS } from '../Subgraphs'
import Entity from '../Entity/Entity'
import { useNavigate } from "react-router-dom";

const Home = ({parentCallback}) => {

  const history = useNavigate();

 const onTigger = (api) => {
  parentCallback(api);
   history('/entity');
 }
   

  return (
    
    <div className='container text-center'>
        <h1>POC of Subgraph</h1>
        <div className="row">
     
     {SUBGRAPHS.map((item,i)=>(
        <div className="col-md-4">
        <div key={i} className="card">
            <h2>{item.name}</h2>
            <button className='btn' onClick={() =>onTigger(item.api)}></button>
        </div>
       </div>
     ))}
       
        </div>
    </div>

  )
}

export default Home