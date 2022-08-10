import { CasesStudies } from "./CasesStudies"
import { GetInTouch } from "./GetInTouch"
import { Home } from "./Home"
import { RecentWork } from "./RecentWork"
import { Testimonials } from "./Testimonials"

export const Pages = () => {
    return (
        <main>
            <article>
                <Home/>
                <CasesStudies/>
                <Testimonials/>
                <RecentWork/>
                <GetInTouch/>
            </article>
        </main>
    )
}