import '@/styles/globals.css'
import Sidebar from '../components/SideBar'

export default function App({ Component, pageProps }) {
  return (
  <Sidebar>
  <Component {...pageProps} />
  </Sidebar>
  )
}
