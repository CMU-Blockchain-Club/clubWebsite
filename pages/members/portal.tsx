import type { NextPage } from 'next'
import Head from 'next/head'
import { PopupButton } from '@typeform/embed-react'

import ProjectPreview from '../../components/projects/ProjectPreview'
import { CurrentProjects } from '../../src/labs/projects'
import { IProject } from '../../src/labs/projects/models'
import Link from 'next/link'



const Portal: NextPage = () => {
  return (
    <div className="">
      {/* <Head>
        <title>CMU Projects</title>
        <meta name="description" content="CMU blockchain club resouces." />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

     <main className="max-w-4xl mx-auto px-8 pb-20">

      <div className="min-h-[6vh]">

      </div>

     <div className="mb-2">
      <h1 className="text-5xl font-bold mb-2">
        Member Portal
      </h1>
      <p className="text-xl text-slate-400 dark:text-slate-300">A central hub for member activities.</p>
    </div>
    <p className="text-lg mb-4">Congratulations on being accepted! The steps below will get you started as an official member of the <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">CMU Blockchain Group</span>.</p>
    <div className="flex flex-col space-y-8 max-w-2xl mx-auto">
      <div className="rounded-lg border px-2 py-4 hover:shadow-md hover:shadow-purple-400">
            <div className="my-2">
              <h1 className="text-gray-500 dark:text-gray-200 font-bold text-3xl">1. Update Your Profile</h1>
              <p className="text-lg text-slate-800 dark:text-slate-200">This super quick form will help the club get to know you. Your profile will be displayed on our website.</p>
            </div>
            <PopupButton
            id="L4JePZlc"
            size={80}
            onReady={() => {
              console.log('Add project form ready')
            }}
            className="font-bold bg-gray-50 dark:bg-gray-900 p-2 rounded-lg text-slate-600 dark:text-slate-400 transition ease-in-out hover:scale-105 text-xl mx-auto"
          >
          Add Profile
          </PopupButton>
      </div>
      <div className="text-xl text-black dark:text-white mb-8 leading-loose">
          <div className="rounded-lg border px-2 py-4 hover:shadow-md hover:shadow-pink-400">
            <div className="my-2">
              <h1 className="text-gray-500 dark:text-gray-200 font-bold text-3xl">2. Join a Team</h1>
              <p className="text-lg text-slate-800 dark:text-slate-200">As a member you are required to contribute to one project per semester. You can join a research team, a build team, or both!</p>
            </div>
            
              <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
                <Link href="../research">
                  <div className='rounded-lg border border-purple-500 px-2 py-4 lg:max-w-[50%] hover:cursor-pointer'>
                  <h1 className="text-gray-500 dark:text-gray-200 font-bold text-2xl">Researcher</h1>
                  <p className="text-lg text-slate-800 dark:text-slate-200">Explore cutting edge ideas on decentralized technology. Learn more <span className="text-purple-500 font-semibold"><Link href="../research">here</Link></span>.</p>
                  </div>
                </Link>
                <Link href="../labs/Ideas">
                  <div className='rounded-lg border border-pink-500 px-2 py-4 lg:max-w-[50%] hover:cursor-pointer'>
                  <h1 className="text-gray-500 dark:text-gray-200 font-bold text-2xl">Builder</h1>
                  <p className="text-lg text-slate-800 dark:text-slate-200">Build and deploy wicked cool blockchain applications. Learn more <span className="text-pink-500 font-semibold"><Link href="../labs/Ideas">here</Link></span>.</p>
                  </div>
                </Link>
              </div>
          </div>
      </div>
      <a href="https://discord.gg/9Pqq6nnwU2" target="_blank" rel="noopener noreferrer">
      <div className="rounded-lg border px-2 py-4 hover:shadow-md hover:shadow-purple-400">
            <div className="my-2">
              <h1 className="text-gray-500 dark:text-gray-200 font-bold text-3xl">3. Stay Connected</h1>
              <p className="text-lg text-slate-800 dark:text-slate-200"><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-semibold">Join our Discord</span> to stay in touch and learn about the latest opportunities.</p>
            </div>
            <div className=''>
              <img src="/media/social/logoDiscord.png" width="40"/>
            </div>
      </div>
      </a>
      <Link href="../conferences">
      <div className="hover:cursor-pointer rounded-lg border px-2 py-4 hover:shadow-md hover:shadow-purple-400">
            <div className="my-2">
              <h1 className="text-gray-500 dark:text-gray-200 font-bold text-3xl">4. Events</h1>
              <p className="text-lg text-slate-800 dark:text-slate-200"><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-semibold">Apply for funding</span> to attend major community events like EthDenver.</p>
            </div>
      </div>
      </Link>
    </div>

      

     </main>

    </div>
  )
}

export default Portal