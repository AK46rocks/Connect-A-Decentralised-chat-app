import { useLazyQuery, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ENT } from '../../GraphQL/Queries';
import './Entity.css';

const Entity = () => {

    const [con, setCon] = useState([]);
    const [show, setShow] = useState(false);
    const [ent, setEnt] = useState(' ');
    const history = useNavigate();
    const {error, loading, data } = useQuery(ENT);


    useEffect(() => {        
        function ok(){
          setCon(data.__schema.queryType.fields); 
        }
        if(data){    
          ok();
        }
    }, [data])


    const getAllData = (str) =>{
        const str2 = str.charAt(0).toUpperCase() + str.slice(1);
        setEnt(str2);
        setShow(true);       
    }
    

  return (
    <>
    <div className='container text-center'>
        <h1>Entity of Subgraph</h1>

        <div className="row">
            { con.map(function(item,i){
           
              if(i%2==0)
               return(
                  <>
                  <div  className="col-md-4">
                  <div key={i} className="card mt-3 mb-3">
                      <h2  className='text-center py-3'>{item.name}</h2>
                      <Link className='btn' to={"table/"+item.name}></Link>
                  </div>
                 </div>
                 </> 
              ) 

          })}
            
        </div>
    </div>
    
    </>
  )
}

export default Entity;