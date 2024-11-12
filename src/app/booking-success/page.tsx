"use client";

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense } from 'react';

const BookingSuccessContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Retrieve query parameters
  const user = searchParams.get('user');
  const email = searchParams.get('email');
  const eventTypeSlug = searchParams.get('eventTypeSlug');
  const title = searchParams.get('title');
  const description = searchParams.get('description');
  const startTime = searchParams.get('startTime');
  const endTime = searchParams.get('endTime');
  const location = searchParams.get('location');
  const hostName = searchParams.get('hostName');
  const attendeeName = searchParams.get('attendeeName');

  // Convert startTime and endTime to Date objects, ensuring they are not null
  const formattedStartTime = startTime ? new Date(startTime) : null;
  const formattedEndTime = endTime ? new Date(endTime) : null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md text-center">
        <h1 className="text-2xl font-semibold text-green-600">Congratulations, {user}!</h1>
        <p className="text-gray-700 mt-2">Your booking has been successfully completed.</p>

        {email && (
          <p className="text-gray-500 mt-2">
            A confirmation has been sent to your email: <strong>{email}</strong>
          </p>
        )}

        {eventTypeSlug && title && (
          <div className="mt-4 text-left">
            <h3 className="font-semibold text-lg">Event Details:</h3>
            <p><strong>Event:</strong> {title}</p>
            <p><strong>Description:</strong> {description}</p>
            {formattedStartTime && (
              <p><strong>Start Time:</strong> {formattedStartTime.toLocaleString()}</p>
            )}
            {formattedEndTime && (
              <p><strong>End Time:</strong> {formattedEndTime.toLocaleString()}</p>
            )}
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Host:</strong> {hostName}</p>
            <p><strong>Attendee:</strong> {attendeeName}</p>
          </div>
        )}

        <button
          onClick={() => router.push('/')}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go to Home Page
        </button>
      </div>
    </div>
  );
};

const BookingSuccess = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <BookingSuccessContent />
  </Suspense>
);

export default BookingSuccess;
