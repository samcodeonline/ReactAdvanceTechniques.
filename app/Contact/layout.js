export const metadata = {
    title: 'Contact',
    description: 'Home page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>Welcome to the contact page{children}</body>
    </html>
  )
}