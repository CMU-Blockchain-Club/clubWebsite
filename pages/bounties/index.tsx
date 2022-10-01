import type { NextPage } from 'next'
import Head from 'next/head'
import { PopupButton } from '@typeform/embed-react'

import { CurrentBounties } from '../../src/bounties'
import { IBounty } from '../../src/bounties/models'
import BountyPreview from '../../components/bounties/BountyPreview'



const Bounties: NextPage = () => {
  return (
    <div className="">
      {/* <Head>
        <title>Bounties</title>
        <meta name="description" content="CMU blockchain club resouces." />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

     <main className="max-w-4xl mx-auto px-8 pb-20">

      <div className="min-h-[6vh]">

      </div>

     <div className="mb-8">
      <h1 className="text-5xl font-bold mb-2">
        Bounties
      </h1>
      <p className="text-xl text-slate-400 dark:text-slate-300">This is a curated list of bounties designed for club members. Each sneak peek links to a full description, with information on how to participate and collect your reward.</p>
    </div>

        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {
                    CurrentBounties.length != 0 &&
                    (CurrentBounties).map((bounty:IBounty, index:number)=>
                              <BountyPreview bounty={bounty} key={index}/>
                    )
        }
        </div>

        {/* project add form */}
        <div className="mx-auto">
          <PopupButton
            id="tW4DCMcA"
            size={80}
            onReady={() => {
              console.log('Add project form ready')
            }}
            className="font-bold bg-gray-50 dark:bg-gray-900 p-2 rounded-lg text-slate-600 dark:text-slate-400 transition ease-in-out hover:scale-105 text-xl mx-auto"
          >
          Add Your Bounty
          </PopupButton>
        </div>
      

     </main>

    </div>
  )
}

export default Bounties