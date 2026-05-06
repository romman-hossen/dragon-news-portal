import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa6";

const NewsBar = ({ news }) => {
  console.log(news, "this is news bar");
  return (
    <div className="my-5">
      <div className="card bg-base-100 shadow-sm">
        <div className="flex justify-between items-center bg-gray-100 p-4 rounded-tl-lg rounded-tr-lg">
          <div className="flex items-center gap-3">
            <Image
              src={news.author?.img}
              alt={news?.author?.name || "Reporter image"}
              height={40}
              width={40}
              className="rounded-full "
            />
            <div>
              <h3 className="font-semibold">{news.author?.name}</h3>
              <p className="text-gray-500">{news.author?.published_date}</p>
            </div>
          </div>
          <div className="text-2xl flex gap-3 items-center text-gray-500">
            <CiShare2 />

            <CiBookmark />
          </div>
        </div>
        <div className="card-body p-4 border border-gray-200 border-t-0">
          <h2 className="text-xl font-bold">{news.title}</h2>
          <figure>
            <Image
              src={news.image_url}
              alt={news?.title || "News image"}
              height={300}
              width={500}
              className="rounded-lg w-full mt-5"
            />
          </figure>
          <div>
            <p className="text-gray-500 text-lg line-clamp-3">{news.details}</p>
            <Link href="/ids">
            <button className="text-orange-400 cursor-pointer text-lg font-semibold">Read More </button>
            </Link>
          </div>
          <div className="border-b-2 border-gray-100"></div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
                <FaStar className="text-yellow-400 text-lg" />
                <h3 className="text-gray-500 font-medium">{news.rating?.number}</h3>
            </div>
            <div className="flex items-center gap-3 text-gray-500">
                <FaEye className="text-lg" />
                <h3 className="font-medium">{news?.total_view}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsBar;
