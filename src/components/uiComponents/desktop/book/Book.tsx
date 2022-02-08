import React from "react";
import BookPage from "./BookPage";
import book from './Book.svg'

const Book: React.FC = () => {
    return(
        <div id="about" className="pt-24 md:pt-8 lg:pt-12 xl:pt-8 relative md:h-[35rem] lg:h-[45rem] xl:h-[55rem] " >
            <BookPage />
            <img className="absolute z-0 rotate-3 scale-150 md:scale-100 -translate-x-[42%] "  src={book} />
        </div>
    )
}

export default Book 