import { Card } from '@/components/ui/card';

export default function ProductIdPage() {

    return (
        <div className="min-h-screen my-4">
            <div className="min-h-screen grid grid-rows-4 md:grid-cols-3 gap-4">
                <Card className="row-span-2"></Card>
                <Card className="md:col-span-2 md:row-span-2"></Card>
                <Card className="md:col-span-3 md:row-span-2"></Card>
            </div>
        </div>
    );
}
