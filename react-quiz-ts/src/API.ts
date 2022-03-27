
const url='https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple'

export const fetchQuestion=async()=>{
    await fetch(url)
    .then(res=>res.json())
    .then(result=>console.log(result.results))
}          