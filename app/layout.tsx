import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import "./globals.css";
import { Header } from './components/elements/header/Header';
import { AxiosErrorHandleProvider } from './hooks/AxiosErrorHandleProvider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "feature call",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body>
        <AppRouterCacheProvider>
          <Header />
          <AxiosErrorHandleProvider>
            {children}
          </AxiosErrorHandleProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
