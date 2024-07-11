import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <main>
      <Suspense fallback={<OptimisticUi />}>{children}</Suspense>
    </main>
  );
}

function OptimisticUi() {
  return (
    <div className="animate-pulse max-w-screen-xl mx-auto">
      <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
    </div>
  );
}
