import React, { Suspense, lazy } from 'react';
const MainRoutes = lazy(() => import('./Routes/MainRoutes'));
export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainRoutes />
    </Suspense>
  );
}
