import "./globals.css";
import { Poppins } from 'next/font/google';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['200', '400', '700'],
});

//Google Fonts
// const myFont = localFont({src: [
//     {
//       path: "../fonts/Poppins-Bold.ttf",
//       weight: '600',
//       style: 'bold'
//     },
//       {
//       path: "../fonts/Poppins-Light.ttf",
//       weight: '200',
//       style: 'light'
//     },
//   ],
// });

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={
        `${poppins.variable} font-sans`
        }>
        <header>
          <nav>
            <Navigation/>
          </nav>
        </header>
          <main>
            {children}
          </main>
        <Footer />
      </body>
    </html>
  );
} 
