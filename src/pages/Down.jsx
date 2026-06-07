import { Grid } from "./comp/Grids"
import Icon from "./comp/Icons"
import { IconLink } from "./comp/Icons"
export default function Down() {
    return (
        <>
        <h1>Downloads</h1>
        <Grid>
            <IconLink img="mingw" url="https://github.com/peg626/pwebapps/raw/refs/heads/main/mingw-get-setup.exe"/>
        </Grid>
        </>
    )
}
