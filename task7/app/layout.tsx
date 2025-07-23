import './globals.css';
import {store} from './Redux/store'
import { Provider } from "react-redux"

export const metadata = {
  title: 'My Job App',
  description: 'A simple job listing platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store = {store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}