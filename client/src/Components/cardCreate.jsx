import React from 'react';

const CardCreate = ({ id, url, Arther,click,styler }) => {
  return (
    <>
   <div className='cardCover' onClick={click} style={styler}>

        <div className='image'><img src="/images/new.PNG"/></div>
        <h4>{Arther}</h4>
        <h5>or try a <span style={{ color: 'rgb(250, 120, 47)' }}>sample project</span></h5>
        <div className='readDel'>
        <h5 style={{cursor:'pointer'}}>Read More-></h5>
        <h5 style={{color:'red',cursor:'pointer'}}>Delete</h5>
        </div>
      </div>
    </>
  );
};

export default CardCreate;
