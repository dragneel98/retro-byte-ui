import style from "./header.module.css"
// import Link from "@/components/ui/link/Link";
import { FaGithub } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { LuComputer } from "react-icons/lu";
import { Button } from "retro-byte-ui";

export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.upHeader}>
                <p className={style.p}>obtain beautiful and elegant components</p>
                <Button type="secondary">Click Here</Button>
            </div>

            <div className={style.container}>
                <div className={style.container}>
                    <Link>
                        <div className={style.iconContainer}>
                            <LuComputer></LuComputer>
                            RetroByteUi
                        </div>
                    </Link>
                    <Link>Components</Link>
                    <Link>Docs</Link>
                </div>
                <div className={style.socialIcon}>
                    <button className={style.button}><IoMdSunny size={20} /></button>
                    <Link href="https://github.com/dragneel98" target="target"> <FaGithub size={20} /></Link>
                    <Link href="https://github.com/dragneel98" target="target"> <FaDiscord size={20} /></Link>
                    <div className={style.searchContainer}>
                        <input className={style.search}></input>
                        <HiMagnifyingGlass />
                    </div>
                </div>
            </div>
        </header>
    )
}