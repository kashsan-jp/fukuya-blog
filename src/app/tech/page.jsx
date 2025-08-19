import Link from 'next/link'
import React from 'react'

export default function Tech() {

  return (
    <div className='body'>
      <div className='title'>開発ノート</div>
      <p className='text-center text-green-700 sm:text-sm lg:text-xl'>
      開発意図
      </p>
      <div className='mb-10 p-2 border border-solid rounded m-auto lg:w-lg sm:w-sm'>
        当Webアプリは自分自身のWeb技術の向上過程とエラー解決方法を記録に残したく、
        学習も兼ねて技術選定にはNextjsとMongoDBで開発しました。
      </div>
      <p className='text-center text-green-700 sm:text-sm lg:text-xl'>
      プロフィール
      </p>
      <div className='p-2 border border-solid rounded m-auto lg:w-lg sm:w-sm border-green-700'>
        1997年HTMLとMemoアプリでWebコーディングを始め、K-Ash.com を立ち上げる。<br></br>
        2005年にJazz&RockバンドE-Specksを結成しG&Voとして活動を開始する。
        2010年に社会貢献と障害者の社会参加のためにMHPコンサートをスタート、
        プロデュースと楽曲の提供を始める。 <br></br><br></br>
        プログラミングは2017年にSwiftでモバイル開発を始めるが挫折。<br></br>
        やがてコロナ禍に入り、2020年からReactNative,Flutterの
        モバイルアプリ開発を始めると同時に 
        React、Vue、Laravel、Nodejsにも 興味を持ち開発を始める。
        2025年3月に介護福祉関係の会社を退職し、
        現在、個人開発で社会で本当に役にたつWebサービス作りに取り組んでいます。
      </div>
      <Link href="/">
      <div className="text-center text-orange-700 mt-3">戻る</div>
      </Link>
    </div>
  )
}
