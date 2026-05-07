
import { getCategoryNews } from "@/lib/data";
import Marquee from "react-fast-marquee";
import { TbReportSearch } from "react-icons/tb";

const BreakingNews =async () => {
    const data = await getCategoryNews('01');
    const news = data.data;
    // console.log(, "this is breaking news");
    return (
        <div className="flex items-center gap-5 bg-gray-100 p-4 rounded-sm">
            <button className='bg-pink-600 btn text-white  rounded block '>Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
                {news.map((news) => <span key={news._id} className="mx-10 flex items-center gap-1"><TbReportSearch className="text-lg"/>Breaking News : {news.title} !!</span>)}
                {/* <p className="text-lg font-medium text-gray-800">{news.title}</p> */}
            </Marquee>
            
        </div>
    );
};

export default BreakingNews;