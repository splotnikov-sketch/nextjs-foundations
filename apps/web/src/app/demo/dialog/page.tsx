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

function getTermsContent(): string {
  return `By using this service, you agree to our terms. Last updated on ${new Date().toLocaleDateString()}.`;
}

export default function DialogDemoPage() {
  const termsContent = getTermsContent();

  return (
    <main className="flex flex-col gap-8 p-8">
      <div>
        <h1 className="font-bold text-2xl">Dialog Compound Component</h1>
        <p className="mt-2 text-gray-500">
          Compound API with server-rendered content inside client dialog.
        </p>
      </div>

      {/* Confirmation dialog */}
      <section className="rounded-lg border p-6">
        <h2 className="mb-4 font-semibold text-lg">Confirmation Dialog</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button type="button" variant="destructive">Delete Account</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. Your account and all data will be permanently deleted.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="button" variant="destructive">Delete</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>

      {/* Server content inside dialog */}
      <section className="rounded-lg border p-6">
        <h2 className="mb-4 font-semibold text-lg">Server Content in Dialog</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button type="button" variant="outline">View Terms</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Terms of Service</DialogTitle>
              <DialogDescription>Please read these terms carefully.</DialogDescription>
            </DialogHeader>
            <div className="rounded-md bg-muted p-4 text-sm">
              {termsContent}
            </div>
            <DialogFooter showCloseButton />
          </DialogContent>
        </Dialog>
      </section>
    </main>
  );
}