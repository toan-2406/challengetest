export const FormatCurrency = (currency:number) =>{
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumSignificantDigits: 3
    })
    return formatter.format(currency)
}