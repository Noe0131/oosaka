import styles from "./index.module.css";

type Plan = {
  id: number;
  time: string;
  name: string;
};

const plans: Plan[] = [
  { id: 2, time: "7:20", name: "出発" },
  { id: 2, time: "7:37", name: "椥辻" },
  { id: 2, time: "9:04", name: "夢洲到着" },
  { id: 2, time: "10:00", name: "東ゲート" },
  { id: 3, time: "11:00", name: "サウジアラビアパビリオン" },
  { id: 1, time: "12:00", name: "昼ご飯" },
  { id: 4, time: "13:00", name: "アメリカ、フランス" },
  { id: 1, time: "18:00", name: "夜ごはん" },
  { id: 3, time: "19:30", name: "チェコパビリオン" },
  { id: 4, time: "20:00", name: "水のショー" },
  { id: 3, time: "20:30", name: "オーストラリア" },
  { id: 2, time: "21:30", name: "西ゲートバス" },
];

export default function Bookmark() {
  return (
    <div className={styles.container}>
      {plans.map((plan, index) => (
        <div key={index}>
          <h1 className={`${styles.bookmark} ${styles[`id${plan.id}`]}`}>
            {plan.time} {plan.name}
          </h1>
        </div>
      ))}
    </div>
  );
}
