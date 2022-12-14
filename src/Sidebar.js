import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"

function Sidebar() {
    const recentitems=(item)=>(
        <div className="sidebar__recentitems">
            <span className="hashtag">#</span>
            <p>{item}</p>
        </div>
    )
    return (
      
        
    <div className='sidebar'>
          <div className="sidebar__top">
              <img src="data:image/jpeg;base64,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" alt="" />
              <Avatar className='sidebar__avatar'/>
              <h2>Amnauel tarkegn</h2>
              <h4>amantarekgn01@gmail.com</h4>
          </div>
          <div className="sidebar__stats">
              <div className="sidebar__stat">
                  <p>who viewed you</p>
                  <p className='sidebar__statNumber'>2,454</p>
              </div>
              <div className="sidebar__stat">
                  <p>View on post</p>
                  <p className='sidebar__statNumber'>2,454</p>
               </div>
          </div>
          <div className="sidebar__bottom">
                <p>Recent</p>
                {recentitems("react")}
                {recentitems("angular")}
                {recentitems("vuejs")}
                {recentitems("react")}
            </div>
             <div className="sidebar__bottom">
                <p>Recent</p>
                {recentitems("react")}
                {recentitems("angular")}
                {recentitems("vuejs")}
                {recentitems("react")}
          </div>
    </div>
  )
}

export default Sidebar
