/** @format */
import dynamic from 'next/dynamic';
import Pages from '@/app/pages/index';

// Dynamically import HeavyComponent with a loading placeholder
const HeavyComponent = dynamic(() => import('@/app/pages'), {
  loading: () => <p>Loading...</p>,
});

// Home component
export default function Home() {
  return (
    <main>
      {/* <Pages /> */}
      <HeavyComponent />
    </main>
  );
}
