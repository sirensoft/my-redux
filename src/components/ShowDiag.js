import React from 'react';


const ShowDiag =(props)=>(
    <ul>
    {
    props.data.map((d,i)=>(
        <li key={i}>{i}) {d.code}==={d.name}</li>
    ))
    }
   
    </ul>
   
)


export default ShowDiag;
