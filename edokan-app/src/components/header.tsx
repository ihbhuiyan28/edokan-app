import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent
} from '@/components/ui/card';
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Link from 'next/link';

export default function Header() {

    return (
        <Card>
            <CardContent className="flex flex-row items-center justify-between px-4">
                <nav className="w-full flex justify-between">
                    <div className="flex items-center gap-x-2">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="md:hidden"
                                >
                                    <Menu />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left">
                                <SheetHeader>
                                    <SheetTitle>edokan</SheetTitle>
                                </SheetHeader>
                                <SheetFooter>
                                    <Button asChild>
                                        <Link href={`/`}>Sign in</Link>
                                    </Button>
                                </SheetFooter>
                            </SheetContent>
                        </Sheet>
                        <Link
                            href={`/`}
                            className="text-xl font-bold"
                        >
                            edokan
                        </Link>
                    </div>
                    <Button asChild>
                        <Link href={`/`}>Sign in</Link>
                    </Button>
                </nav>
            </CardContent>
        </Card>
    );
}