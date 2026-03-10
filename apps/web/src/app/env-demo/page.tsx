// /apps/web/src/app/env-demo/page.tsx

import { ClientEnvDisplay } from '@/components/client-env-display';
import { Collapsible } from '@/components/collapsible';
import { ServerEnvDisplay } from '@/components/server-env-display';
import { ThemeToggle } from '@/components/theme-toggle'

export default function EnvDemoPage() {
  return (
    <main className="flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Environment Variable Demo</h1>
      <ThemeToggle />
       <Collapsible title="Server-Rendered Content">
        <ServerEnvDisplay />
      </Collapsible>
      <ClientEnvDisplay />
    </main>
  );
}
