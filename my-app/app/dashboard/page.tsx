import { createClient } from '@/utils/supabase/server'
import { logout } from '@/actions/auth'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const { data: announcements } =
    await supabase.from('announcements').select()

  return (
    <div className="p-10">
      <h1 className="text-xl font-bold">
        Welcome, {user.email}
      </h1>

      <form action={logout} className="mt-4">
        <button className="bg-red-600 text-white px-4 py-2">
          Logout
        </button>
      </form>

      <div className="mt-6 space-y-4">
        {announcements?.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded"
          >
            <h2 className="font-semibold">
              {item.title}
            </h2>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
