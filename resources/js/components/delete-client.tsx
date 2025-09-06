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
import { Button } from './ui/button';

export default function DeleteClient({ id, name }: { id: string, name: string }) {
    console.log(id);

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
                    <Button type="button" variant="destructive">
                        Delete
                    </Button>
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Cancel
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
