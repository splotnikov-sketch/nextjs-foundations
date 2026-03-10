import { ClientEnvDisplay } from '@/components/client-env-display';
import { ServerEnvDisplay } from '@/components/server-env-display';

export default function EnvDemoPage() {
  return (
    <main className="flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Environment Variable Demo</h1>
      <ServerEnvDisplay />
      <ClientEnvDisplay />
    </main>
  );
}
