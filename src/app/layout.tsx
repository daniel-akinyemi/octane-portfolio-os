import Navbar from '../../components/Navbar'
import './globals.css'
import {IBM_Plex_Mono} from '@next/font/google'

const plexMono = IBM_Plex_Mono({
  subsets:['latin'],
  weight:['200','300','400','500','600','700']
})

export const metadata = {
  title: 'Daniel Akinyemi - Portfolio',
  description: 'Daniel Akinyemis portfolio website.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-[#080808] ${plexMono.className} scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-slate-700`}>
      <Navbar/>
        {children}</body>
    </html>
  )
}
