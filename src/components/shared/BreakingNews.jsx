import { tr } from "date-fns/locale";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex items-center gap-5 bg-gray-100 p-4 rounded-sm">
            <button className='bg-pink-600 btn text-white  rounded block '>Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
                <p className="text-lg font-medium text-gray-800">Breaking News: Dragon News Portal Launches New Mobile App for Seamless News Access!.............</p>
            </Marquee>
            
        </div>
    );
};

export default BreakingNews;