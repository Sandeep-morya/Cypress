import React from 'react'
const Navbar = () => {

    const links=[
        {path:'/', name:'Homepage'},
        {path:'/bollywood', name:'Bollywood Movies'},
        {path:'/hollywood', name:'Hollywood Movies'},
        {path:'/animated', name:'Animated Movies'},
        {path:'/south', name:'South Indian Movies'},
        {path:'/18', name:'18+ Movies'},
    ]
    
  return (
    <div className="navbar">
        {links.map(e=><span key={e.path}>{e.name}</span>)}
    </div>
  )
}

export default Navbar