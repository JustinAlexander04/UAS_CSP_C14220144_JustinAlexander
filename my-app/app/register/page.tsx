import { register } from '@/actions/auth'

export default function RegisterPage() {
  return (
    <form
      action={register}
      className="max-w-md mx-auto mt-20 space-y-4"
    >
      <h1 className="text-xl font-bold">Register</h1>

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

      <button className="w-full bg-blue-600 text-white py-2">
        Register
      </button>
    </form>
  )
}
