import { Button, CopyText } from "retro-byte-ui";
import style from "./page.module.css";
import { BentoGrid } from "./bentoGrid";
// import { Button } from "@/components/ui/button/Button";
// import { CopyText } from "@/components/ui/copyText/copyText";
// import { BentoGrid } from "./bentoGrid";

export function Landing() {

    return (
        <section className={style.landing}>
            <div className={style.principalContainer}>
                <p className={style.principal}> make beautiful retro futurist websites</p>
                <p className={style.principal}>
                    <span className={style.specialWord}>QUICKLY</span> and <span className={style.specialWord2}>EASILY</span>
                </p>
                <p className={style.secondary}> Created with Next.js</p>
                <div className={style.copyContainer}>
                    <Button>Start Now</Button>
                    <CopyText></CopyText>
                </div>
            </div>
            <BentoGrid></BentoGrid>
        </section>
    )
}