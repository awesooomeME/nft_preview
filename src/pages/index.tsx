import Image from 'next/image'
import { Outfit } from 'next/font/google'

import nft from '../../public/image-equilibrium.jpg'
import etherium from '../../public/icon-ethereum.svg'
import clock from '../../public/icon-clock.svg'
import avatar from '../../public/image-avatar.png'
import view from '../../public/icon-view.svg'
import Link from 'next/link'

const outfit = Outfit({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='w-screen h-screen flex justify-center
      items-center bg-very_dark_blue_bg'>
        <div className='bg-very_dark_blue_card w-[90%] md:w-1/4 h-[70%] md:h-[85%]
          p-5 rounded-xl flex flex-col justify-between'>
            <div className='h-3/5 md:h-4/6 relative rounded-xl group
              flex justify-center bg-cyan '>
              <Image src={view} alt='view icon' className='absolute top-1/2 left-1/2 opacity-0 
                group-hover:opacity-100 -translate-x-1/2 -translate-y-1/2'/>
              <Image src={nft} alt='nft' className='rounded-xl h-full w-auto cursor-pointer group-hover:opacity-20'/>
            </div>
            <h1 className='text-white text-xl md:text-2xl font-bold'>
              Equilibrium <Link href='/'>#3429</Link>
            </h1>
            <h1 className='text-soft_blue text-xl md:text-2xl'>
              Our Equilibrium collection promotes balance and calm
            </h1>
            <div className='flex justify-between'>
              <div className='flex gap-2 items-center'>
                <Image src={etherium} alt='etherium logo'/>
                <h1 className='text-cyan'>
                  0.041ETH
                </h1>
              </div>
              <div className='flex gap-2 items-center'>
                <Image src={clock} alt='clock logo'/>
                <h1 className='text-soft_blue'>
                  3 days left
                </h1>
              </div>
            </div>
            <hr className='text-very_dark_blue_line my-2'/>
            <div className='flex items-center gap-5'>
              <Image src={avatar} alt='avatar' className='w-5 md:w-10 h-auto'/>
              <h1 className='text-soft_blue'>
                Creation of <Link href='/' className='text-white'>Jules Wyvern</Link>
              </h1>
            </div>
        </div>
    </main>
  )
}
