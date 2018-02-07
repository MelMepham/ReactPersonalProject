import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'


export default function ContentImages ({art, targetArt, setTarget}) {
  return (

  <div className="parentHorizontal">
    <HorizontalScroll className='inline'>
      <img className='art childHorizontal img-responsive'onClick={() => setTarget(art)} src={art.img}/>
  {targetArt == art && <div>
        <h1>{art.title}</h1>
        <p>{art.about}</p> </div> }
    </HorizontalScroll>
  </div>
  )
}
