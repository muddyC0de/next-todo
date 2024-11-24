import { poppins } from "@/components/ui/fonts";
import "./globals.css";

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html suppressHydrationWarning>
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}
