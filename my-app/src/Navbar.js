import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className='navbar'>
            <h1>the pig house</h1>
            <div className='links'>
                <Link to='/'>Home</Link>
                <Link href='/create'>New blog</Link>


            </div>
        </nav>
     );
}
 
export default  Navbar;