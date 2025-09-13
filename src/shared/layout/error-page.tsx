"use client";

import ErrorState from "./error-state";

export default function ErrorPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <ErrorState
        title="Something went wrong"
        message="Please check your internet connection and try again."
        buttonText="Retry"
        retry={() => window.location.reload()}
      />
    </div>
  );
}
