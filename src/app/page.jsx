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
            src="/fukuya_qrcode.png" //配置した画像のパスを記述する。
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
      <div className="text-center m-auto xl:w-1/2 w-full mb-10 bg-white p-5 text-slate-600 rounded">
        <h1 className="mb-5 font-semibold text-xl">お知らせ 📺</h1>
        
        <p className="break-words text-base text-slate-800">

          {/* 営業を再開しました。<br></br>
          12月30日から営業を再開致しました。<br></br>
          年末年始は1月1日から1月3日までお休みを頂きます。<br></br>
          来年もどうぞよろしくお願い致します。<br></br> */}

          {/* 明けましておめでとうございます㊗️<br></br>
          今年も御菓子司福屋を<br></br>どうぞよろしくお願い致します<br></br>
          <br></br> */}

          {/* この福屋ブログはアプリとして<br></br>使えるようになりました📱<br></br>
          どうぞご利用くださいませ<br></br><br></br>
          iPhoneの方は → 共有 → <br></br>ホーム画面に追加<br></br><br></br>
          Androidoの方は → メニュー → <br></br>ホーム画面に追加 → インストール<br></br><br></br> */}
          
          ワンオペで経営しておりますので、<br></br>
          お客様にはご不便をおかけする事もございますが、<br></br>
          只今、製造、販売、経理部門のオペレーションをDX構築しています。<br></br>
          一人で何役もこなすのは大変ですが頑張って参ります💪

          手作り和菓子 福屋 店主
        </p>
      </div>
      <div className="mx-auto text-center bg-red-800 text-white mb-10 sm:w-1/6 lg:w-1/4 border border-red-800 rounded">
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