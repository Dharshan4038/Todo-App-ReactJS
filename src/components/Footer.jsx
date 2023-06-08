import React from 'react'

export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright &copy; {year} </p>
        </footer>
    )
}

export default Footer;