import CustomerForm from "@/components/customer-form"
import NewItemForm from "@/components/item";
import Usr_Menu from "@/components/usr-menu";
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Add Item',
        href: '/item',
    },
];

export default function AddItem() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Usr_Menu />
            <Head title="Add Item" />
          <NewItemForm />
        </AppLayout>
    );
}
