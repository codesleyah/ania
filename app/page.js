import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-24 bg-white">
      <Image src={"/logos.png"} height={200} width={300} />
      <hr className='bg-gray-100'/>
      <div className="flex flex-col  gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-gray-600 font-semibold">USERNAME</h1>
          <input className='border border-gray-200 py-1 px-2 w-80'
            placeholder='username'/>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-gray-600 font-semibold">PASSWORD</h1>
          <input className='border border-gray-200 py-1 px-2 w-80'
            placeholder='password'/>
        </div>
        <Link href="/pages/dashboard" className="bg-blue-500 text-white flex items-center justify-center rounded py-1 px-2 w-80">
          Login
        </Link>
      </div>
    </main>
  )
}
