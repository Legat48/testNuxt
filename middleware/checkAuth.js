export default function ({ redirect, app }) {
  const cookieRes = app.$cookies.get('login')
  if (!cookieRes) {
    redirect('/admin/login')
  }
}
