import CustomerForm from "@/components/customer-form"
import Usr_Menu from "@/components/usr-menu";
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Coustomer',
        href: '/coustomer',
    },
];

export default function AddCustomer() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Usr_Menu />
            <Head title="Coustomer Add" />
          <CustomerForm />
        </AppLayout>
    );
}
