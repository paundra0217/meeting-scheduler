import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Clients',
        href: '/clients',
    },
];

export default function Clients() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Clients" />
            {/* <main className="px-4 py-6">

            </main> */}

            <main className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex justify-between">
                    <Heading
                        title="Clients"
                        description="Manage list of clients, their information about the client, and the client representatives."
                    />
                    <Button asChild>
                        <Link href={route('clients.add')}>Add Client</Link>
                    </Button>
                </div>
                This is a Clients page.
            </main>
        </AppLayout>
    );
}
