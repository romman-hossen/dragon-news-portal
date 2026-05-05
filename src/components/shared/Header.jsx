import logo from '@/assets/logo.png';
import { format } from 'date-fns';
import Image from 'next/image';

const Header = () => {
    const today = new Date();
    return (
        <div className='my-10 space-y-5'>
            <Image className='mx-auto' src={logo} alt="Logo Dragon News" width={300} height={200} /> 
            <div className='text-center space-y-2.5'>
            <p className=' text-gray-500 text-lg'>Journalism Without Fear or Favour</p>
            <div className='text-lg text-gray-500 r'>
                {/* {format(new Date(), `${<span>EEEE,</span>} MM/dd/yyyy`)} */}
                <span className='font-medium text-gray-700'>{format(today,"EEEE")},</span> {format(today,"MMM dd,yyyy")}
            </div>

            </div>
            
        </div>
    );
};

export default Header;