import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'

const Content = (props) => {



    return (
      <div className="parentHorizontal">
        <HorizontalScroll>
            <div className='childHorizontal'>Hello</div>
              <div className='childHorizontal'>Hello</div>
                <div className='childHorizontal'>Hello</div>
                  <div className='childHorizontal'>Hello</div>
                    <div className='childHorizontal'>Hello</div>
                      <div className='childHorizontal'>Hello</div>
                        <div className='childHorizontal'>Hello</div>
                          <div className='childHorizontal'>Hello</div>
                            <div className='childHorizontal'>Hello</div>
                              <div className='childHorizontal'>Hello</div>
                                <div className='childHorizontal'>Hello</div>
                                  <div className='childHorizontal'>Hello</div>


        </HorizontalScroll>
      </div>
    )

}

export default Content
