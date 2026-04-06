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
          
          {/* ワンオペで経営しておりますので、<br></br>
          お客様にはご不便をおかけする事もございますが、
          現在、製造、販売、経理部門のオペレーションをDX構築中です。<br></br>
          一人で何役もこなすのは大変ですが<br></br>頑張って参ります💪 */}

          {/* しばらくの間お休みさせていただきます<br></br>
          前店主の体調不良のため、<br></br>暫くの間お休みさせていただきます。<br></br>
          <br></br>
          ご注文はお受けしておりますので、<br></br>本ページのお問い合わせフォーム<br></br>
          又はお電話にてご連絡ください。<br></br>
          ご迷惑をお掛けしますが、<br></br>何卒よろしくお願いいたします。<br></br> */}
          
          {/* 只今３月の新製品を開発中です📖<br></br> */}

          {/* もうすぐ春ですねぇ〜♫<br></br>
          日に日に暖かくなってきて、春の訪れを感じる今日この頃です🌸<br></br>
          ３月の新製品を発売中です！<br></br> */}

          {/* 諸事情により3/12までお休みさせていただきます。
          尚、ご注文は福屋HPのお問い合わせフォーム又は<br></br>お電話にて承っております。<br></br>
          ご迷惑をお掛けしますが、何卒よろしくお願いいたします。🙇<br></br> */}

          {/* 閉店中はご迷惑をお掛けしましたが、<br></br>
          3月12日(木)から営業を<br></br>再開いたしました。<br></br>
          営業時間は0:00pm 〜 18:00pm<br></br>となります。<br></br>
          また引き続きご愛顧賜りますよう<br></br>宜しくお願い致します。🙇 */}

          ４月の新製品ができ上がりました❗️<br></br>
          上記リンク先のHPでご確認ください。

          
          <br></br>
          <br></br>
          <span className="font-bold">手作り和菓子🍡 福屋 店主</span>
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