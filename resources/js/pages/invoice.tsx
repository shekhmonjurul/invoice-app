import CustomerForm from "@/components/customer-form"
import NewInvoice from "@/components/invoice-from";
import Usr_Menu from "@/components/usr-menu";
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Invoice',
        href: '/invoice',
    },
];

export default function Invoice() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Usr_Menu />
            <Head title="Invoice Add" />
          <NewInvoice/>
        </AppLayout>
    );
}
