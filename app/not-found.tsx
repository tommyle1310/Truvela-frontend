import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='tw-cc w-full min-h-96'>
            <div className="tw-fc gap-4 flex flex-col text-center max-sm:px-3">
                <h1 className='text-[8rem] max-sm:text-4xl font-extrabold text-lavender-warning-600'>Oops</h1>
                <h5 className='tw-xl-sb max-sm:text-lg-sb'>404 - PAGE NOT FOUND</h5>
                <p className='text-sm font-thin'>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                <Link href='/'>
                    <Button className='rounded-full px-8 shadow-md bg-lavender-primary-600 text-white shadow-lavender-primary-900 py-6 mx-auto'>GO TO HOMEPAGE</Button>
                </Link>
            </div>
        </div>
    )
}