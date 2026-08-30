'use client';
import { ToastProvider } from '@/components/ui/ToastContext';
import { ThemeProvider } from './theme-provider';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
        >
        {children}
      </ThemeProvider>
    </ToastProvider>
  );
}
export default Providers;
