import { combineReducers, configureStore } from "@reduxjs/toolkit";

export let editCoin=(id, coin)=>(dispatch)=>{
    console.log(id);
    fetch("http://localhost:5000/api/?id="+id, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(coin)
  })
.then((response)=>response.json())
.then(data=>{
    console.log(data);
    dispatch({type:"SAVE_COIN",payload: data})
})
}

export let addCoin=(coin)=>(dispatch)=>{
    console.log(coin);

    fetch("http://localhost:5000/api/", {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(coin)
      })
    .then((response)=>response.json())
    .then(data=>{
        console.log(data);
        dispatch({type:"SAVE_COIN",payload: data.coin})
    })
    }
    export let login=(user)=>(dispatch)=>{
        console.log();
    
        fetch("http://localhost:5000/api/login", {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
          })
        .then((response)=>{
            
            return response.json();
        } )
        
        .then(data=>{
            console.log(data);
            dispatch({type:"CHANGE_USER_STATUS",payload: data})
        })
        }
    export let deleteCoin=(id)=>(dispatch)=>{
        console.log(id);
        fetch("http://localhost:5000/api/?id="+id, {
            method: 'DELETE',
            headers: {
              'Content-type': 'application/json'
            }
          })
        .then((response)=>response.json())
        .then(data=>{
            dispatch({type:"DELETE_COIN",payload:id})
        })
        }
export let getCoinById=(id)=>(dispatch)=>{
    console.log(id);
    fetch("http://localhost:5000/api/?id="+id).then((response)=>response.json())
    .then((data)=>{
        console.log(data[0]);
        dispatch({type:"ADD_CURRENT_COIN", payload:data[0]})
    })
}

export let getOptions=()=>(dispatch)=>{
    fetch("http://localhost:5000/api/options").then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        dispatch({type:"ADD_CURRENT_OPTIONS", payload:data})
    })
}
export let getCoinsByParams=(category, params)=>(dispatch)=>{
    console.log(params )
    fetch("http://localhost:5000/api/?category="+category+"&params="+params.split("&").join(",")).then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        dispatch({type:"ADD_CURRENT_CATEGORY", payload:data})
    })
}
let currentState = (state={}, action)=>{
    if(action.type==="ADD_CURRENT_COIN"){
        console.log(action.payload);
        return {
            ...state,
            coin: action.payload,
            save:false
        }
    }
    else if(action.type==="ADD_CURRENT_CATEGORY"){
        console.log(action.payload)
        return {
            ...state,
            coinsCategory: action.payload
        }
    }
    else if(action.type==="DELETE_COIN"){
        return {
            ...state,
            coinsCategory: [state.coinsCategory.find((coin)=>{
                if(coin.id!==action.payload)return coin;
            })],
            save: true
        }
    }
    else if(action.type==="SAVE_COIN"){
        return {
            ...state,
            coin: action.payload,
            save: true
        }
    }
    else if(action.type==="ADD_CURRENT_OPTIONS"){
        console.log(action.payload)
        return {
            ...state,
            options: action.payload
        }
    }
    if (action.type==="CHANGE_USER_STATUS"){
        console.log(state);
        return {
            ...state,
            logged: action.payload
        }
    }
     else return state;
}




let rootReducer =combineReducers({
    current: currentState,
})
export const store = configureStore({
    reducer:rootReducer,

})