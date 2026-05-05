import LeftSideBar from "@/components/home/LeftSideBar";

async function getData(){
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json();
  return data;
}


export default async function Home() {
    const data = await getData();
    const categories = data.data.news_category;
    console.log(categories);
    const activeId='01';
    

  return (
    <div className="mt-20 grid grid-cols-8 gap-6 space-y-5">
      <div className=" col-span-2">
       <h2> All Caterogy</h2>
       <LeftSideBar categories={categories} activeId={activeId}/>
      </div>
      <div className="bg-fuchsia-400 col-span-4">
        Dragon News Home
      </div>
      <div className="bg-fuchsia-100 col-span-2">
        Login with
      </div>
    </div>
  );
}
