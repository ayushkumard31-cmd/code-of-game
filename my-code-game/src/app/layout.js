import "./globals.css";
import "./responsive-platform.css";
import FirebaseAnalytics from "./FirebaseAnalytics";
import PWAInstaller from "./PWAInstaller";

export const viewport = {
  themeColor: "#a9ff43",
};

export const metadata = {
  title: "DSA Dungeon | C Programming & DSA Game",
  description: "Master data structures and C programming in a high-stakes coding dungeon.",
  manifest: "/manifest.json",
  icons: { icon: "/icon.svg", shortcut: "/icon.svg", apple: "/icon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FirebaseAnalytics />
        <PWAInstaller />
        {children}
      </body>
    </html>
  );
}
