import React from 'react'
import Header from './header'

const Cover = () => {
  return (
    <div className='cover'>
        <div className='coverlft'>
            <div className='logo'>Necleo</div>
            <hr/>
            <div className='lftCol'>
            <div className='colTop'>
            <h3>My Projects</h3>
                <h3 style={{color:"rgb(250, 120, 47)"}}>Sample Projects</h3>
                <hr/>
                <h3>Apps</h3>
                <h3>Intro to Necleo</h3>
            </div>
               <div className='colBottom'>
               <h3>Help and Support</h3>
                <h3>FeedBacks</h3>
                <h3>Collapse</h3>
               </div>
               <div>

               </div>
                

            </div>
        </div>
        <div className='coverrft'>
            <div>
            <Header/>
            </div>
            <div className='content'></div>
        </div>
    </div>
  )
}

export default Cover