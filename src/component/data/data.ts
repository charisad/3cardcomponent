export interface data {
    cardDetails : CardDetails[]
} 

export interface CardDetails{
    header:string
    paragraph:string
    // svg:string
}

export const details: data = { 
        cardDetails:[
            {header:"SEDANS",paragraph:"Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip"},
            {header:"SUV",paragraph:"Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures"},
            {header:"LUXURY",paragraph:"Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."}
        ]
}