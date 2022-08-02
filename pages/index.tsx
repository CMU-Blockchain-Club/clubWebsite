import type { NextPage } from 'next'
import Head from 'next/head'


const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>CMU Blockchain Group</title>
        <meta name="description" content="The Carnegie Mellon Blockchain club is focused on developing and understanding the decentralized future." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <main className="max-w-4xl mx-auto">

      <div className="md:min-h-[6rem]">

      </div>

        <div className="min-h-[100vh]">
          <div className="flex-col md:flex-row">
            <div className="">
              <img src="/cbgLogo.png" className="max-w-[90%] md:max-w-[300px] h-auto"/>
            </div>
            <div className="">
              <h1 className="text-4xl">CMU Blockchain Group</h1>
              <p className="text-lg">Creating the future one block at a time.</p>
            </div>
          </div>
        </div>

     </main>

    </div>
  )
}

export default Home
