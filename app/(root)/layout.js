import '../globals.css'
import Header from '@/components/Layout/header';
import Footer from '@/components/Layout/footer'
import { ClerkProvider } from '@clerk/nextjs'
import { Suspense } from 'react'
import Loading from './loading'
import { Bowlby_One, Architects_Daughter} from "next/font/google";
import InfoBar from '@/components/Layout/InfoBar'     

const bowlbyOne = Bowlby_One({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bowlby'
})

const architectsDaughter = Architects_Daughter({
  weight: '400', 
  subsets: ['latin'],
  variable: '--font-architects'
})

export const metadata = {
  title: 'Rettungsanker-Freiburg',
  description: 'die kiezkneipe im herzen von freiburg - news, events und mehr!',

}

export default function RootLayout({ children }) {

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${bowlbyOne.variable} ${architectsDaughter.variable}  antialiased`}>
          <Header />
          <InfoBar />
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
