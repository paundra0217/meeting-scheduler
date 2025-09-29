import Heading from '@/components/heading';
import AppLayout from '@/layouts/app-layout';
import { ClientData, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Clients',
        href: '/clients',
    },
    {
        title: 'View Client',
        href: '',
    },
];

export default function ViewClient({ client }: { client: ClientData }) {
    console.log(client);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={client.name} />
            {/* <main className="px-4 py-6">

            </main> */}

            <main className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl px-4 py-6">
                <div className="flex justify-between">
                    <Heading title={client.name} />
                </div>
            </main>
        </AppLayout>
    );
}
