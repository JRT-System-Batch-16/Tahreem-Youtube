import React, { useState } from 'react'
function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [privacy, setPrivacy] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
if (remember && privacy && email && password) {
      onLogin()
    }
  }
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <form 
       onSubmit={handleSubmit}
     className="w-full max-w-md bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
        <div className="flex items-center justify-center gap-2 mb-8">
         <h1 className="text-white text-3xl font-bold"> Sign In</h1>
        </div>
        <input type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-black border border-zinc-700 text-white px-4 py-3 rounded-xl outline-none mb-4" />
    <input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-black border border-zinc-700 text-white px-4 py-3 rounded-xl outline-none mb-5"/>
        <div className="flex items-center gap-3 mb-4">
    <input type="checkbox" checked={remember}
            onChange={() => setRemember(!remember)}
            className="w-4 h-4"/>
          <p className="text-white text-sm"> Remember Me </p>
        </div>
    <div className="flex items-center gap-3 mb-6">
    <input type="checkbox"  checked={privacy}
        onChange={() => setPrivacy(!privacy)}
            className="w-4 h-4"/>
          <p className="text-white text-sm"> I Agree To Privacy Policy </p>
        </div>
        <button type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold"> Sign In
        </button>
      </form>
    </div>
  )
}
export default Login