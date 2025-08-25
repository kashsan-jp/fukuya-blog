import PostCard from "@/components/PostCard";
import { getCollection } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  const postsCollection = await getCollection('posts')
  const posts = await postsCollection?.find().sort({ $natural: -1}).toArray()

  // console.log(posts)

  if(posts){
    return ( 
      <>
      <div className="mb-10 text-center">
        <h1 className="title"> <span className="text-red-500"></span>手作りの味 福屋</h1>
        <p className="text-green-700 mb-10">
        手作り和菓子<br></br>
        福屋のブログページ
        </p>
          {/* <Link href="tech">
          <div className="text-red-500 font-bold font-serif font-lg">Tech Memo</div>
          </Link>  */}
      </div>
      <div className="hidden sm:block">
        <p className="text-center">スマホ専用</p>
        <Image
            priority
            src="/QR_nextjs_blog.png" //配置した画像のパスを記述する。
            alt="smart-phone-site"
            width={100}
            height={100}
            className="mx-auto mb-10"
          />
      </div>
      <div className="text-center rounded mb-5 m-auto border border-red-800 text-white bg-red-800 w-60">
        <a href="https://www.k-ash.com/fukuya" target="_blank">
        福屋のホームページはこちら➡️
        </a>
      </div>
      <div className="m-auto w-full mb-10 bg-white p-5 text-slate-600 rounded">
        <h1 className="mb-5 font-semibold text-xl">毎度ありがとうございます☺️</h1>
        <p className="break-words text-base text-slate-800">
          この度店主が体調不良のため、
          当分の間、店舗営業はおやすみさせていただきます。
          <br></br>
          なおご注文は上記の福屋のHPからお受けさせていでたたくことができますので、宜しくお願い致します。
          なおブログ登録していただいた皆様には特別にご注文連絡先をお知らせ致します。
          <br></br>
          今後の詳細はこのブログ上でお知らせいたします。
        </p>
      </div>
      <div className="mx-auto text-center bg-red-800 text-white mb-10 w-3/4 border border-red-800 rounded">
        <a href="mailto:wagashi_fukuya@yahoo.co.jp">
          福屋へメール✉️で連絡する
        </a>
      </div>
      <div className="text-center rounded mb-5 m-auto border border-green-800 text-white bg-green-800 w-60">
        ブログ
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6 w-full">
        {
          posts.map((post) => (
              <div key={post._id} className="">
                <PostCard post={post}/>
              </div>
          ))}
      </div>
      </>
    );
  } else {
    return <p>Failed to fetch the data from database</p>;
  }
}