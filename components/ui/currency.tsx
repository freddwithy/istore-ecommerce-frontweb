"use client"

import { use, useEffect, useState } from "react"

const formatter = new Intl.NumberFormat("es-PY", {
    style: "currency",
    currency: "PYG"
})

interface CurrencyProps {
    value?: string | number
}
  

const Currency: React.FC<CurrencyProps> = ({
    value
}) => {
    const [ isMounted, setIsMounted ] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return (
        <div className="font-semibold">
            {formatter.format(Number(value))}
        </div>
    )
}


export default Currency 