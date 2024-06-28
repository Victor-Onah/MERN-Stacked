export default function Page() {
  return (
    <div class="container mx-auto px-4 py-8">
      <div class="mb-6 flex items-center justify-between">
        <h1 class="text-2xl font-bold">Comment Management</h1>
        <div class="flex items-center gap-4">
          <div class="relative">
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
              class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10"
              type="text"
              placeholder="Search comments..."
              value=""
            />
          </div>
        </div>
      </div>
      <div class="overflow-x-auto">
        <div class="relative w-full overflow-auto">
          <table class="w-full caption-bottom text-sm">
            <thead class="[&amp;_tr]:border-b">
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Name
                </th>
                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Email
                </th>
                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Comment
                </th>
                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Date
                </th>
                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Status
                </th>
                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="[&amp;_tr:last-child]:border-0">
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  Tom Wilson
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  tom@example.com
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  I have a question about the topic discussed in this post.
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  2023-06-20 11:20 AM
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div
                    class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    data-v0-t="badge"
                  >
                    pending
                  </div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div class="flex items-center gap-2">
                    <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                      Approve
                    </button>
                    <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                      Reject
                    </button>
                    <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  Sarah Lee
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  sarah@example.com
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  Well written and informative. Keep up the great work!
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  2023-06-15 2:45 PM
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div
                    class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    data-v0-t="badge"
                  >
                    approved
                  </div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div class="flex items-center gap-2">
                    <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  Bob Johnson
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  bob@example.com
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  I disagree with the author. This post is misleading.
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  2023-06-10 9:00 AM
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div
                    class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    data-v0-t="badge"
                  >
                    rejected
                  </div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div class="flex items-center gap-2">
                    <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  Jane Smith
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  jane@example.com
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  Interesting perspective. I have a different opinion on this
                  topic.
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  2023-06-05 3:15 PM
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div
                    class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    data-v0-t="badge"
                  >
                    pending
                  </div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div class="flex items-center gap-2">
                    <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                      Approve
                    </button>
                    <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                      Reject
                    </button>
                    <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  John Doe
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  john@example.com
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  Great post! I really enjoyed reading it.
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  2023-06-01 10:30 AM
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div
                    class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    data-v0-t="badge"
                  >
                    approved
                  </div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div class="flex items-center gap-2">
                    <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
