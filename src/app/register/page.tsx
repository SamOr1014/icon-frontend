"use client";

export default function RegisterPage() {
  return (
    <>
      <div className="container">
        <button
          onClick={() => {
            window.location.href = "/";
          }}
        >
          back to home
        </button>
        Register
      </div>
    </>
  );
}
