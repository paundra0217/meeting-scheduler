import Heading from '@/components/heading';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import AppLayout from '@/layouts/app-layout';
import { SharedData, type BreadcrumbItem } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';
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

type ClientForm = {
    name: string;
    email: string;
    phone_code: string;
    address: string;
    phone: string;
    is_organization: string;
};

type CountryCodeList = {
    name: string;
    code: string;
    image: string;
    dial_code: string;
    emoji: string;
};

const countryCodeFlagBaseURL = 'https://country-code-au6g.vercel.app/';

// const rawRoute: any = route('');

export default function AddClient() {
    const { auth } = usePage<SharedData>().props;

    const { data, setData, errors, processing } = useForm<Required<ClientForm>>({
        name: '',
        address: '',
        email: '',
        phone_code: '',
        phone: '',
        is_organization: '',
    });

    // const servicesApi = axios.create({
    //     baseURL: rawRoute.t.url,
    //     headers: {
    //         'X-Requested-With': 'XMLHttpRequest',
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     withCredentials: true,
    //     withXSRFToken: true,
    // });

    // const initializeCsrf = async () => {
    //     await axios.get('/sanctum/csrf-cookie', {
    //         baseURL: rawRoute.t.url, // Replace with your Laravel backend URL
    //         withCredentials: true, // Ensure cookies are sent
    //     });
    // };

    // const fetchCountryCodeList = async () => {
    //     await initializeCsrf(); // Fetch CSRF token first
    //     try {
    //         const response = await axios.get('/api/user', {
    //             baseURL: rawRoute.t.url,
    //             withCredentials: true, // Include session cookies
    //         });
    //         return response.data; // Should return authenticated user
    //     } catch (error: any) {
    //         console.error('Error fetching user:', error.response.status); // 401 if still failing
    //     }
    // };

    console.log(auth.user);

    const [countryCodeList, setCountryCodeList] = useState<CountryCodeList[]>([]);

    useEffect(() => {
        axios.get(route('utility.country-code')).then((response) => {
            const countries = response.data;
            countries.sort(function (a: CountryCodeList, b: CountryCodeList) {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
            });
            setCountryCodeList(countries);
        });
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add Client" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
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
                    <div className="flex flex-1 flex-col gap-4 lg:flex-row w-full">
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
                                        autoComplete="name"
                                        placeholder="Jane Doe Company"
                                    />

                                    <InputError className="mt-2" message={errors.name} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="address">Address</Label>

                                    <Input
                                        id="address"
                                        className="mt-1 block w-full"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        required
                                        autoComplete="username"
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
                                        autoComplete="username"
                                        placeholder="hello@janedoecompany.com"
                                    />

                                    <InputError className="mt-2" message={errors.email} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="phone">Phone Number</Label>

                                    <span className="mt-1 flex items-center gap-2">
                                        <Select defaultValue="ID" onValueChange={(e) => setData('phone_code', e)}>
                                            <SelectTrigger className="w-[120px] text-nowrap">
                                                <SelectValue placeholder="Theme" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {countryCodeList?.map((e) => {
                                                    return (
                                                        <SelectItem key={e.code} value={e.code}>
                                                            {' '}
                                                            <img className="h-8 w-12" src={countryCodeFlagBaseURL + e.image} /> {e.dial_code} -{' '}
                                                            {e.name}
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

                                {/* <div className="grid gap-2">
                                    <Label htmlFor="phone">Client Type</Label>

                                    <div className="flex flex-col gap-2">
                                        <Select onValueChange={(e) => setData('is_organization', e)}>
                                            <SelectTrigger className="mt-1 w-full">
                                                <SelectValue placeholder="Client Type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="0">Individual</SelectItem>
                                                <SelectItem value="1">Organization</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <div className="text-xs">
                                            <p>Individual: Client where the organization just only have one person or an individual.</p>
                                            <p>
                                                Organization: Client is an organization, including a company (PT, CV, UD, etc.) or society (Yayasan)
                                            </p>
                                        </div>
                                    </div>

                                    <InputError className="mt-2" message={errors.phone} />
                                </div> */}

                                <div className="flex items-center gap-4">
                                    <Button disabled={processing}>Add</Button>
                                </div>
                            </form>
                        </div>
                        {data.is_organization === '1' && (
                            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4 xl:max-w-xl">
                                <div className="relative h-32 overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                                </div>
                                <ScrollArea className="h-96 w-full rounded-md border p-4">
                                    <div className='flex flex-col gap-4'>
                                        <div className="relative h-32 overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                                            <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                                        </div>
                                        <div className="relative h-32 overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                                            <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                                        </div>
                                        <div className="relative h-32 overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                                            <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                                        </div>
                                        <div className="relative h-32 overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                                            <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                                        </div>
                                    </div>
                                </ScrollArea>
                            </div>
                        )}
                    </div>
                )}
                {/* Loaded Form Section */}
            </div>
        </AppLayout>
    );
}
