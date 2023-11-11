import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { revenue } from '../lib/placeholder-data';
import { fetchLatestInvoices, fetchCardData } from '../lib/data';
import { Suspense } from 'react';
import { RevenueChartSkeleton } from '../ui/skeletons';
import { log } from 'console';
 
export default async function Page() {
  const latestInvoices = await fetchLatestInvoices()
  const data = await fetchCardData()
 

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {<Card title="Collected" value={data.totalPaidInvoices} type="collected" />}
        <Card title="Pending" value={data.totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={data.numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={data.numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton/>}>
        {<RevenueChart/>}
        </Suspense>
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}