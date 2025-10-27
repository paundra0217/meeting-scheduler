import ClientListCard from '@/components/client-list-card';
import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { ClientListCardData, type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Clients',
        href: '/clients',
    },
];

// const clientData: ClientListCardData = {
//     id: '1',
//     name: 'Jane Doe Company',
//     added: '2025-07-15T13:41:00+07:00',
//     edited: '2025-08-22T08:31:00+07:00',
//     upcoming_meetings: 1,
// };

export default function Clients({ status, clients }: { status?: number, clients: ClientListCardData[] }) {
    console.log(status);
    console.log(clients);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Clients" />
            {/* <main className="px-4 py-6">

            </main> */}

            <main className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl px-4 py-6">
                <div className="flex justify-between">
                    <Heading
                        title="Clients"
                        description="Manage list of clients, and their information about the client"
                    />
                    <Button asChild>
                        <Link href={route('clients.add')}>Add Client</Link>
                    </Button>
                </div>
                <div className="flex flex-col gap-4">
                    {
                        clients.length == 0 && (
                            <p className='text-center'>No clients available. Begin by adding the "Add Client" button.</p>
                        )
                    }
                    {clients.map((client) => {
                        return(
                            <ClientListCard data={client} />
                        )
                    })}
                </div>
            </main>
        </AppLayout>
    );
}
