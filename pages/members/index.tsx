import type { NextPage } from 'next'
import Head from 'next/head'
import { PopupButton } from '@typeform/embed-react'

import ProjectPreview from '../../components/projects/ProjectPreview'
import { CurrentProjects } from '../../src/labs/projects'
import { IProject } from '../../src/labs/projects/models'
import Link from 'next/link'
import { IMember } from '../../src/members/models'
import { Members22And23 } from '../../src/members'
import MiniMemberPreview from '../../components/members/MiniMemberPreview'



const Members: NextPage = () => {
  const membersToDisplay:IMember[] = Members22And23;
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
      <p className="text-lg text-slate-400 dark:text-slate-300">The Researchers and Builders Who Make it Happen </p>
    </div>

    
      <div className="my-4">
      <h1 className="text-3xl font-bold text-transparent font-bold bg-clip-text bg-gradient-to-b from-purple-400 to-pink-600">2022-23 Class</h1>
      <p className="text-lg text-black dark:text-white">A few of the researchers and builders from our latest class of applicants.</p>
      <p className="text-lg text-black dark:text-white">Apply through the <span className="text-purple-500 font-semibold"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfFeACwOqwFkNLDvgb-7fEvVkHee_wRUPrl9WkaV3VF2cN8pQ/viewform" target="_blank"  rel="noreferrer">Google Form&nbsp;</a></span>to access our current opportunities.</p>
      {/*</div><Link href="../members/portal">member portal</Link></span> for current opportunities.</p>*/}
      </div>
      
      <div className="grid my-6 grid-cols-1 md:grid-cols-2 gap-5 md:gap-3 mx-auto place-items-center">
        {
          membersToDisplay.length != 0 &&
          (membersToDisplay).map((member:IMember, index:number)=>
                    <MiniMemberPreview member={member} key={index}/>
          )
        }
      </div>
        
      
        {/* project add form */}
        <div className="mx-auto">
          <PopupButton
            id="L4JePZlc"
            size={80}
            onReady={() => {
              console.log('Member profile form ready')
            }}
            className="font-bold bg-gradient-to-r from-purple-400 to-pink-600 p-2 rounded-lg text-slate-600 dark:text-slate-200 transition ease-in-out hover:scale-105 text-xl mx-auto"
          >
          Add Your Profile
          </PopupButton>
        </div>

        <div className="text-xl text-black dark:text-white mt-8 mb-8 leading-loose">
        <h2 className='text-2xl font-bold text-gray-800 dark:text-gray-200'>Member Perks</h2>
        <p className="pt-2 pb-2">Our mission is to build and understand the decentralized future. As a member of the <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">CMU Blockchain Group</span> you have access to:</p>
      <ol className="list-decimal pl-8">
        <li className="text-gray-800 dark:text-gray-400 font-semibold hover:text-purple-500">Sponsored travel to conferences</li>
        <li className="text-gray-800 dark:text-gray-400 font-semibold hover:text-green-500">Member only dinners</li>
        <li className="text-gray-800 dark:text-gray-400 font-semibold hover:text-yellow-500">Bounty rewards</li>
        <li className="text-gray-800 dark:text-gray-400 font-semibold hover:text-sky-500">Monthly speakers</li>
        <li className="text-gray-800 dark:text-gray-400 font-semibold hover:text-orange-500">Industry job opportunities</li>
      </ol>
    </div>
      

     </main>

    </div>
  )
}

export default Members