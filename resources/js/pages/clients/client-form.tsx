import Heading from '@/components/heading';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import AppLayout from '@/layouts/app-layout';
import { ClientData, type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import axios from 'axios';
import { FormEventHandler, useEffect, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Clients',
        href: '/clients',
    },
    {
        title: 'Add Client',
        href: '/clients/add',
    },
];

type CountryCode = {
    name: string;
    code: string;
    dial_code: string;
};

// const countryCodeFlagBaseURL = 'https://country-code-au6g.vercel.app/';

// const rawRoute: any = route('');

export default function ClientForm({ id, clientData }: {id: number, clientData?: ClientData}) {
    // const { auth } = usePage<SharedData>().props;

    console.log(clientData);
    console.log(id);

    const { data, setData, errors, processing, post, patch } = useForm<Required<ClientData>>({
        id: '',
        name: '',
        address: '',
        email: '',
        phone_code: '',
        phone: '',
    });

    // console.log(auth.user);

    const [countryCodeList, setCountryCodeList] = useState<CountryCode[]>([]);
    const [selectedCountryCode, setSelectedCountryCode] = useState<CountryCode>();
    const defaultCode = 'ID';

    useEffect(() => {
        axios.get(route('api.utility.country-code')).then((response) => {
            const countries = response.data;
            countries.sort(function (a: CountryCode, b: CountryCode) {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
            });
            setCountryCodeList(countries);
        });
    }, []);

    useEffect(() => {
        if (countryCodeList.length > 0) {
            const code = data.phone_code === '' ? defaultCode : data.phone_code;
            const codeObj = countryCodeList.find((d) => d.code == code);
            setSelectedCountryCode(codeObj);
        }
    }, [countryCodeList, data]);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        
        if (id === -1) {
            post(route('api.clients.add'))
        } else {
            patch(route('api.clients.edit'))
        }

    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add Client" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl px-4 py-6">
                <Heading title="Add Client" description="Add client and their information and representatives here." />

                {/* Loading Section */}
                {countryCodeList.length <= 0 && (
                    <div className="max-w-xl space-y-8">
                        <div className="grid gap-2">
                            <Skeleton className="h-4 w-[128px]" />
                            <Skeleton className="h-8 w-full" />
                        </div>
                        <div className="grid gap-2">
                            <Skeleton className="h-4 w-[128px]" />
                            <Skeleton className="h-8 w-full" />
                        </div>
                        <div className="grid gap-2">
                            <Skeleton className="h-4 w-[128px]" />
                            <Skeleton className="h-8 w-full" />
                        </div>
                        <div className="grid gap-2">
                            <Skeleton className="h-4 w-[128px]" />
                            <span className="mt-1 flex items-center gap-2">
                                <Skeleton className="h-8 w-[196px]" />
                                <Skeleton className="h-8 w-full" />
                            </span>
                        </div>
                        <div className="grid gap-2">
                            <Skeleton className="h-4 w-[128px]" />
                            <Skeleton className="h-8 w-full" />
                        </div>
                    </div>
                )}

                {countryCodeList.length > 0 && (
                    <div className="flex w-full flex-1 flex-col gap-4 lg:flex-row">
                        <div className="space-y-12 lg:w-xl">
                            <form onSubmit={submit} className="space-y-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Name</Label>

                                    <Input
                                        id="name"
                                        className="mt-1 block w-full"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        required
                                        placeholder="Jane Doe Company"
                                    />

                                    <InputError className="mt-2" message={errors.name} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="address">Address</Label>

                                    <Input
                                        id="address"
                                        className="mt-1 block w-full"
                                        value={data.address}
                                        onChange={(e) => setData('address', e.target.value)}
                                        required
                                        placeholder="First Street no. 12, Greenwood"
                                    />

                                    <InputError className="mt-2" message={errors.email} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email address</Label>

                                    <Input
                                        id="email"
                                        type="email"
                                        className="mt-1 block w-full"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        required
                                        placeholder="hello@janedoecompany.com"
                                    />

                                    <InputError className="mt-2" message={errors.email} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="phone">Phone Number</Label>

                                    <span className="mt-1 flex items-center gap-2">
                                        <Select defaultValue="ID" onValueChange={(e) => setData('phone_code', e)}>
                                            <SelectTrigger className="w-[96px]">
                                                <SelectValue placeholder="Theme">
                                                    {countryCodeList.length > 0 ? <>{selectedCountryCode?.dial_code}</> : <>Loading</>}
                                                </SelectValue>
                                            </SelectTrigger>
                                            <SelectContent>
                                                {countryCodeList?.map((e) => {
                                                    return (
                                                        <SelectItem key={e.code} value={e.code}>
                                                            {' '}
                                                            {e.name} ({e.dial_code})
                                                        </SelectItem>
                                                    );
                                                })}
                                            </SelectContent>
                                        </Select>
                                        <Input
                                            id="phone"
                                            className="block w-full"
                                            value={data.phone}
                                            onChange={(e) => setData('phone', e.target.value)}
                                            required
                                            placeholder="81234567890"
                                        />
                                    </span>

                                    <InputError className="mt-2" message={errors.phone} />
                                </div>

                                <div className="flex items-center gap-4">
                                    <Button disabled={processing}>Add</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </AppLayout>
    );
}
