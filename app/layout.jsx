import './globals.css';

export const metadata = {
  title: 'Municipalidad de Cholchol | EVA 3 Next.js',
  description:
    'Migracion academica a Next.js y React del rediseno frontend de la Municipalidad de Cholchol.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
