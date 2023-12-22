// let businessmen = [
//     {
//         name: "Hasan",
//         age: "2008-07-28",
//         gender: 'm',
//         tax: 12,
//         budget: 1000,
//         expensesPerYear: [200,100,50]
//     },
//     {
//         name: "Alsafir",
//         age: "2008-10-13",
//         gender: 'm',
//         tax: 9,
//         budget: 2500,
//         expensesPerYear: [200,500,50]
//     },
//     {
//         name: "Allayor",
//         age: "2008-06-24",
//         gender: 'w',
//         tax: 12,
//         budget: 2000,
//         expensesPerYear: [200,100,120]
//     },
//     {
//         name: "Radmir",
//         age: "2007-04-28",
//         gender: 'w',
//         tax: 5,
//         budget: 4000,
//         expensesPerYear: [200,1000,500]
//     },
//     {
//         name: "Jaxongir",
//         age: "2006-09-03",
//         gender: 'm',
//         tax: 13,
//         budget: 3000,
//         expensesPerYear: [200,100,1200]
//     },
//     {
//         name: "Bexruz",
//         age: "2007-11-27",
//         gender: 'w',
//         tax: 9,
//         budget: 2400,
//         expensesPerYear: [200,100,900]
//     },
//     {
//         name: "Alibek",
//         age: "2006-04-12",
//         gender: 'm',
//         tax: 15,
//         budget: 4200,
//         expensesPerYear: [200,100,2000]
//     }
// ]


// let succesfull = []
// let unsuccesfull = []

// let totalTaxes = 0

// for(let item of businessmen) {
//     item.expensesPerMonth = 0
//     for(let expense of item.expensesPerYear) {
//         item.expensesPerMonth += Math.round(expense / 12)
//     }
//     item.percentage = Math.round(item.expensesPerMonth * 100 / (item.budget / 12)) + "%"
//     let total = (item.budget / 12) - ((item.tax * (item.budget / 12) /100) + item.expensesPerMonth)
// let ch = item.tax.reduce((a,b) => {
//     a.tax + b.tax
// },0)


// console.log(ch);

// if(total < 0) {
//     unsuccesfull.push(item.name)
// } else{
//     succesfull.push(item.name)
// }




// }

// console.log(businessmen);


// for(let i = 0; i <= 5; i++) {
//     for(let k = i; k < 5; k++) {
//     document.write(`* `)
//     }
//     document.write(`<br/>`)
// }


let number = prompt(`До какого числа дойти и остановиться?`)

fibanachibobo(number)
function fibanachibobo(stop) {
    let num = [0, 1]

    for (let k = 0; k < stop; k++) {
        let sh = num[num.length - 2]
        let l = num[num.length - 1]
        let general = sh + l


        num.push(general)
    }
    console.log(num);

}

