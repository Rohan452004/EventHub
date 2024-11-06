# **EventHub - College Event Management Platform** 🎉

EventHub is a **comprehensive event management platform** specifically designed to meet the needs of college communities. Inspired by platforms like **Eventbrite** and **Meetup**, EventHub enables colleges to easily organize, manage, and promote campus events. With streamlined tools for **event registration, ticketing, role-based permissions, and event discovery**, EventHub helps students and faculty stay engaged and informed about upcoming campus activities.

Built with **Next.js 14, Tailwind CSS, Clerk, Stripe, and Mongoose**, EventHub offers a secure, scalable, and user-friendly solution to enhance college event experiences.

---

## Features

- **Event Creation & Management**: Admins can create, update, and manage events with ease.
- **User Registration & Authentication**: Secure sign-up and login powered by Clerk.
- **Role-Based Access**: Only designated admins have permissions to create events, while all other users can register for events.
- **Ticketing & Payments**: Integrated with Stripe for easy payment processing and ticketing.
- **Event Search & Filtering**: Users can explore and filter events by categories, dates, and keywords.
- **Mobile-Responsive Design**: Seamless experience across desktop and mobile devices.
- **Real-Time Updates**: Get the latest event details and status changes immediately.

---
## 🛠️ **Tech Stack**

### **Frontend:**
- **Next.js 14** – Server-side rendering and static site generation.
- **Tailwind CSS** – For responsive and modern UI design.
- **Shadcn** – UI components and themes.
- **React Hook Form** – Form management with validation.
- **React-Datepicker** – For scheduling events.

### **Backend:**
- **Mongoose** – MongoDB Object Data Modeling (ODM) for managing event data.
- **Clerk** – Authentication and user management.

### **Payments:**
- **Stripe** – Payment gateway integration for paid events.

---
🤸 **Quick Start**

Follow these steps to set up the project locally on your machine.

---

## Cloning the Repository

Clone the repository and navigate into the project directory:

    git clone https://github.com/Rohan452004/EventHub.git
    cd EventHub

---

## Installation

Install the project dependencies using npm:

    npm install

---

## Set Up Environment Variables

Create a new file named `.env` in the root of your project and add the following content:

    # NEXT
    NEXT_PUBLIC_SERVER_URL=

    # CLERK
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=
    NEXT_CLERK_WEBHOOK_SECRET=

    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

    # MONGODB
    MONGODB_URI=

    # UPLOADTHING
    UPLOADTHING_SECRET=
    UPLOADTHING_APP_ID=

    # STRIPE
    STRIPE_SECRET_KEY=
    STRIPE_WEBHOOK_SECRET=
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

    # ADMIN
    NEXT_PUBLIC_ADMIN_EMAIL=

**Note**: Replace the placeholder values with your actual credentials.

---

## Running the Project

Start the development server:

    npm start

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the project.

---

**Happy Coding!** 🚀

