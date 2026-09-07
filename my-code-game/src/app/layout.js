import "./globals.css";
import FirebaseAnalytics from "./FirebaseAnalytics";

export const metadata = {
  title: "DSA Dungeon | C Programming Game",
  description: "Master data structures and C programming in a high-stakes coding dungeon.",
  icons: { icon: "/icon.svg", shortcut: "/icon.svg", apple: "/icon.svg" },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body><FirebaseAnalytics />{children}</body></html>;
}
