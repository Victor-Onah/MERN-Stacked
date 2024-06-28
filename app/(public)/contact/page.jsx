export async function generateMetadata() {
  return {
    title: "MERN Stacked | Contact",
    description:
      "Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.",
    openGraph: {
      title: "MERN Stacked | Contact",
      description:
        "Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.",
    },
    twitter: {
      title: "MERN Stacked | Contact",
      description:
        "Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.",
    },
  };
}

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="text-muted-foreground">
              Have a question or want to work together? Fill out the form below
              and I&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-semibold">
                  Name
                </label>
                <input
                  className="bg-slate-100 p-2 focus:outline-none rounded-md"
                  id="name"
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-semibold">
                  Email
                </label>
                <input
                  className="bg-slate-100 p-2 focus:outline-none rounded-md"
                  id="email"
                  type="email"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-semibold">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your message"
                className="min-h-[150px] bg-slate-100 p-2 focus:outline-none rounded-md"
              ></textarea>
            </div>
            <button type="submit" className="w-full sm:w-auto">
              Submit
            </button>
          </form>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold">Contact Info</h2>
            <p className="text-muted-foreground">
              Get in touch with me directly or find me on social media.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <MailOpenIcon className="h-6 w-6 text-muted-foreground" />
              <a
                href="mailto:victoronah.dev@gmail.com"
                target="_blank"
                className="text-primary hover:underline"
              >
                victoronah.dev@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <TwitterIcon className="h-6 w-6 text-muted-foreground" />
              <a
                href="https://twitter.com/@__allAboutJS"
                className="text-primary hover:underline"
              >
                @__allAboutJS
              </a>
            </div>
            <div className="flex items-center gap-2">
              <LinkedinIcon className="h-6 w-6 text-muted-foreground" />
              <a
                href="https://www.linkedin.com/in/victor-onah-066563274/"
                className="text-primary hover:underline"
              >
                Onah Victor
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailOpenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
      <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
