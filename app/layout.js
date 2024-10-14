
import { Inter, Poppins } from "next/font/google";
import "/styles/globals.css";
import ThemeProvider from "./ThemeProvide";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "SnapStay-Your Home Away From Home!",
  description: "Book Unique Homes, Apartments, and Experiences with SnapStay!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.className} bg-white dark:bg-gray-950`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeSwitcher />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
