"use client"

import { login } from '@/actions/auth';
import Link from 'next/link'
import { useActionState } from 'react'

export default function Login() {

  const [state, action, isPending] = 
    useActionState(
      login, 
      undefined
    );

  // console.log(isPending);

  return (
    <>
    <div className='text-center mb-5 text-orange-700'>管理者専用ログインページ</div>
    <div className='container lg:w-1/2 sm: min-width: 90%'>
        <h1 className='title'>ログイン</h1>

        <form action={action} className='space-y-4'>
          <div>
            <label htmlFor="email">Eメール</label>
            <input type='text' name='email' defaultValue={state?.email}/> 
            {state?.errors?.email && (
              <p className='error'>{state.errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="password">パスワード</label>
            <input type='text' name='password' /> 
            {state?.errors?.password && (
              <p className='error'>{state.errors.password}</p>
            )}
            
          </div>

          <div className='flex items-ends gap-4'>
            <button 
              className='btn-primary'
              disabled={isPending}>
              { isPending ? "Loading..." : "ログイン"}
              </button>
            {/* <Link href="/register" className='text-link'> 
            or 登録</Link> */}
          </div>
        </form>
    </div>

    </>
    
  )
}
