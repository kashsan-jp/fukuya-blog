import getAuthUser from '@/lib/getAuthUser'
import NavLink from './NavLink'
import { logout } from '@/actions/auth';

export default async function Navigation() {

    const authUser = await getAuthUser();

    // console.log(authUser);

  return (
    <nav className='h-1 px-0'>
        <div className='lg:mr-150 sm:mr-0'>
            <NavLink label="ホーム" href="/" />
        </div>
            { authUser ? 
                    (
                    <div className='flex items-center sm:text-sm lg:text-lg sm:gap-0 lg:gap-3'>
                        <NavLink label="投稿する" href="/posts/create" />
                        {/* <NavLink label="Dashboard" href="/dashboard" /> */}
                        <form action={logout}>
                            <button className='nav-link'>ログアウト</button>
                        </form>
                    </div>
                    ) : (
                    <div className='flex items-center sm:text-xs lg:text-lg sm:gap-0 lg:gap-3 py-0'>
                        <NavLink label="登録する" href="/register" />
                        <NavLink label="管理者用" href="/login" />
                        {/* <NavLink label="Tech Memo" href="/tech" />
                        <NavLink label="Link" href="/link" /> */}
                    </div>
                )}
    </nav>
  );
}
