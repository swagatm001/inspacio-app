/** Re-mounts on every navigation so the page fades and lifts in. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-in">{children}</div>;
}
