import { login } from '@/actions/auth'

export default function LoginPage() {
  return (
    <form
      action={login}
      className="max-w-md mx-auto mt-20 space-y-4"
    >
      <h1 className="text-xl font-bold">Login</h1>

      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="w-full border p-2"
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        required
        className="w-full border p-2"
      />

      <button className="w-full bg-green-600 text-white py-2">
        Login
      </button>
    </form>
  )
}
