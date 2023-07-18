"use client";
export default function Login() {
  return (
    <div className="container grid place-content-center">
      <div className="w-96">
        Login
        <button
          onClick={() => {
            window.location.href = "/";
          }}
        >
          back to home
        </button>
      </div>
    </div>
  );
}
