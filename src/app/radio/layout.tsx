// profiles/layout.tsx (This is a server-side component by default)
export const metadata = {
    title: "Radio Station",
    description: "Best Online Radio Station for Programming and Development. Listen to my favorite radio station. Top best radio station for programming and development.",
  };

export const viewport = {
    width: "device-width",
    initialScale: 1,
};
  
  export default function RadioStationLayout({ children }: { children: React.ReactNode }) {
    return (
      <>
        {children}
      </>
    );
  }
  