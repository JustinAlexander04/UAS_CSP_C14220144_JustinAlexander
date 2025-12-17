export default function HomePage() {
  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">
        Employee Portal
      </h1>

      <div className="mt-4 space-x-4">
        <a href="/login" className="text-blue-600">
          Login
        </a>
        <a href="/register" className="text-green-600">
          Register
        </a>
      </div>
    </main>
  )
}
