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
       <h2 className='text-xl font-semibold mb-5'> All Category</h2>
       <LeftSideBar categories={categories} activeId={category_Id}/>
      </div>
      <div className=" px-5 col-span-4">
      <h2 className='text-xl font-semibold mb-5'>Dragon News Home</h2>
        <div >
            {categoryNews.length > 0 ? 
              categoryNews.map((news) => <NewsBar key={news._id} news={news} /> ) : <p className='text-center text-2xl mt-20'>No news found for this category.</p>}
        </div>
      </div>
      <div className="col-span-2">  
        <h2 className='text-xl font-semibold mb-5'>Login with</h2>
        <RightSideBar />
      </div>
    </div>
    );
};

export default CateGoryIdPage;