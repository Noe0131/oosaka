import Image from "next/image"

type plan = {
    id: number;
    time: string;
    name: string;
};

const plans: plan[] = [
    {id: 2, time: "7:20", name: "出発"},
    {id: 2, time: "7:37", name: "椥辻"},
    {id: 2, time: "9:04", name: "夢洲到着"},
    {id: 2, time: "10:00", name: "東ゲート"},
    {id: 3, time: "11:00", name: "サウジアラビアパビリオン"},
    {id: 1, time: "12:00", name: "昼ご飯"},
    {id: 4, time: "13:00", name: "アメリカ、フランス"},
    {id: 1, time: "18:00", name: "夜ごはん"},
    {id: 3, time: "19:30", name: "チェコパビリオン"},
    {id: 4, time: "20:00", name: "水のショー"},
    {id: 3, time: "20:30", name: "オーストラリア"},
    {id: 2, time: "21:30", name: "西ゲートバス"},
];

const bgColors: { [ key: number]: string} = {
    1: "bg-red-300",
    2: "bg-blue-300",
    3: "bg-green-300",
    4: "bg-yellow-300",
};

export default function bookmark() {
    return (
        <div>
            {plans.map((plan) => (
                <div 
                key={plan.id}
                className={`flex p-4 m-2 rounded-lg  ${bgColors[plan.id]}`}
                >
                <h2 className={"mr-10 text-2xl"}>{plan.time}</h2>
                <p className={"text-2xl"}>{plan.name}</p>
                </div>
            ))}
        </div>
    );
};

