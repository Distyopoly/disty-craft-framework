
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <>
            <p>Session PIN: 1234</p>
            {children}
        </>
    )
}