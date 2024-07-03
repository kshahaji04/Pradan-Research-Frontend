import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='w-full d-flex justify-content-center align-items-center flex-column' style={{ height: 'calc(100vh - 1px)' }}>
            <h2>Page Not Found</h2>
            <p className='pt-2 pb-3'>Please click below to return Home page</p>
            <Link href="/" className='btn btn-primary'>Click Here</Link>
        </div>
    )
}