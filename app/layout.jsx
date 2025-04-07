import './globals.css';
import { inter } from './components/Fonts';
import { AuthProvider } from './lib/auth';
import { Toaster } from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const inter = Inter({
//   subsets: ['latin'],
//   variable: '--font-inter',
//   display: 'swap',
// });

// Sunucu başlangıcında kuyruk işleyicilerini başlat
import './api/queue-worker/route';

export const metadata = {
  title: 'WhatsApp Teknoloji',
  description: 'WhatsApp işletme hesapları çözümleri',
  manifest: '/manifest.json',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={inter.variable}>
      <body>
        <AuthProvider>
          <Toaster position="top-right" />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}