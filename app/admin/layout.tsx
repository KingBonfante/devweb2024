export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <html lang="en">
            <body className="bg-green">
                {children}
            </body>
        </html>
    );
  }