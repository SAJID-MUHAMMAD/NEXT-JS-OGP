
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import "./globals.css";



export const metadata = {
  title: " Next js project",
  description: "sajid",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
