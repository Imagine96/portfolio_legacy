import { useState } from 'react'

const basecUrl = process.env.PUBLIC_URL

type source = "imgs" | "logos" | "extras";

const IMGSDIR = "/images/";
const LOGOSDIR = "/images/logos/";
const EXTRASDIR = "/images/logos";

interface Status {
    source: source,
    file: string
}

const useImage = () => {

}