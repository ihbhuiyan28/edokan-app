import { Button } from '@/components/ui/button';
import {
    Card,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTrigger
} from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious
} from '@/components/ui/pagination';
import { DialogTitle } from '@radix-ui/react-dialog';

export default function ProductsPage() {

    return (
        <div className="min-h-screen flex flex-col justify-evenly gap-y-4 py-4">

            {/* search and filter */}
            <div className="flex items-center gap-x-4 py-4">

                {/* search */}
                <Input
                    type="search"
                />

                {/* filter */}
                <Drawer>
                    <DrawerTrigger asChild>
                        <Button className="md:hidden">
                            Filter
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader>
                            <DialogTitle></DialogTitle>
                        </DrawerHeader>
                        <DrawerFooter>
                            <DrawerClose asChild>
                                <Button>Cancel</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>

            </div>

            {/* sidebar, cards, and pagination */}
            <div className="grid grid-cols-1 md:gap-x-4 md:grid-cols-4">

                {/* sidebar */}
                <aside className="hidden md:block">
                    <Card className="md:min-h-full"></Card>
                </aside>

                {/* cards and pagination */}
                <div className="col-span-3 space-y-4">

                    {/* cards */}
                    <div className="grid grid-cols-1 gap-y-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                            <Card key={item}>
                                <CardHeader>
                                    <CardTitle></CardTitle>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>

                    {/* pagination */}
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>

                </div>

            </div>

        </div>
    );
}