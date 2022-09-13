import type { NextPage } from 'next'

import { CallsForSubmission22Fall, CurrentProjects } from '../../src/labs/projects'
import { IProject } from '../../src/labs/projects/models'
import ProjectProposalPreview from '../../components/projects/ProjectProposalPreview'
import { ResearchQuestions22 } from '../../src/labs/research'
import { IResearchQuestion } from '../../src/labs/research/models'
import QuestionPreview from '../../components/research/QuestionPreview'



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
        CBG Research
      </h1>
      <div className="text-xl text-slate-400 dark:text-slate-300">
        <p>Calling all researchers! This is a collection of research questions that we will explore throughout the year. We will host regular EDU sessions to help you get started. Team forms will be released soon.</p>
        <p className="text-lg dark:text-gray-600 text-gray-300 my-2">As a member, you are required to contribute to at least one research project this semester.</p>
      </div>
    </div>

        <div className="mx-auto grid grid-cols-1 gap-8 mb-16">
        {
                    ResearchQuestions22.length != 0 &&
                    (ResearchQuestions22).map((rq:IResearchQuestion, index:number)=>
                              <QuestionPreview rq={rq} key={index}/>
                    )
        }
        </div>

     </main>

    </div>
  )
}

export default Ideas