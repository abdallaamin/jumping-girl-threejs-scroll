import './globals.css'


export const metadata = {
  title: 'jumping girll Next App',
  description: 'react three fiber using next js example ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
