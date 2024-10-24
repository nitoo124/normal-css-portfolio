import Image from 'next/image'
import home from '../../../public/images/home.jpg'
import Button from './button'



function Hero() {
  return (
   <main className = 'flex lg:flex-row flex-col justify-between items-center mt-14 px-12'>
    {/* content section */}
    <section className='text-center p-5  '>
        <h1 className='text-3xl font-bold'>HI, I am <span className=' text-purple-700'>Nitoo kumari</span>, <br/> Frontend Developer.</h1>
        <p className='mt-3'>Welcome to my portfolio! I'm a frontend developer dedicated to crafting engaging and user-friendly web experiences.</p>
        <div className='mt-3'>
        <Button  text = 'Learn More'/>
        </div>

    </section>
     
          {/* image section */}
     <section className = 'mt-8 text-center basis-1/2 '>

      <Image className='mr-8  rounded-br-3xl' src={ home} alt='beatutifull girls with laptop' width={400} height={400} loading='lazy'/>

     </section>
   </main>

  )
}

export default Hero