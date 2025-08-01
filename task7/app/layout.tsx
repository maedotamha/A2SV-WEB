import './globals.css';
import ProviderWrapper from './Redux/ProviderWrapper';


export const metadata = {
  title: 'My Job App',
  description: 'A simple job listing platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ProviderWrapper>
          {children}
        </ProviderWrapper>
      </body>
    </html>
  );
}