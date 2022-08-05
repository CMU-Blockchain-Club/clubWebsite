import type { NextPage } from 'next'
import Head from 'next/head'
import { PopupButton } from '@typeform/embed-react'

import ProjectPreview from '../../components/projects/ProjectPreview'
import { CurrentProjects } from '../../src/labs/projects'
import { IProject } from '../../src/labs/projects/models'



const Labs: NextPage = () => {
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
        Alumni
      </h1>
      <p className="text-xl text-slate-400 dark:text-slate-300">Celebrating those who laid the path before us.</p>
    </div>
    <div className="text-xl text-black dark:text-white mb-4 leading-loose">
        <p>We're proud to have a large network of <span className="font-semibold text-green-400">builders</span>, <span className="font-semibold text-blue-400">thinkers</span>, and <span className="font-semibold text-purple-500">doers</span> inside of the blockchain space. Our alumni have gone on to create bilion dollar funds, invest in sustainable research, and create innovative technology on the decentralized frontier.</p>
        <p className="text-lg italic my-4">If you're interested in adding your bio or project to our website, please fill out the form below.</p>
    </div>

        {/* project add form */}
        <div className="mx-auto">
          <PopupButton
            id="LQJPhkXQ"
            size={60}
            onReady={() => {
              console.log('Add project form ready')
            }}
            className="font-bold bg-gray-50 dark:bg-gray-800 p-2 rounded-lg text-slate-600 dark:text-slate-200 transition ease-in-out hover:scale-105 text-xl mx-auto"
          >
          Connect
          </PopupButton>
        </div>
      

     </main>

    </div>
  )
}

export default Labs