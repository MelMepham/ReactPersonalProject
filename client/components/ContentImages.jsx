import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'


export default function ContentImages ({art, targetArt, setTarget}) {
  return (
  <div className="parentHorizontal">
    <HorizontalScroll>
      <img onClick={() => setTarget(art)} className='art childHorizontal img-responsive' src={art.img}/>
      {targetArt == art && <div>
      <h1>{art.title}</h1>
      <p>{art.about}</p> </div> }
    </HorizontalScroll>
  </div>
  )
}
