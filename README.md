# **EventHub - Event Organization Web App** 🎉

EventHub is a **full-featured event organization platform** inspired by platforms like **Eventbrite** or **Meetup**, designed to streamline **event management, registration, payments, and checkout**. With a focus on **authentication, filtering, and smooth UX**, EventHub empowers organizers and participants to effortlessly engage with events.

This project leverages **Next.js 14, Tailwind CSS, Clerk, Stripe, and Mongoose** for a modern, scalable event management system.

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

**Note**: Replace the placeholder values with your actual credentials.

---

## Running the Project

Start the development server:

    npm start

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the project.

---

**Happy Coding!** 🚀

