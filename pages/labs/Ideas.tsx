import type { NextPage } from 'next'

import { CallsForSubmission22Fall, CurrentProjects } from '../../src/labs/projects'
import { IProject } from '../../src/labs/projects/models'
import ProjectProposalPreview from '../../components/projects/ProjectProposalPreview'
import { PopupButton } from '@typeform/embed-react'



const Ideas: NextPage = () => {
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
      <h1 className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        2022 Builds
      </h1>
      <div className="text-xl text-slate-400 dark:text-slate-300">
        <p>Calling all builders! This is a collection of projects that <span className="font-semibold">CBG Labs</span> will build throughout the fall. We will host regular hackalongs to help you get started.</p>
        <p className="text-lg dark:text-gray-600 text-gray-300 my-2">As a member, you are required to contribute to at least one project this semester.</p>
      </div>
    </div>

    {/* research team form */}
    <div className="mx-auto my-2">
          <PopupButton
            id="SkEHwORL"
            size={60}
            onReady={() => {
              console.log('Member application form ready')
            }}
            className="font-bold bg-gradient-to-r from-purple-400 to-pink-600 p-2 rounded-lg text-slate-600 dark:text-slate-200 transition ease-in-out hover:scale-105 text-xl mx-auto"
          >
          Join Team
          </PopupButton>
      </div>

        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {
                    CallsForSubmission22Fall.length != 0 &&
                    (CallsForSubmission22Fall).map((project:IProject, index:number)=>
                              <ProjectProposalPreview project={project} key={index}/>
                    )
        }
        </div>

     </main>

    </div>
  )
}

export default Ideas