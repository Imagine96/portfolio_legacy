import React from "react";
import BookPage from "./BookPage";
import book from './Book.svg'

const Book: React.FC = () => {
    return(
        <div id="about" className=" relative md:h-[35rem] lg:h-[45rem] xl:h-[55rem] " >
            <BookPage />
            <img className="absolute z-0 rotate-3 scale-150 md:scale-100 2xl:scale-[90%] 2xl:-translate-x-[35%] -translate-x-[42%] " alt="scrap-book"  src={book} />
        </div>
    )
}

export default Book 