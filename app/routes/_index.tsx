import type { MetaFunction } from "@remix-run/node";
import { ClientOnly } from "remix-utils/client-only";

import LeafletMap from "~/components/LeafletMap.client";

export const meta: MetaFunction = () => [{ title: "山口市マップ" }];

export default function Index() {
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="mx-auto">
        <ClientOnly>{() => <LeafletMap />}</ClientOnly>
      </div>
    </main>
  );
}
