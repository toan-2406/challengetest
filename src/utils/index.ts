export const FormatCurrency = (currency:number) =>{
    const usd = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(currency);
      return usd
}

export const CheckNumberInteger = (value:number) => {
    if(value >= 0){
        return true;
    }
    return false;
}