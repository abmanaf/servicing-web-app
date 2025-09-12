"use client";

import EmptyState from "./error-state";

export default function ErrorPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <EmptyState
        title="Something went wrong"
        message="Please check your internet connection and try again."
        buttonText="Retry"
        retry={() => window.location.reload()}
      />
    </div>
  );
}
