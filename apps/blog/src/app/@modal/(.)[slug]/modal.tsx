// /apps/blog/src/app/@modal/(.)[slug]/modal.tsx

'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export function PostModal({
  slug,
  title,
  children,
}: {
  slug: string;
  title: string;
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <Dialog defaultOpen={true} onOpenChange={() => router.back()} open={true}>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        {children}

        <div className="mt-2 border-t pt-4">
          <Link
            className="text-blue-600 text-sm hover:underline"
            href={`/${slug}`}
          >
            Read full post →
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
