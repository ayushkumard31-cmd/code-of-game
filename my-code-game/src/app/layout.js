import "./globals.css";

export const metadata = {
  title: "DSA Dungeon | C Programming Game",
  description: "Master data structures and C programming in a high-stakes coding dungeon.",
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
