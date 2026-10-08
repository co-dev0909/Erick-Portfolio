import './globals.css';

export const metadata = {
  title: 'Erick Ramos — Software Engineer',
  description: 'Erick Ramos is a software engineer based in Plano, Texas. Explore his experience at McKinsey, Alkami Technology, and GitHub, and his education at the University of North Texas.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Erick Ramos — Software Engineer',
    description: 'Software engineer based in Plano, Texas. Experience, education, and contact information.',
    type: 'website',
  },
};

export const viewport = { themeColor: '#f7f8fa' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
