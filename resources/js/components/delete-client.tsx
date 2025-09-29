import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { useForm } from '@inertiajs/react';
import { Button } from './ui/button';

export default function DeleteClient({ id, name }: { id: string; name: string }) {
    console.log(id);

    const { processing, delete: destroy } = useForm({
        id: id,
    });

    const submit = () => {
        destroy(route('api.clients.delete'));
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="cursor-pointer" variant="destructive">
                    Delete
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>{`Delete ${name}?`}</DialogTitle>
                    <DialogDescription>
                        This will remove the client information permanently from the system, and this action cannot be undone.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-start">
                    <Button type="button" variant="destructive" onClick={submit} disabled={processing}>
                        Delete
                    </Button>
                    <DialogClose asChild>
                        <Button type="button" variant="secondary" disabled={processing}>
                            Cancel
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
