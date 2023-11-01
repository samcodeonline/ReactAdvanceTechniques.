import  MyContext  from '@/Helper/Context'
import './globals.css'

export const metadata = {
  title: 'Context',
  description: 'Home page',
}

export default function RootLayout({ children }) {
  MyContext
  return (
    <html lang="en">
      <body suppressHydrationWarning>
          <MyContext>
            {children}
          </MyContext>
        </body>
    </html>
  )
}
