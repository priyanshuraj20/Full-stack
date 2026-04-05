import React from 'react'
import RightCard from './RightCard';

const RightContent = (props) => {
  return (
    <div id='right' className="h-full p-6 w-2/3 flex flex-nowrap overflow-x-auto gap-10">
      {props.users.map((e,id)=>{
        return <RightCard key={id}image ={e.image} tag={e.tag} id={id}/>
      })} 
    </div>
  );
}

export default RightContent
