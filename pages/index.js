import Head from 'next/head'
import Image from 'next/image'
import PersaonelInfo from '../src/view/personalInfo';


function Home() {
  return (
    <>
    <section className='content'>
    <div className='container content_part'>
      <div className='col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44'>
          <PersaonelInfo />
      </div>
    </div>
    </section>
   

   
    </>
  )
}
export default Home;
