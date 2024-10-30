import { IEvent } from '@/lib/database/models/event.model'
import React from 'react'
import Card from './Card'

type CollectionProps = {
  data: IEvent[],
  emptyTitle: string,
  emptyStateSubtext: string,
  limit: number,
  page: number | string,
  totalPages?: number,
  urlParamName?: string,
  collectionType?: 'Events_Organized' | 'My_Tickets' | 'All_Events'
}

const Collection = ({
  data,
  emptyTitle,
  emptyStateSubtext,
  page,
  totalPages = 0,
  collectionType,
  urlParamName,
}: CollectionProps) => {
  return (
    <>
      {data.length > 0 ?(
        <div>
            <div className="flex flex-col items-center gap-10">
            <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {data.map((event) => {
              const hasOrderLink = collectionType === 'Events_Organized';
              const hidePrice = collectionType === 'My_Tickets';

              return (
                <li key={event._id} className="flex justify-center">
                  <Card event={event} hasOrderLink={hasOrderLink} hidePrice={hidePrice} />
                </li>
              )
            })}
            </ul>
            </div>
        </div>
      ): (
        <div className="flex justify-center items-center min-h-[200px] w-full flex-col gap-4 rounded-xl bg-gray-50 py-20 px-6 text-center shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 md:text-2xl">{emptyTitle}</h3>
        <p className="text-base text-gray-600">{emptyStateSubtext}</p>
        </div>
      )}
        
    </>
  )
}

export default Collection