import Image from 'next/image';
import Link from 'next/link';
import user from '@/assets/user.png';

const NavBar = () => {
    return (
        <div className='flex  items-center justify-between mt-7'>
            <div>

            </div>
           
            <div>
                <ul className='flex justify-center text-center gap-3 items-center mx-auto lg:ml-40'>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href='#'>About</Link>
                    </li>
                    <li>
                        <Link href='#'>Career</Link>
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