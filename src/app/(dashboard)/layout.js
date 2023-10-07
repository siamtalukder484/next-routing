
import Navbar from '@/components/dashboard/Navbar'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Routing',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
          {children}
          <h1>This is dashboard footer</h1>
      </body>
    </html>
    </>
  )
}