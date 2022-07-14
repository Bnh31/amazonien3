import {Fragment} from 'react'
import {Link} from 'react-router-dom'
const Navigation =()=>{
    return(
        <>
        <Fragment>
            <div className='navigation-container'>
                <Link className='logo-container' to='/'><div className='logo'>logo</div></Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>Shop</Link>

                </div>
            </div>
        </Fragment>
        </>
    )
}
export default Navigation;