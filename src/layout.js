// src/app/layout.js

export const metadata = {
  title: 'Typing Speed Test',
  description: 'Measure your typing speed in words per minute.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="content">
          {children}
        </div>
      </body>
    </html>
  );
}
