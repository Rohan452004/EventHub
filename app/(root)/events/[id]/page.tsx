import CheckoutButton from '@/components/shared/CheckoutButton';
import Collection from '@/components/shared/Collection';
import { getEventById, getRelatedEventsByCategory } from '@/lib/actions/event.actions'
import { formatDateTime } from '@/lib/utils';
import { SearchParamProps } from '@/types'
import Image from 'next/image';

const EventDetails = async ({ params: { id }, searchParams }: SearchParamProps) => {
    const event = await getEventById(id);
    const relatedEvents = await getRelatedEventsByCategory({
      categoryId: event.category._id,
      eventId: event._id,
      page: searchParams.page as string,
    });
  
    return (
      <>
        <section className="flex justify-center bg-gray-50 bg-[url('/assets/dotted-pattern.svg')] bg-contain bg-no-repeat p-8">
          <div className="grid grid-cols-1 gap-8 max-w-7xl w-full p-6 md:grid-cols-2">
          <Image 
          src={event.imageUrl}
          alt="hero image"
          width={1000}
          height={1000}
          className="w-full h-full object-cover rounded-xl min-h-[300px]"
        />
            <div className="flex flex-col gap-8 p-6">
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold text-gray-800">{event.title}</h2>
  
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="flex gap-4">
                    <p className="px-4 py-2 bg-green-100 text-green-600 rounded-full font-semibold">
                      {event.isFree ? 'FREE' : `₹${event.price}`}
                    </p>
                    <p className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full font-medium">
                      {event.category.name}
                    </p>
                  </div>
  
                  <p className="text-lg text-gray-700">
                    by{' '}
                    <span className="text-blue-600 font-semibold">
                      {event.organizer.firstName} {event.organizer.lastName}
                    </span>
                  </p>
                </div>
              </div>

              { /* CHECKOUT BUTTON */}
              <CheckoutButton event={event} />

            <div className="flex flex-col gap-5">
            <div className='flex gap-2 md:gap-3'>
              <Image src="/assets/icons/calendar.svg" alt="calendar" width={32} height={32} />
              <div className="p-medium-16 lg:p-regular-20 flex flex-wrap items-center">
                <p>
                  {formatDateTime(event.startDateTime).dateOnly} - {' '}
                  {formatDateTime(event.startDateTime).timeOnly}
                </p>
                <p>
                  {formatDateTime(event.endDateTime).dateOnly} - {' '}
                  {formatDateTime(event.endDateTime).timeOnly}
                </p>
              </div>
            </div>

            <div className="p-regular-20 flex items-center gap-3">
              <Image src="/assets/icons/location.svg" alt="location" width={32} height={32} />
              <p className="p-medium-16 lg:p-regular-20">{event.location}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="p-bold-20 text-grey-600">What You'll Learn:</p>
            <p className="p-medium-16 lg:p-regular-18">{event.description}</p>
            <p className="p-medium-16 lg:p-regular-18 truncate text-primary-500 underline">{event.url}</p>
          </div>

            </div>
          </div>
        </section>

        {/* EVENTS with the same category */}
        <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Related Events</h2>

        <Collection 
          data={relatedEvents?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={3}
          page={searchParams.page as string}
          totalPages={relatedEvents?.totalPages}
        />
        </section>
      </>
    )
}
  
  export default EventDetails;
  