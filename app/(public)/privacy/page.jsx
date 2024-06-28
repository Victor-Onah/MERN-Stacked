export async function generateMetadata() {
  return {
    title: "MERN Stacked | Privacy Policy",
    description:
      "This policy outlines the types of personal information we may collect and how we use it.",
    openGraph: {
      title: "MERN Stacked | Privacy Policy",
      description:
        "This policy outlines the types of personal information we may collect and how we use it.",
    },
    twitter: {
      title: "MERN Stacked | Privacy Policy",
      description:
        "This policy outlines the types of personal information we may collect and how we use it.",
    },
  };
}

export default function Page() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 md:px-0 py-9 md:py-20">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="text-muted-foreground text-lg">
          At MERN Stacked, we take your privacy seriously. This policy outlines
          the types of personal information we may collect and how we use it.
        </p>
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">Information We Collect</h2>
            <p className="text-muted-foreground">
              When you interact with the blog, we may collect the following
              information:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Avatar image</li>
            </ul>
            <blockquote
              style={{
                borderLeft: "4px solid #4a90e2",
                backgroundColor: "#f7f7f7",
                color: "#555",
                padding: "10px 20px",
                margin: "10px 0",
                fontSize: "0.9em",
              }}
            >
              All these information will only be collected if you willingly sign
              in using your Google account.
            </blockquote>
          </div>
          <div>
            <h2 className="text-2xl font-bold">How We Use Your Information</h2>
            <p className="text-muted-foreground">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Respond to your comments and inquiries</li>
              <li>Improve the content and functionality of our blog</li>
              <li>Analyze usage trends and preferences</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Third-Party Services</h2>
            <p className="text-muted-foreground">
              We may use third-party services to help us operate and improve our
              blog. These services may collect information about your use of our
              site, but they are required to handle your data in accordance with
              this privacy policy.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Google Analytics (for website analytics)</li>
              <li>Disqus (for comment management)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
