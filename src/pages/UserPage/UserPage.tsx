import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { User } from "../../components/types";
import style from "./UserPage.module.css";
import placeholderAvatar from "../../assets/zaglushka.png";

export default function UserPage() {
  const { id } = useParams();
  const [user, setUser] = useState<User | undefined>(undefined);

  async function fetchUser(id: string | undefined) {
    const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
    const obj = await res.json();
    setUser(obj);
  }

  useEffect(() => {
    fetchUser(id);
  }, [id]);

  return (
    <section>
      <h2>User: {user?.name}</h2>
      <div className={style.card}>      
        <div className={style.imgContainer}> 
          <img 
            src={user?.avatar} 
            alt={user?.name} 
            className={style.userImage}
            onError={(e) => {
              (e.target as HTMLImageElement).src = placeholderAvatar;
            }}
          />
        </div>
        <div className={style.data}>
          <p>Email: {user?.email}</p>
          <p>Password: {user?.password}</p>
          <p>Role: {user?.role}</p>
        </div>
      </div>
    </section>
  );
}
