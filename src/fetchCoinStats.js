import React, {Suspense, useState,useEffect,useRef,useLayoutEffect} from 'react';
import axios from 'axios'


var tempArr = []


export const FetchCryptoInfo = ({activeCoins,setActiveCoins,number,setNumber,process,setProcess,currency,switchHeader,setSwitchHeader,fetchData,
setFetchData,changingCurrency,setChangingCurrency,hPerror,setHpError,loadingStats,setLoadingStats,currencySymbolDisplay,setCurrencySymbolDisplay,
currencySymbol,setCurrencySymbol})=>{

var convertCurrency = currency.toLowerCase()


const allToolsFunction = {
Market_Cap_Above:{method: (mcoinz)=> mcoinz.market_cap >= Number(number)},
Market_Cap_Below:{method: (mcoinz)=> mcoinz.market_cap <= Number(number)},
Current_Price_Above:{method: (mcoinz)=> mcoinz.current_price >= Number(number)},
Current_Price_Below:{method: (mcoinz)=> mcoinz.current_price <= Number(number)},
market_cap_Rank_Above:{method: (mcoinz)=> mcoinz.market_cap_rank >= Number(number)},
market_cap_Rank_Below:{method: (mcoinz)=> mcoinz.market_cap_rank <= Number(number)},
Total_Volume_Above:{method: (mcoinz)=> mcoinz.total_volume >= Number(number)},
Total_Volume_Below:{method: (mcoinz)=> mcoinz.total_volume <= Number(number)},
All_Time_High_Above:{method:(mcoinz)=> mcoinz.ath >= Number(number)},
All_Time_High_Below:{method:(mcoinz)=> mcoinz.ath <= Number(number)},
All_Time_Low_Above:{method: (mcoinz)=> mcoinz.atl >= Number(number)},
All_Time_Low_Below:{method: (mcoinz)=> mcoinz.atl <= Number(number)},
High_24h_Above:{method:(mcoinz)=> mcoinz.high_24h >= Number(number)},
High_24h_Below:{method:(mcoinz)=> mcoinz.high_24h <= Number(number)},
Low_24h_Above:{method: (mcoinz)=> mcoinz.low_24h >= Number(number)},
Low_24h_Below:{method: (mcoinz)=> mcoinz.low_24h <= Number(number)},
Price_Change_24h_Above:{method: (mcoinz)=> mcoinz.price_change_24h >= Number(number)},
Price_Change_24h_Below:{method: (mcoinz)=> mcoinz.price_change_24h <= Number(number)},
Price_Change_Percentage_24h_Above:{method: (mcoinz)=> mcoinz.price_change_percentage_24h >= Number(number)},
Price_Change_Percentage_24h_Below:{method: (mcoinz)=> mcoinz.price_change_percentage_24h <= Number(number)},
Market_Cap_Change_24h_Above:{method: (mcoinz)=> mcoinz.market_cap_change_24h >= Number(number)},
Market_Cap_Change_24h_Below:{method: (mcoinz)=> mcoinz.market_cap_change_24h <= Number(number)},
Market_Cap_Change_Percentage_24h_Above:{method: (mcoinz)=> mcoinz.market_cap_change_percentage_24h >= Number(number)},
Market_Cap_Change_Percentage_24h_Below:{method: (mcoinz)=> mcoinz.market_cap_change_percentage_24h <= Number(number)},
Circulating_Supply_Above:{method: (mcoinz)=> mcoinz.circulating_supply >= Number(number)},
Circulating_Supply_Below:{method: (mcoinz)=> mcoinz.circulating_supply <= Number(number)},
Total_Supply_Above:{method: (mcoinz)=> mcoinz.total_supply >= Number(number)},
Total_Supply_Below:{method: (mcoinz)=> mcoinz.total_supply <= Number(number)},
Max_Supply_Above:{method: (mcoinz)=> mcoinz.max_supply >= Number(number)},
Max_Supply_Below:{method: (mcoinz)=> mcoinz.max_supply <= Number(number)},
Price_Change_Percentage_1h_In_Currency_Above: {method: (mcoinz)=> mcoinz.price_change_percentage_1h_in_currency >= Number(number)},
Price_Change_Percentage_1h_In_Currency_Below: {method: (mcoinz)=> mcoinz.price_change_percentage_1h_in_currency <= Number(number)},
Price_Change_Percentage_24h_In_Currency_Above:{method: (mcoinz)=> mcoinz.price_change_percentage_24h_in_currency >= Number(number)},
Price_Change_Percentage_24h_In_Currency_Below:{method: (mcoinz)=> mcoinz.price_change_percentage_24h_in_currency <= Number(number)},
Price_Change_Percentage_7d_In_Currency_Above:{method:  (mcoinz)=> mcoinz.price_change_percentage_7d_in_currency >= Number(number)},
Price_Change_Percentage_7d_In_Currency_Below:{method:  (mcoinz)=> mcoinz.price_change_percentage_7d_in_currency <= Number(number)},
}




const addPagination =(arr)=>{

var cloneArr = arr
var finalArr = []

while(cloneArr.length !== 0){
var sliceOut = cloneArr.splice(0,100)
finalArr.push(sliceOut)
setActiveCoins(finalArr)	
console.log(arr)

}	
}





    const moonUrl1 = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${convertCurrency}&order=market_cap_desc&per_page=250&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
    useEffect(()=>{
	
	if(!switchHeader){
	const moon0 =   setTimeout(()=>{
		   setLoadingStats('Loading coin stats........')
           axios.get(moonUrl1).then((res)=> {return res.data.filter(allToolsFunction[process].method)}).then((result)=> tempArr.push(...result)).catch((err)=>{})
         },10)
	     }
		 return ()=>{clearTimeout(moon0)}
        },[process,currency,switchHeader,fetchData])

      const moonUrl2 = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${convertCurrency}&order=market_cap_desc&per_page=250&page=2&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      useEffect(()=>{
	  if(!switchHeader){
      const moon1 =   setTimeout(()=>{
           axios.get(moonUrl2).then((res)=> {return res.data.filter(allToolsFunction[process].method)}).then((result)=> tempArr.push(...result)).catch((err)=>{})
           },200)
	       }
           return ()=>{clearTimeout(moon1)}
        },[process,currency,switchHeader,fetchData])   

        const moonUrl3 = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${convertCurrency}&order=market_cap_desc&per_page=250&page=3&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
        useEffect(()=>{ 
		if(!switchHeader){
        const moon2 = setTimeout(()=>{
           axios.get(moonUrl3).then((res)=> {return res.data.filter(allToolsFunction[process].method)}).then((result)=> tempArr.push(...result)).catch((err)=>{})
          },400)
		  }
          return ()=>{clearTimeout(moon2)}
        },[process,currency,switchHeader,fetchData])   

        const moonUrl4 = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${convertCurrency}&order=market_cap_desc&per_page=250&page=4&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
        useEffect(()=>{
        if(!switchHeader){			
        const moon3 = setTimeout(()=>{
        axios.get(moonUrl4).then((res)=> {return res.data.filter(allToolsFunction[process].method)}).then((result)=> tempArr.push(...result)).catch((err)=>{})
          },800)
		  }
          return ()=>{clearTimeout(moon3)}
        },[process,currency,switchHeader,fetchData])   
		
		
		
    const moonUrl5 = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${convertCurrency}&order=market_cap_desc&per_page=250&page=5&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
    useEffect(()=>{
	
	if(!switchHeader){
	const moon4 =   setTimeout(()=>{
		
           axios.get(moonUrl5).then((res)=> {return res.data.filter(allToolsFunction[process].method)}).then((result)=> tempArr.push(...result)).catch((err)=>{})
         },1000)
	     }
		 return ()=>{clearTimeout(moon4)}
        },[process,currency,switchHeader,fetchData])

      const moonUrl6 = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${convertCurrency}&order=market_cap_desc&per_page=250&page=6&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      useEffect(()=>{
	  if(!switchHeader){
      const moon5 =   setTimeout(()=>{
           axios.get(moonUrl6).then((res)=> {return res.data.filter(allToolsFunction[process].method)}).then((result)=> tempArr.push(...result)).catch((err)=>{})
           },1100)
	       }
           return ()=>{clearTimeout(moon5)}
        },[process,currency,switchHeader,fetchData])   

        const moonUrl7 = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${convertCurrency}&order=market_cap_desc&per_page=250&page=7&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
        useEffect(()=>{ 
		if(!switchHeader){
        const moon6 = setTimeout(()=>{
           axios.get(moonUrl7).then((res)=> {return res.data.filter(allToolsFunction[process].method)}).then((result)=> tempArr.push(...result)).catch((err)=>{})
          },1300)
		  }
          return ()=>{clearTimeout(moon6)}
        },[process,currency,switchHeader,fetchData])   

        const moonUrl8 = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${convertCurrency}&order=market_cap_desc&per_page=250&page=8&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
        useEffect(()=>{
        if(!switchHeader){			
        const moon7 = setTimeout(()=>{
        axios.get(moonUrl8).then((res)=> {return res.data.filter(allToolsFunction[process].method)}).then((result)=> tempArr.push(...result)).catch((err)=>{})
          },1400)
		  }
          return ()=>{clearTimeout(moon7)}
        },[process,currency,switchHeader,fetchData])   
		

          useEffect(()=>{
          const moonUrl9 = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${convertCurrency}&order=market_cap_desc&per_page=250&page=9&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
          if(!switchHeader){
		  const moon8 = setTimeout(()=>{
		  setLoadingStats('')
          axios.get(moonUrl9).then((res)=> {return res.data.filter(allToolsFunction[process].method)}).then((result)=> tempArr.push(...result)).then(()=>{addPagination([...tempArr])}).then(()=>setCurrencySymbolDisplay(currencySymbol)).catch((err)=>{setHpError(`Can't retrive coin stats`);setLoadingStats('')})
          },1500)
          }
          const emptyArr = setTimeout(()=>{
            tempArr.length = 0
			setChangingCurrency('')
          },5000)

          return ()=>{clearTimeout(moon8);clearTimeout(emptyArr)}
        },[process,currency,switchHeader,fetchData]) 

}