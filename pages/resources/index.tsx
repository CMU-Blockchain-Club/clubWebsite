import type { NextPage } from 'next'
import Head from 'next/head'
import ResourcePreview from '../../components/resources/ResourcePreview'
import { LearningResources } from '../../src/resources'
import { IBlockchainResource } from '../../src/resources/models'


const Resources: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Blockchain Resources</title>
        <meta name="description" content="CMU blockchain club resouces." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <main className="max-w-4xl mx-auto px-8 pb-20">

      <div className="min-h-[6vh]">

      </div>

     <div className="mb-8">
      <h1 className="text-5xl font-bold mb-2">
        Resources
      </h1>
      <p className="text-xl text-slate-400 dark:text-slate-300">This is a collection of resources that has helped our club learn blockchain fundamentals and build killer apps. Good luck learning and keep on building!</p>
    </div>

        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {
                    LearningResources.length != 0 &&
                    (LearningResources).map((learningResource:IBlockchainResource, index:number)=>
                              <ResourcePreview resource={learningResource}  key={index}/>
                    )
        }
        </div>

     </main>

    </div>
  )
}

export default Resources