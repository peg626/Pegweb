import { Grid } from "./comp/Grids"
import Icon from "./comp/Icons"

export default function Home() {
    return (
        <>
        <h1>App selector</h1>
        <Grid>
            <Icon img="xp_homen" page="/"/>
            <Icon img="xp_copy1" page="/downloads"/>
        </Grid>
        </>
    )
}