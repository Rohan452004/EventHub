import EventForm from "@/components/shared/EventForm"
import { auth } from "@clerk/nextjs/server";

const CreateEvent = () => {
  const { sessionClaims } = auth();
  const userEmail = sessionClaims?.userEmail as string;
  const isAdmin = userEmail === process.env.NEXT_PUBLIC_ADMIN_EMAIL;
  const userId = sessionClaims?.userId as string;

  const adminContactEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;

  if (!isAdmin) {
    return (
      <div className="wrapper my-8 text-center">
        <p>You do not have permission to create events.</p>
        <p>
          If you would like to create an event, please reach out to our admin at{" "}
          <a href={`mailto:${adminContactEmail}`} className="text-blue-600 hover:underline">
            {adminContactEmail}
          </a>.
        </p>
        <p>Or you can explore existing events:</p>
        <a href="/#events" className="text-blue-600 hover:underline mt-4 block">
          Browse Events
        </a>
      </div>
    );
  }
  


  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">Create Event</h3>
      </section>

      <div className="wrapper my-8">
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  )
}

export default CreateEvent