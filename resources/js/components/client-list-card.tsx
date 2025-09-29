import { ClientListCardData } from '@/types';
import { Link } from '@inertiajs/react';
import { DateTime } from 'luxon';
import DeleteClient from './delete-client';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

export default function ClientListCard({ data }: { data: ClientListCardData }) {
    const added = DateTime.fromISO(data.created_at);
    const edited = DateTime.fromISO(data.updated_at);
    const addedText = added.toLocaleString(DateTime.DATETIME_FULL);
    const editedText = edited.toLocaleString(DateTime.DATETIME_FULL);
    const lastAdded = added.toRelative();
    const lastEdited = edited.toRelative();

    return (
        <div className="flex min-h-8 flex-col gap-6 overflow-hidden rounded-xl border border-sidebar-border/70 p-6 lg:flex-row lg:items-center lg:justify-between dark:border-sidebar-border">
            <div className="flex flex-col gap-4">
                <p className="text-2xl font-bold">{data.name}</p>
                <div className="text-sm">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <p className='w-fit'>{`Last Updated: ${lastEdited}`}</p>
                        </TooltipTrigger>
                        <TooltipContent side='right'>
                            <p>{`Added: ${addedText} (${lastAdded})`}</p>
                            <p>{`Edited: ${editedText} (${lastEdited})`}</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <p className='w-fit'>Meetings ahead: {data.upcoming_meetings}</p>
                        </TooltipTrigger>
                        <TooltipContent side='right'>
                            <p>Upcoming: 22th October 2025</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
            </div>
            <div className="flex gap-2">
                <Button asChild>
                    <Link href={route('clients.view', data.id)}>View</Link>
                </Button>
                <Button asChild>
                    <Link href={route('clients.edit', data.id)}>Edit</Link>
                </Button>
                <DeleteClient id={data.id} name={data.name} />
            </div>
        </div>
    );
}
