import { JetBrains_Mono } from "next/font/google";
const font = JetBrains_Mono({
  subsets: ["latin", "vietnamese"],
  adjustFontFallback: true,
  display: "swap",
  preload: true,
  style: ["italic", "normal"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <body className={`bg-primary text-white ${font.className}`}>{children}</body>;
}
