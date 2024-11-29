// app/api/songs/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Example list of songs (Replace with real data source or database)
    const songs = [
      {
        id: 1,
        title: "Echo in the Code",
        artist: "Nova Pulse",
        albumArt: "https://res.cloudinary.com/shubhadipbhowmik/image/upload/v1732873170/portfolio/radio/images/Echo_in_the_Code_wni2er.jpg",
        audioSrc: "https://res.cloudinary.com/shubhadipbhowmik/video/upload/v1732873341/portfolio/radio/audio/Echo_in_the_Code_etbdgh.mp3",
      },
      {
        id: 2,
        title: "Datawave",
        artist: "Lunar Frequencies",
        albumArt: "https://res.cloudinary.com/shubhadipbhowmik/image/upload/v1732873174/portfolio/radio/images/Datawave_ryuojm.webp",
        audioSrc: "https://res.cloudinary.com/shubhadipbhowmik/video/upload/v1732872942/portfolio/radio/audio/Datawave_y87sj7.mp3",
      },
      {
        id: 3,
        title: "Pixel Rhythm",
        artist: "Circuit Dreamer",
        albumArt: "https://res.cloudinary.com/shubhadipbhowmik/image/upload/v1732873169/portfolio/radio/images/Pixel_Rhythm_rdwajf.jpg",
        audioSrc: "https://res.cloudinary.com/shubhadipbhowmik/video/upload/v1732872930/portfolio/radio/audio/Pixel_Rhythm_uix1zj.mp3",
      },
    ];

    // Respond with the list of songs
    return NextResponse.json(songs);
  } catch (error) {
    // In case of error, send an error response
    return NextResponse.json({ error: "Failed to fetch songs" }, { status: 500 });
  }
}
