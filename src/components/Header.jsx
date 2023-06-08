import React from 'react'


export const Header = () => {
  return (
    <div>
        <nav className="navbar bg-primary">
            <div className="container-fluid">
                <span className="navbar-brand mx-5 mb-0 h1" style={{color: "white",fontSize: "1.8rem" }} >Todo List App</span>
            </div>
        </nav>
    </div>
  )
}

export default Header;
