import { Button } from '@repo/ui/components/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@repo/ui/components/dialog';

export default function BlogDialogDemoPage() {
  return (
    <main className="flex flex-col gap-8 p-8">
      <div>
        <h1 className="font-bold text-2xl">Blog: Dialog Demo</h1>
        <p className="mt-2 text-gray-500">
          Same compound component from @repo/ui works in blog app.
        </p>
      </div>

      <section className="rounded-lg border p-6">
        <h2 className="mb-4 font-semibold text-lg">Newsletter Signup</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button type="button">Subscribe to Newsletter</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Join Our Newsletter</DialogTitle>
              <DialogDescription>
                Get the latest articles delivered to your inbox.
              </DialogDescription>
            </DialogHeader>
            <form className="flex flex-col gap-4">
              <input
                className="rounded-md border bg-background px-3 py-2 text-sm"
                placeholder="your@email.com"
                type="email"
              />
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="submit">Subscribe</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </section>
    </main>
  );
}
