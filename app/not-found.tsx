import type { Metadata } from "next";

// A custom not-found.tsx routes 404s through the normal Metadata API instead of Next's internal fallback page,
// which was emitting its own literal <title> in addition to the root layout's - two <title> tags in one <head>,
// invalid HTML an audit caught. This one sets its own title/robots and nothing else duplicates.
export const metadata: Metadata = {
  title: "Page Not Found | Innector",
  description: "The page you're looking for doesn't exist or has moved.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="mxd-page-content inner-page-content">
      <div className="mxd-section">
        <div className="mxd-container grid-l-container">
          <div className="mxd-block" style={{ textAlign: "center", padding: "8rem 2rem" }}>
            <p className="t-bold t-large">404 - This page could not be found.</p>
            <p className="t-medium" style={{ marginTop: "1.2rem" }}>
              The page you&apos;re looking for doesn&apos;t exist or has moved.
            </p>
            <div style={{ marginTop: "2.4rem" }}>
              <a className="btn btn-default-icon btn-default-accent slide-right" href="/">
                <span className="btn-caption mxd-scramble">Back to home</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
