import type { NextPage } from 'next'
import Head from 'next/head'
import { PopupButton } from '@typeform/embed-react'

import ProjectPreview from '../../components/projects/ProjectPreview'
import ResourcePreview from '../../components/resources/ResourcePreview'
import { CMUBrand } from '../../src/brand'
import { CurrentProjects } from '../../src/labs/projects'
import { IProject } from '../../src/labs/projects/models'



const Labs: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>CMU Projects</title>
        <meta name="description" content="CMU blockchain club resouces." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <main className="max-w-4xl mx-auto px-8 pb-20">

      <div className="min-h-[6vh]">

      </div>

     <div className="mb-8">
      <h1 className="text-5xl font-bold mb-2">
        CBG Labs
      </h1>
      <p className="text-xl text-slate-400 dark:text-slate-300">We're focused on building blockchain tools that make the internet a better place to exist. This is a collection of projects that our members are building.</p>
    </div>

        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {
                    CurrentProjects.length != 0 &&
                    (CurrentProjects).map((project:IProject, index:number)=>
                              <ProjectPreview project={project} key={index}/>
                    )
        }
        </div>

        {/* project add form */}
        <div className="mx-auto">
          <PopupButton
            id="wF7rKeIG"
            size={60}
            onReady={() => {
              console.log('Add project form ready')
            }}
            className="font-bold bg-gray-50 dark:bg-gray-900 p-2 rounded-lg text-slate-600 dark:text-slate-400 transition ease-in-out hover:scale-105 text-xl mx-auto"
          >
          Add Your Project
          </PopupButton>
        </div>
      

     </main>

    </div>
  )
}

export default Labs