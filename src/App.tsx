import './App.css'
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { ModeToggle } from './components/mode-toggle'

import twitchLogo from './assets/twitch_logo_512.png'
import youtubeLogo from './assets/youtube_512.png'
import kickLogo from './assets/kick_512.png'
// import { useEffect, useState } from 'react'
// import { FaAngleDown } from "react-icons/fa";
import { GrWindows } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";

function App() {

  // const [show, setShow] = useState(false)

  // useEffect(() => {
  //   document.querySelectorAll('.floating-img').forEach((el, index) => {
  //     el.style.setProperty('--i', String(index + 1));
  //   });
  // }, []);


  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className='absolute top-5 right-5 '>
          <ModeToggle />
        </div>
        <img src={twitchLogo} alt="Twitch" className="twitch-logo floating-img animate-fadeInUp" style={{ ['--i' as never]: 1 }} />
        <img src={youtubeLogo} alt="YouTube" className="youtube-logo floating-img animate-fadeInUp" style={{ ['--i' as never]: 2 }} />
        <img src={kickLogo} alt="Kick" className="kick-logo floating-img animate-fadeInUp" style={{ ['--i' as never]: 3 }} />

        {/* <video autoPlay loop muted className="video-background">
          <source src={video}   type="video/webm" />
        </video> */}
        <main className='p-24 main-container'>
          <section className='py-24 flex flex-col items-center text-center animate-fadeInUp'>
            <h1 className='text-5xl my-4 font-bold'>Multistream Chat Fuser</h1>
            <p className='text-2xl text-muted-foreground'>
              Twitch, YouTube, and Kick Chats combined into one.
            </p>
            <div className='flex gap-4 py-6 mt-10 items-center justify-center buttons-container'>
              <a href="https://github.com/Tuvshno/multistream-chat-fuser/releases/download/v1.3.9/multistream-chat_1.3.9.exe">
                <Button className='button-class'>
                  <GrWindows className='mr-3' />
                  Download the Latest Release
                </Button>
              </a>
              <Button className={`${buttonVariants({ variant: "secondary" })} button-class`} onClick={() => window.open("https://github.com/Tuvshno/multistream-chat-fuser", "_blank")} >
                <GrGithub className='mr-3' />
                Source Code
              </Button>
            </div>
          </section>

          <section className=' flex gap-4 animate-fadeInUp card-container' >
            <Card className='card w-1/4 '>
              <CardHeader>
                <CardTitle>Combine</CardTitle>
              </CardHeader>
              <CardContent className='text-muted-foreground'>
                <p>Currently supports Twitch, YouTube, and Kick</p>
              </CardContent>
            </Card>

            <Card className='card w-1/4'>
              <CardHeader>
                <CardTitle>Customize</CardTitle>
              </CardHeader>
              <CardContent className='text-muted-foreground'>
                <p>Change platform icons, badges, emotes, and themes</p>
              </CardContent>
            </Card>

            <Card className='card w-1/4'>
              <CardHeader>
                <CardTitle>Emotes</CardTitle>
              </CardHeader>
              <CardContent className='text-muted-foreground'>
                <p>7TV and Default Emote integrations</p>
              </CardContent>
            </Card>

            <Card className='card w-1/4'>
              <CardHeader>
                <CardTitle>Local</CardTitle>
              </CardHeader>
              <CardContent className='text-muted-foreground'>
                <p>Runs completely locally. No External APIs</p>
              </CardContent>
            </Card>
          </section>

          {/* <div className='mt-[3rem]'>
            <Button className={buttonVariants({ variant: "outline" })} onClick={onClickButton}><FaAngleDown /></Button>
          </div> */}

          {/* {show &&
            (
              <section>
                <div>SHowing the new sectyion</div>
              </section>
            )
          } */}


        </main>
      </ThemeProvider>

    </>
  )
}

export default App
