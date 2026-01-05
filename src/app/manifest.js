import  { MetadataRoute } from 'next'
 
export default function manifest(){
  return {
    name: 'Fukuya Blog test app', // アプリケーションの説明文
    start_url: '/',  // アプリ起動時に開くパス
    display: 'standalone', // アプリケーションの表示モードを指定する
    display: 'standalone',
    background_color: '#ffffff',　// コンテンツ表示されるまでの背景色
    theme_color: '#000000',       // ブラウザのアドレスバーやステータスバーの色
    icons: [　                    // ホーム画面に表示させるicon画像
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
