import type { NextPage } from 'next'
import Head from 'next/head'
import { PopupButton } from '@typeform/embed-react'

import ProjectPreview from '../../components/projects/ProjectPreview'
import { CurrentProjects } from '../../src/labs/projects'
import { IProject } from '../../src/labs/projects/models'



const Members: NextPage = () => {
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

     <div className="mb-8">
      <h1 className="text-5xl font-bold mb-2">
        Members
      </h1>
      <p className="text-xl text-slate-400 dark:text-slate-300">The chosen few who make it happen.</p>
    </div>
    <div className="text-xl text-black dark:text-white mb-8 leading-loose">
        <p className="pt-2 pb-2">If you're interested in researching blockchains or building new applications, join the <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">CMU Blockchain Group</span>. Our mission is to build and understand the decentralized future. As a member you'll have access to:</p>
      <ol className="list-decimal pl-8">
        <li className="text-gray-800 dark:text-gray-400 font-semibold hover:text-purple-500">Club sponsored conferences</li>
        <li className="text-gray-800 dark:text-gray-400 font-semibold hover:text-green-500">Member only dinners</li>
        <li className="text-gray-800 dark:text-gray-400 font-semibold hover:text-yellow-500">Bounty rewards</li>
        <li className="text-gray-800 dark:text-gray-400 font-semibold hover:text-sky-500">Monthly speakers</li>
        <li className="text-gray-800 dark:text-gray-400 font-semibold hover:text-orange-500">Industry job opportunities</li>
      </ol>
    </div>

        {/* project add form */}
        <div className="mx-auto">
          <PopupButton
            id="e6FFEeGR"
            size={60}
            onReady={() => {
              console.log('Member application form ready')
            }}
            className="font-bold bg-gradient-to-r from-purple-400 to-pink-600 p-2 rounded-lg text-slate-600 dark:text-slate-200 transition ease-in-out hover:scale-105 text-xl mx-auto"
          >
          Apply Now
          </PopupButton>
        </div>

      <p className="text-slate-300 dark:text-slate-400 my-2 text-md">Applications for the fall semester are now <span className="font-bold">closed</span>.</p>
      

     </main>

    </div>
  )
}

export default Members