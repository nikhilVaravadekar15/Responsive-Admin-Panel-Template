import {
    UilClipboardAlt,
    UilMoneyWithdrawal,
    UilUsdSquare
} from "@iconscout/react-unicons"


export const cardsData = [
    {
        title: "Sales",
        colors: {
            background: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5"
        },
        barValue: 70,
        value: "25,970",
        png: UilUsdSquare,
        series: [
            {
                name: "Sales",
                data: [31,40,28,51,42,109,100]
            }
        ]
    },
    {
        title: "Revenue",
        colors: {
            background: "linear-gradient(180deg, #ff919d 0%, #fc929d 100%)",
            boxShadow: "0px 10px 20px 0px #fdc0c7"
        },
        barValue: 80,
        value: "14,270",
        png: UilMoneyWithdrawal,
        series: [
            {
                name: "Revenue",
                data: [10,100, 50,70,80,30,40]
            }
        ]
    },
    {
        title: "Expenses",
        colors: {
            background: "linear-gradient(180deg, rgb(248, 212, 154) -146.42%, rgb(255, 202, 113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #f9d598"
        },
        barValue: 60,
        value: "4,370",
        png: UilClipboardAlt,
        series: [
            {
                name: "Expenses",
                data: [10,25,15,30,12,15,20]
            }
        ]
    }
]
