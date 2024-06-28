export default function Page() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 py-9 md:gap-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="space-y-1.5 p-6 flex flex-row items-center justify-between pb-2">
            <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">
              Total Posts
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-4 h-4 text-muted-foreground"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
            </svg>
          </div>
          <div className="p-6">
            <div className="text-2xl font-bold">124</div>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="space-y-1.5 p-6 flex flex-row items-center justify-between pb-2">
            <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">
              Total Views
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-4 h-4 text-muted-foreground"
            >
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </div>
          <div className="p-6">
            <div className="text-2xl font-bold">12,345</div>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="space-y-1.5 p-6 flex flex-row items-center justify-between pb-2">
            <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">
              Total Comments
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-4 h-4 text-muted-foreground"
            >
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
            </svg>
          </div>
          <div className="p-6">
            <div className="text-2xl font-bold">789</div>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="space-y-1.5 p-6 flex flex-row items-center justify-between pb-2">
            <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">
              Avg. Views/Post
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-4 h-4 text-muted-foreground"
            >
              <line x1="18" x2="18" y1="20" y2="10"></line>
              <line x1="12" x2="12" y1="20" y2="4"></line>
              <line x1="6" x2="6" y1="20" y2="14"></line>
            </svg>
          </div>
          <div className="p-6">
            <div className="text-2xl font-bold">99.5</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
              Manage Posts
            </h3>
            <p className="text-sm text-muted-foreground">
              Create, edit, and delete blog posts.
            </p>
          </div>
          <div className="p-6">
            <div className="grid gap-2">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                Create New Post
              </button>
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead className="[&amp;_tr]:border-b">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                        Title
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                        Status
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                        Views
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="[&amp;_tr:last-child]:border-0">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                        Introduction to React
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        <div
                          className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                          data-v0-t="badge"
                        >
                          Draft
                        </div>
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        124
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"></td>
                    </tr>
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                        Mastering CSS Grid
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        <div
                          className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                          data-v0-t="badge"
                        >
                          Published
                        </div>
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        789
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"></td>
                    </tr>
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                        Optimizing Website Performance
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        <div
                          className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                          data-v0-t="badge"
                        >
                          Published
                        </div>
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        1,234
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
              Manage Comments
            </h3>
            <p className="text-sm text-muted-foreground">
              View and respond to comments on your blog posts.
            </p>
          </div>
          <div className="p-6">
            <div className="grid gap-2">
              <div className="flex items-start gap-4">
                <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 border">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                    JD
                  </span>
                </span>
                <div className="grid gap-1">
                  <div className="font-medium">John Doe</div>
                  <div className="text-muted-foreground">
                    Great post! I really enjoyed the insights.
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <time datetime="2023-06-27">June 27, 2023</time>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="w-4 h-4"
                      >
                        <polyline points="9 17 4 12 9 7"></polyline>
                        <path d="M20 18v-2a4 4 0 0 0-4-4H4"></path>
                      </svg>
                      <span className="sr-only">Reply</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 border">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                    JA
                  </span>
                </span>
                <div className="grid gap-1">
                  <div className="font-medium">Jane Appleseed</div>
                  <div className="text-muted-foreground">
                    Awesome tips! Can&apos;t wait to try them out.
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <time datetime="2023-06-25">June 25, 2023</time>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="w-4 h-4"
                      >
                        <polyline points="9 17 4 12 9 7"></polyline>
                        <path d="M20 18v-2a4 4 0 0 0-4-4H4"></path>
                      </svg>
                      <span className="sr-only">Reply</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 border">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                    SM
                  </span>
                </span>
                <div className="grid gap-1">
                  <div className="font-medium">Sarah Mayer</div>
                  <div className="text-muted-foreground">
                    This is really helpful, thanks for sharing!
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <time datetime="2023-06-22">June 22, 2023</time>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="w-4 h-4"
                      >
                        <polyline points="9 17 4 12 9 7"></polyline>
                        <path d="M20 18v-2a4 4 0 0 0-4-4H4"></path>
                      </svg>
                      <span className="sr-only">Reply</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
