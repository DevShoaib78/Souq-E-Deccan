import { redirect } from 'next/navigation'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import AdminDashboard from './components/AdminDashboard'

export default async function AdminPage() {
  const supabase = await createServerSupabaseClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect('/admin/login')
  }

  return <AdminDashboard userEmail={user.email || 'Admin'} />
}



