import {gql, useQuery, useLazyQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Table.css';
import { COL, DAT, VAL } from '../../GraphQL/Queries';
import DataTable from './DataTable';


const UniTable = () => {

  let {subgraph} = useParams();
  let strO = subgraph.charAt(0).toUpperCase() + subgraph.slice(1);
  console.log("Start",subgraph);

  const [content, setContent] = useState([]);
  const [entityName, setEntityName] = useState('');
  const [str, setStr] = useState('');
  const [objStr, setObjStr] = useState('');
  const [show, setShow] = useState(false);
  
  const { error, loading, data } = useQuery(COL(strO));

    useEffect(() => {
     if(data){
       console.log("Data:---",data)
       getAllCol(data);
     }      
    }, [data])

    function getAllCol(data){
        let arr = [];
        let objType = [];
        data.__type.fields.map((item)=>{
          if((item?.type?.ofType?.kind == "LIST") || (item?.type?.ofType?.kind == "OBJECT") ||
          (item?.type?.ofType?.kind == "NON_NULL") )
          {
            objType.push(item.name);
          }else{
            arr.push(item.name);
          }    
        })

      setEntityName(strO.toLowerCase().concat('s'));
      setContent(arr);
      console.log("Entity Array:--",arr)
      console.log("Object Array:",objType);
      let objectStr = objType.join('{id} ').concat('{id}');
      let done = arr.join(' ');
      setStr(done);
      setObjStr(objectStr);
      console.log("String:--", done);
      console.log("object String:----",objectStr);
      console.log("Entity Name:",entityName);
      setShow(true);

    }

    
  return (
    <div className="container-fluid">
       
          <table className="content-table">
                  <thead>
                  
                  <tr>
                    {content.map((item,i)=>{
                      
                      return(
                      <>      
                      <th>{item}</th>
                      </> 
                      )
                  })}   
                  </tr>
                          
                  </thead>

                  <tbody id="myTable">
                    
                  {str.length !=0 && <DataTable str={str} objStr={objStr} entityName={entityName} entityArray={content}/>}       
                    
                  </tbody>  
          </table>
                  
    </div>

  )
}

export default UniTable