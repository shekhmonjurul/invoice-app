import { AppSidebar } from '@/components/app-sidebar';
import DarkChart from '@/components/chart';
import TotalReceivables from '@/components/total-receivables';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import Usr_Menu from '@/components/usr-menu';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <Usr_Menu  />
            <div className='grid grid-rows-2 gap-4'>
                <TotalReceivables />
                <DarkChart />
            </div>
        </AppLayout>
    );
}
