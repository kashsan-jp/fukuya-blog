import React from 'react'
import { links } from './links'

const jsonLinks = links

export default function Link() {
  return (
    <>
     <div className='body'>
      <div className='title'>
      開発サイト
      </div>
      <p className='text-center text-green-700 mb-3 lg:text-xl sm:text-sm'>
      サイト名をクリックするとリンク先に遷移します
      </p>
      <table>
        <thead>
            <tr>
                <th className='w-1.5/6 bold'>製作年</th>
                <th className='w-3.5/6'>サイト名</th>
                <th className='w-2/6'>使用技術</th>
            </tr>
        </thead>
        <tbody>
            {jsonLinks.map((link) => (
                <tr key={link.id}>
                    <td className='text-green-500 sm:text-sm lg:text-base'>{link.date}</td>
                    <td className='text-red-500 sm:text-sm lg:text-base'><a href={link.url}>{link.siteName}</a></td>
                    <td className='text-slate-500 sm:text-sm lg:text-base'>{link.comment}</td>
                </tr>
            ))
            }
        </tbody>
        
      </table>
    </div>
    </>
  )
}
