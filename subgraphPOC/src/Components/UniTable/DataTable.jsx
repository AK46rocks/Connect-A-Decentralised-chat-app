import { gql, useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { DAT } from '../../GraphQL/Queries';
import './Table.css';

const ValTable = ({str, objStr, entityName, entityArray}) => {


  const {error,loading, data} = useQuery(DAT(str,entityName));
  // const {data:oinfo} = useQuery(DAT(objStr,entityName));
  const [content, setContent] = useState([]);
  const [innerLoop, setInnerLoop] = useState(entityArray);

  useEffect(() => {
    if(data){
         console.log(entityName)
         console.log(data.entity);
         setContent(data.entity);
    }
  }, [data])
  
  // useEffect(() => {
  //   if(oinfo){
  //        console.log(oinfo);
  //   }
  // }, [oinfo])
  

  return (  
    <>

    {content.map((item)=>{
      return(
      <tr>
      {innerLoop.map((col)=>(   
        <td>{item[col]}</td>
      ))}
      </tr>  
      )
    })}

    </>
  )
}

export default ValTable