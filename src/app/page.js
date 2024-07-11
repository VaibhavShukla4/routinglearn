/** @format */
import dynamic from 'next/dynamic';
// import { ToastProvider } from '@/app/contexts/ToastContext/page';
import NextTopLoader from 'nextjs-toploader';
// Dynamically import HeavyComponent with a loading placeholder
const HeavyComponent = dynamic(() => import('@/app/pages/index'), {
  loading: () => <p>Loading...</p>,
});

// Home component
export default function Home() {
  return (
    <main>
      {/* <ToastProvider> */}
      <NextTopLoader />
      <HeavyComponent />
      {/* </ToastProvider> */}
    </main>
  );
}
