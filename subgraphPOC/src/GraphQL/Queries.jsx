import {gql} from '@apollo/client';


export const VAL = gql`
{
  tokens(first:5){
    id
    symbol
    name
    decimals
    totalSupply
    txCount
    totalLiquidity
  }
  pairs(first:5){
    id
    totalSupply
    txCount
  }
  users(first:5){
    id
    usdSwapped
  }
  liquidityPositions(first:5){
    id
    liquidityTokenBalance
  }
  liquidityPositionSnapshots(first:5){
    id
    block
    timestamp
    reserve0
    reserve1
  }
}
`;

export const ENT = gql`
query{
    __schema{
      queryType {
        fields {
          name
       }
      }
    }
}
`;

export const COL = (entity) => {
  return(
    gql`
        query{
          __type(name:"${entity}"){
            name
          fields{
            name
            type{
              ofType{
                kind
              }
            }
          }
        }
        }
    `
  )     
}
export const DAT = (val,entN) => {
  return(
    gql`
        query {
          entity: ${entN}{
             ${val}
             
          }
        }
    `
   )
}

