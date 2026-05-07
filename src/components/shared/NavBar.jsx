import Image from 'next/image';
import user from '@/assets/user.png';
import NavLink from './NavLink';

const NavBar = () => {
    return (
        <div className='flex  items-center justify-between mt-7'>
            <div>

            </div>
           
            <div>
                <ul className='flex justify-center text-center gap-3 items-center mx-auto lg:ml-40'>
                    <li>
                        <NavLink href='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink href='/about-us'>About</NavLink>
                    </li>
                    <li>
                        <NavLink href='/career' className="text-yellow-300">Career</NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex items-center justify-center  gap-3'>
                <Image src={user} alt='User'/>
                <button className='px-10 py-4 bg-black/50 text-white cursor-pointer font-semibold'>Login</button>

            </div>
            
        </div>
    );
};

export default NavBar;