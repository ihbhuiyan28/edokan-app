import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import Link from 'next/link';

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col justify-between gap-4 py-4">

      {/* main content */}
      <div className="min-h-screen flex flex-col gap-4">

        {/* hero section */}
        <Card className="md:text-center">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              edokan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href={`/`}>Get started</Link>
            </Button>
          </CardContent>
        </Card>

        {/* logo cloud section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl md:text-center">Not trusted by</CardTitle>
          </CardHeader>
        </Card>

        {/* feature section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl md:text-center">All-in-one platform</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item}></Card>
            ))}
          </CardContent>
        </Card>

        {/* statistics section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl md:text-center">Our track record</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item}></Card>
            ))}
          </CardContent>
        </Card>

        {/* testimonial section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl md:text-center">Worked with some amazing people</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {[1, 2].map((item) => (
                <Card key={item}></Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* pricing section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl md:text-center">Pricing that grows with you</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            {[1, 2].map((item) => (
              <Card key={item}></Card>
            ))}
          </CardContent>
        </Card>

        {/* faq section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl md:text-center">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              {[1, 2, 3, 4].map((item) => (
                <AccordionItem key={item} value={String(item)}>
                  <AccordionTrigger>&nbsp;</AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
