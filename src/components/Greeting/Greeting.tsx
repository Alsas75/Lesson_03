interface Props {
   name: string;
   age?: number;
 }
 
 export default function Greeting(props: Props) {
   // с помощью деструктуризации получили нужный параметр из пропсов
   const { name, age } = props;   
   //   const name = "Evgenii";
   return <p>Hello, {name}! {age}</p>;
 }
