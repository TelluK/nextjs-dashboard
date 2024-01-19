import DashboardSkeleton from '@/app/ui/skeletons';

// stream the whole page with loading.tsx
// loading.tsx is special Next.js file built on top of Suspense,
// it allows fallback UI to show as a replacement while page content loads

export default function Loading() {
  return <DashboardSkeleton />;
}
