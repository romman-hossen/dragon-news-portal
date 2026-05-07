import RightSideBar from "@/components/home/RightSideBar";
import { getNewsDetails } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";

const IdPage =async ({params}) => {
    // console.log(params,'this is id page');
    const {id} = await params;
    // console.log(id,'this is id page');
    const newsDetails = await getNewsDetails(id);
    // const data = newsDetails.data;
    console.log(newsDetails,'this is news details');
    
    return (
        <div className="grid grid-cols-8 mt-8 mb-20 gap-5">
            <div className="col-span-6">
            <h2 className="text-xl mb-5 font-semibold">Dragon News</h2>
            <div className="border border-gray-200 p-5 rounded-lg space-y-5">
                <Image src={newsDetails?.image_url} alt={newsDetails?.title ||"News Image"} width={300} height={300} className="w-full rounded-lgw"/> 
                <h3 className="text-2xl font-extrabold">{newsDetails?.title }</h3>
                <span className="text-gray-500 text-justify block ">
                    {newsDetails?.details}
                </span>
                <Link href={`/category/${newsDetails?.category_id}`}>
                <button className="flex items-center btn bg-pink-600 text-white rounded-lg gap-1"><GoArrowLeft className="text-xl" />
                   Back to  all news in this category</button>
                </Link>

            </div>
            </div>
            <div className="col-span-2">
                 <h2 className='text-xl font-semibold mb-5'>Login with</h2>
                
                <RightSideBar />
            </div>

        </div>
    );
};

export default IdPage;