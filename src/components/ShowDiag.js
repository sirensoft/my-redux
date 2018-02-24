import React from 'react';


const ShowDiag =(props)=>(
    <div>
    {
    props.data.map((d,i)=>(
        <li key={i}>{d.code}==={d.name}</li>
    ))
    }
   
    </div>
   
)


export default ShowDiag;
