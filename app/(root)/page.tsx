import Collection from "@/components/shared/Collection";
import {Button} from "@/components/ui/button"
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6
  })


  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
          <h1 className="text-4xl md:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-500 to-blue-400 drop-shadow-md transition-all duration-500 ease-in-out ">
            Discover and Participate in Exciting Club Events at MIT Academy of Engineering! 
          </h1>
            <p className="p-regular-20 md:p-regular-23">Stay updated on the latest events from clubs across campus. From tech talks to cultural fests, find your next adventure here!</p>
            <Button size="lg" asChild className="button w-full sm:w-fit bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              <Link href="#events">
                Explore Now
              </Link>
            </Button>
          </div>
        
            <Image
            src="/assets/images/hero.png"
            alt="Hero Image"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
            />
          </div>
      </section>

      <section id="events" className="wrapper flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Trusted By <br/> Students and Clubs</h2>

      <div className="flex w-full flex-col gap-5 md:flex-row">
        Search
        Category Filter
      </div>

      <Collection 
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
        </section>
    </>
  );
}
