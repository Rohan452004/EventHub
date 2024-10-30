import { IEvent } from '@/lib/database/models/event.model'
import { formatDateTime } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { auth } from '@clerk/nextjs/server'
import { DeleteConfirmation } from './DeleteConfirmation'

type CardProps = {
  event: IEvent,
  hasOrderLink?: boolean,
  hidePrice?: boolean
}

const Card = ({ event, hasOrderLink, hidePrice }: CardProps) => {
    const { sessionClaims } = auth();
    const userId = sessionClaims?.userId as string;
    const isEventCreator = userId === event.organizer._id.toString();
  
    return (
      <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg md:min-h-[438px]">
        <Link 
          href={`/events/${event._id}`}
          style={{ backgroundImage: `url(${event.imageUrl})` }}
          className="flex-grow bg-gray-100 bg-cover bg-center"
        />
        
        {/* Event Creator Options */}
        {isEventCreator && !hidePrice && (
          <div className="absolute right-3 top-3 flex flex-col gap-3 rounded-lg bg-white p-2 shadow-md">
            <Link href={`/events/${event._id}/update`} className="hover:opacity-80">
              <Image src="/assets/icons/edit.svg" alt="edit" width={20} height={20} />
            </Link>
            <DeleteConfirmation eventId={event._id} />
          </div>
        )}
  
        {/* Event Details */}
        <div className="flex min-h-[230px] flex-col gap-4 p-5">
          {/* Price & Category */}
          {!hidePrice && (
            <div className="flex gap-3">
              <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-600">
                {event.isFree ? 'FREE' : `$${event.price}`}
              </span>
              <p className="rounded-full bg-gray-200 px-4 py-1 text-sm font-semibold text-gray-600 line-clamp-1">
                {event.category.name}
              </p>
            </div>
          )}
  
          {/* Event Date */}
          <p className="text-sm text-gray-500">
            {formatDateTime(event.startDateTime).dateTime}
          </p>
  
          {/* Event Title */}
          <Link href={`/events/${event._id}`} className="flex-1">
            <p className="text-lg font-medium text-black line-clamp-2">
              {event.title}
            </p>
          </Link>
  
          {/* Organizer and Order Link */}
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">
              {event.organizer.firstName} {event.organizer.lastName}
            </p>
  
            {hasOrderLink && (
              <Link 
                href={`/orders?eventId=${event._id}`} 
                className="flex items-center gap-2 text-primary-500 hover:underline"
              >
                <p>Order Details</p>
                <Image src="/assets/icons/arrow.svg" alt="arrow" width={10} height={10} />
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
  