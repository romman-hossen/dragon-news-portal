import LeftSideBar from '@/components/home/LeftSideBar';
import NewsBar from '@/components/home/NewsBar';
import RightSideBar from '@/components/home/RightSideBar';
import { getCategoryNews, getData } from '@/lib/data';
import React from 'react';

const CateGoryIdPage = async({params}) => {
    const { category_Id } =await params;

    const data = await getData();
    const categoryData = await getCategoryNews(category_Id);
    const categories = data.data.news_category;
    const categoryNews = categoryData.data;
   
    return (
        <div className="mt-20 grid grid-cols-8 gap-6 space-y-5">
      <div className=" col-span-2">
       <h2> All Caterogy</h2>
       <LeftSideBar categories={categories} activeId={category_Id}/>
      </div>
      <div className="bg-fuchsia-400 col-span-4">
        Dragon News Home
        <div className='p-5'>
            {categoryNews.length > 0 ? 
              categoryNews.map((news) => <NewsBar key={news._id} news={news} /> ) : <p className='text-center text-2xl mt-20'>No news found for this category.</p>}
        </div>
      </div>
      <div className="col-span-2">
        Login with
        <RightSideBar />
      </div>
    </div>
    );
};

export default CateGoryIdPage;