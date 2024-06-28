export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-lg border shadow-sm">
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
      <div className="rounded-lg border shadow-sm">
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
      <div className="rounded-lg border shadow-sm">
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
      <div className="rounded-lg border shadow-sm">
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
  );
}
