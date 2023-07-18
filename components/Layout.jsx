import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./Footer"

// TODO: Update to support dynamic headers
export default function Layout({children}) {

    return (
        <div className={`min-h-screen`}>
        <Head>
          <title>CMU Blockchain Group</title>
          <meta name="description" content="The Carnegie Mellon Blockchain club is focused on developing and understanding the decentralized future." />
          <link rel="icon" href="/cbgLogo.ico" />
        </Head>
        
      <main className={`mx-auto`}>
          <Navbar/>
        {children}
          
       </main>
    </div>
    );
  }
