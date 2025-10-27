import Heading from '@/components/heading';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Configuration',
        href: '/configuration',
    },
];

export default function Configuration() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Clients" />
            {/* <main className="px-4 py-6">

            </main> */}

            <main className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex justify-between">
                    <Heading
                        title="Application Configuration"
                        description="Manage settings and configuration of the entire application and its features. This is not the page for configuring account settings."
                    />
                </div>
                This is a Application Configuration page.
            </main>
        </AppLayout>
    );
}
