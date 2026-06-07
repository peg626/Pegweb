import { useNavigate } from "react-router-dom";

export default function Icon({ img, page }) {
    const nav = useNavigate();

    return (
        <img
            src={`/icons/${img}.ico`}
            onClick={() => nav(page)}
            className="icon"
            
        />
    );
}
export function IconLink({ img, url }) {
    const redirect = () => {
        window.location.href = url;

    }
    return (
        <img
            src={`/icons/${img}.ico`}
            onClick={redirect}
            className="icon"
            
        />
    )
}