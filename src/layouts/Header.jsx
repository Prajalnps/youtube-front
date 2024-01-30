import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faVideo, faBell, faUser, faMicrophone, faMagnifyingGlass, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { faMicrophone } from "@fortawesome/free-regular-svg-icons";
import YoutubeIcon from "../assets/icons/YoutubeIcon";
import Button from "../components/Button";
import { useState } from "react";

export default function Header() {

    const [showFullWidthSearch, setShowFullWidthSearch] = useState(false)

    return (
        <>
            <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">

                {/* logo section start */}
                <div className={`logo-section flex items-center flex-shrink-0 gap-2 ${showFullWidthSearch ? "hidden md:flex" : "flex"}`}>
                    <Button variant="ghost" size="icon">
                        <FontAwesomeIcon icon={faBars} />
                    </Button>
                    <YoutubeIcon />
                </div>


                {/* search section start 
                    flex-grow, section grows to be as large as it can
                */}
                <form action="" className={`search-section gap-2 flex-grow justify-center ${showFullWidthSearch ? "flex" : "hidden md:flex"}`}>
                    {
                        showFullWidthSearch &&
                        (<Button Button type="button" variant="ghost" size="icon" className="flex-shrink-0" onClick={() => { setShowFullWidthSearch(false) }}>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </Button>)
                    }
                    <div className="search-input flex flex-grow max-w-[600px]">
                        <input type="search" placeholder="Search"
                            className="rounded-l-full outline-none focus:border-blue-500 border border-secondary-borde shadow-inner shadow-secondary py-1 px-4 text-lg w-full" />
                        <Button className="rounded-r-full py-2 px-4 border border-secondary-border">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </Button>
                    </div>
                    <Button size="icon">
                        <FontAwesomeIcon icon={faMicrophone} />
                    </Button>
                </form>

                {/* nav section start 
                    md:gap-2, for medium size and higher
                */}
                <div className={`nav-section flex items-center flex-shrink-0 md:gap-2 ${showFullWidthSearch ? "hidden md:flex" : "flex"}`}>
                    <Button variant="ghost" size="icon" className="md:hidden" onClick={() => { setShowFullWidthSearch(true) }}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Button>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <FontAwesomeIcon icon={faMicrophone} />
                    </Button>
                    <Button variant="ghost" size="icon">
                        <FontAwesomeIcon icon={faVideo} />
                    </Button>
                    <Button variant="ghost" size="icon">
                        <FontAwesomeIcon icon={faBell} />
                    </Button>
                    <Button variant="ghost" size="icon">
                        <FontAwesomeIcon icon={faUser} />
                    </Button>
                </div>
            </div >
        </>
    )
}