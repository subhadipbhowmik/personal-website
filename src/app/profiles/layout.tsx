// profiles/layout.tsx (This is a server-side component by default)
export const metadata = {
    title: "Profiles",
    description: "I Love to Collaborate with People from Community. Contribute to great projects",
  };
  
  export default function ProfilesLayout({ children }: { children: React.ReactNode }) {
    return (
      <>
        {children}
      </>
    );
  }
  