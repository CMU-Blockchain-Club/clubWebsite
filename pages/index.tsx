import type { NextPage } from 'next'
import Head from 'next/head'
import DoCard from '../components/DoCard'
import Footer from '../components/Footer'
import MemberPreview from '../components/members/MemberPreview'
import OfficerPreview from '../components/members/OfficerPreview'

import PartnerPreview from '../components/partners/PartnerPreview'
import { FacultyAdvisors } from '../src/advisors'
import { IAdvisor } from '../src/advisors/models'
import { CMUBrand } from '../src/brand'
import { Board23Spring } from '../src/members'
import { IBoardMember } from '../src/members/models'
import { ActivePartners } from '../src/partners'
import { IPartner } from '../src/partners/models'


const Home: NextPage = () => {
  return (
    <div className="">

     <main className="">

        <div className="min-h-[100vh] mx-auto dark:bg-black dark:text-white">
          <div className="h-[15vh] md:h-[16vh] lg:h-[20vh] xl:h-[25vh]">

          </div>
          <div className="max-w-5xl mx-auto px-4">

          <div className="flex flex-col md:flex-row space-x-10 space-y-12">
            <div className="">
              <img src="/cbgLogo.png" className="max-w-[90%] md:max-w-[500px] h-auto mx-auto"/>
            </div>
            <div className="flex-grow mx-auto">
              <div className="md:h-[50px]">

              </div>
              <div className="mx-auto">
                <h1 className="text-4xl xl:text-5xl font-bold mx-auto">CMU Blockchain Group</h1>
                <p className="text-lg font-semibold text-gray-600 dark:text-gray-400">Creating the future one block at a time.</p>
              </div>
              
            </div>
          </div>

          </div>
          
        </div>
        <div className="bg-black max-w-screen text-white dark:bg-white dark:text-black">

          <div className="max-w-5xl mx-auto pt-8 pb-20">
            <div className="flex-col md:flex-row">
              <div className="text-center font-bold text-6xl font-bold mb-8">
                Our Partners
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto place-items-center">
              {
                ActivePartners.length != 0 &&
                (ActivePartners).map((partner:IPartner, index:number)=>
                          <PartnerPreview partner={partner} key={index}/>
                )
              }
              </div>
            </div>
          </div>
      
        </div>

        <div className="max-w-screen dark:bg-black dark:text-white">

          <div className="max-w-5xl mx-auto pt-8 pb-20">
            <div className="flex-col md:flex-row">
              <div className="text-center font-bold text-6xl font-bold mb-8">
                What We Do
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-4 md:gap-8 px-8 md:px-0">
               

                <DoCard title={"101"} description={"Senior members deliver weekly education sessions that simplify the complex world of blockchain."} hexColor={CMUBrand.green}/>

                <DoCard title={"Labs"} description={"An incubator for CMU students to transform ideas into code that changes the world. Project teams are supported by community grants and in house advisors."} hexColor={CMUBrand.red}/>

                <DoCard title={"Network"} description={"We connect the best blockchain companies with the brightest minds from Carnegie Mellon."} hexColor={CMUBrand.blue}/>
         
          

              </div>
            </div>
          </div>
      
        </div>
        <div className="bg-black max-w-screen text-white pt-8 pb-20 dark:bg-white dark:text-black">
        <div className='max-w-4xl mx-auto pb-8'>
            <div className="flex-col md:flex-row">
              <div className="text-center font-bold text-6xl font-bold mb-8">
                    Team
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-3 mx-auto place-items-center">
                  {
                    Board23Spring.length != 0 &&
                    (Board23Spring).map((boardMember:IBoardMember, index:number)=>
                              <OfficerPreview member={boardMember} key={index}/>
                    )
                  }
              </div>
              <div className="text-center font-bold text-5xl font-bold my-12">
                    Advisors
              </div>
              <div className="grid grid-cols-1  mx-auto place-items-center">
                  {
                    FacultyAdvisors.length != 0 &&
                    (FacultyAdvisors).map((facultyAdvisor:IAdvisor, index:number)=>
                              <MemberPreview member={facultyAdvisor} key={index}/>
                    )
                  }
              </div>
        </div>
        </div>
        
      </div>
      <Footer/>

     </main>

    </div>
  )
}

export default Home
