import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import './App.css';
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, } from "@/components/ui/card";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ModeToggle } from './components/mode-toggle';
import twitchLogo from './assets/twitch_logo_512.png';
import youtubeLogo from './assets/youtube_512.png';
import kickLogo from './assets/kick_512.png';
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
    return (_jsx(_Fragment, { children: _jsxs(ThemeProvider, { defaultTheme: "dark", storageKey: "vite-ui-theme", children: [_jsx("div", { className: 'absolute top-5 right-5 ', children: _jsx(ModeToggle, {}) }), _jsx("img", { src: twitchLogo, alt: "Twitch", className: "twitch-logo floating-img animate-fadeInUp", style: { '--i': 1 } }), _jsx("img", { src: youtubeLogo, alt: "YouTube", className: "youtube-logo floating-img animate-fadeInUp", style: { '--i': 2 } }), _jsx("img", { src: kickLogo, alt: "Kick", className: "kick-logo floating-img animate-fadeInUp", style: { '--i': 3 } }), _jsxs("main", { className: 'p-24 main-container', children: [_jsxs("section", { className: 'py-24 flex flex-col items-center text-center animate-fadeInUp', children: [_jsx("h1", { className: 'text-5xl my-4 font-bold', children: "Multistream Chat Fuser" }), _jsx("p", { className: 'text-2xl text-muted-foreground', children: "Twitch, YouTube, and Kick Chats combined into one." }), _jsxs("div", { className: 'flex gap-4 py-6 mt-10 items-center justify-center buttons-container', children: [_jsx("a", { href: "https://github.com/Tuvshno/multistream-chat-fuser/releases/download/v1.3.9/multistream-chat_1.3.9.exe", children: _jsxs(Button, { className: 'button-class', children: [_jsx(GrWindows, { className: 'mr-3' }), "Download the Latest Release"] }) }), _jsxs(Button, { className: `${buttonVariants({ variant: "secondary" })} button-class`, onClick: () => window.open("https://github.com/Tuvshno/multistream-chat-fuser", "_blank"), children: [_jsx(GrGithub, { className: 'mr-3' }), "Source Code"] })] })] }), _jsxs("section", { className: ' flex gap-4 animate-fadeInUp card-container', children: [_jsxs(Card, { className: 'card w-1/4 ', children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Combine" }) }), _jsx(CardContent, { className: 'text-muted-foreground', children: _jsx("p", { children: "Currently supports Twitch, YouTube, and Kick" }) })] }), _jsxs(Card, { className: 'card w-1/4', children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Customize" }) }), _jsx(CardContent, { className: 'text-muted-foreground', children: _jsx("p", { children: "Change platform icons, badges, emotes, and themes" }) })] }), _jsxs(Card, { className: 'card w-1/4', children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Emotes" }) }), _jsx(CardContent, { className: 'text-muted-foreground', children: _jsx("p", { children: "7TV and Default Emote integrations" }) })] }), _jsxs(Card, { className: 'card w-1/4', children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Local" }) }), _jsx(CardContent, { className: 'text-muted-foreground', children: _jsx("p", { children: "Runs completely locally. No External APIs" }) })] })] })] })] }) }));
}
export default App;
