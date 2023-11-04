import Image from 'next/image'
import MainHeader from './components/header/MainHeader'

export default function Home() {
  return (
    <div className='flex flex-col items-center bg-background dark:bg-background_d min-w-screen min-h-screen'>
      <MainHeader></MainHeader>
      
      <div className='w-full sm:w-10/12 h-fill  flex justify-around items-center p-5 pt-16'>
        <div className='w-2/3 mr-4'>
          <p className='text-2xl'>Hi, my name is</p>
          <h2 className='text-6xl py-8'>Jakob Edvardsson</h2>
          <b className='text-3xl py-2'>I&apos;m a computer science student at Malmö University, who loves tinkering with computers and software!</b>

        </div>
        <div className='w-1/3'>
          <Image src={"/tempimage.jpg"} width={"200"} height={"200"} alt={'Picture of me'}></Image>

        </div>
      </div>




    </div>
  )
}