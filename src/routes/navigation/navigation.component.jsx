import {Fragment} from 'react'
import {Link} from 'react-router-dom'
import './navigation.style.scss'
const Navigation =()=>{
    return(
        <>
        <Fragment>
            <div className='navigation-container'>
                <Link className='logo-container' to='/'><div className='logo'>logo</div></Link>
                <div className='nav-links-container'>
                    <Link className='nav-link link' to='/shop'>Shop</Link>
                    <Link className='contact-link link' to='/contact'>Contact</Link>
                    <Link className='Sign link' to='/sign'>Sign in</Link>
                    <Link className='cart link' to='/sign'>Cart</Link>

                </div>
            </div>
        </Fragment>
        </>
    )
}
export default Navigation;