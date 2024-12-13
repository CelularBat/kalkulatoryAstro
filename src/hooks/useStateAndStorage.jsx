import React from "react";

export default function useStateAndStorage(defaultState,key){

    const [State,setState] = React.useState( ()=>{
        const data = localStorage.getItem(key);
        if (data){
            return JSON.parse(data)
        }
        else{
            return defaultState;
        }
    });
    const debauncingTO_Ref = React.useRef();
    React.useEffect( ()=>{
        if (debauncingTO_Ref.current ) {
            clearTimeout(debauncingTO_Ref.current);
        }
        debauncingTO_Ref.current = setTimeout(()=>{
            localStorage.setItem(key, JSON.stringify(State));
        },3000)

        return ()=>{
            clearTimeout(debauncingTO_Ref.current);
            localStorage.setItem(key, JSON.stringify(State));
        }
        
    },[State]);

    return [State,setState]; 

}