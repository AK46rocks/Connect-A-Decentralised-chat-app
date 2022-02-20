import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Entity from './Components/Entity/Entity'
import Home from './Components/Home/Home'
import UniTable from './Components/UniTable/UniTable'

const App = () => {

    
   const [subgraphApi, setSubgraphApi] = useState(null)
   const [show, setShow] = useState(false)

   const handleCallback = (api) => {
     if(subgraphApi == null){
      setSubgraphApi(api);
      setShow(true); 
     }
     else{
      setSubgraphApi(api);
      setShow(true);
     }
       
   }

    let client = new ApolloClient({
      cache: new InMemoryCache(),
      uri: subgraphApi,
      })
      console.log(subgraphApi);

  
  return (
    <>
       <ApolloProvider client={client} >
         
         <Routes>
           <Route exact path="entity/table/:subgraph" element={<UniTable/>}></Route>
           <Route path='/entity' element={<Entity/>}></Route>
           <Route path='/' element={<Home parentCallback={handleCallback} />}></Route>
         </Routes>

      </ApolloProvider>
    </>

  )
}

export default App
