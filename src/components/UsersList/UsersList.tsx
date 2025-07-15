import { useState } from "react";
//import type { User } from "../../components/types";
import { Link } from "react-router-dom";
import style from "./UsersList.module.css";
import placeholderAvatar from "../../assets/zaglushka.png";
import useUsers from "../../hooks/useUser";


export const UsersList = () => {
  const {users, loading, error} = useUsers();
//   const [users, setUsers] = useState<User[]>([]);
//   useEffect(() => {
//     fetchUsers();
//   }, []);
if (loading) {
  return <div>Loading...</div>
}
if (error) {
  return <div>{error}</div>
}

  const UserAvatar = ({
    src,
    alt,
    className,
  }: {
    src?: string;
    alt?: string;
    className?: string;
  }) => {
    const [imgError, setImgError] = useState(!src);
  
    const handleError = () => {
      setImgError(true);
    };
  
    return (
      <div className={className || style.avatarContainer}> {/* Используем переданный className или дефолтный */}
        {imgError ? (
          <img
            src={placeholderAvatar}
            alt={alt || "Default avatar"}
            className={style.avatarImage}
          />
        ) : (
          <img
            src={src}
            alt={alt}
            onError={handleError}
            className={style.avatarImage}
          />
        )}
      </div>
    );
  };

  // async function fetchUsers() {
  //   const res = await fetch("https://api.escuelajs.co/api/v1/users");
  //   const usersRes = await res.json();
  //   setUsers(usersRes);
  // }

  return (
    <section>
      <h2>Users list</h2>
      <div className={style.cardsList}>
        {users.map((u) => (
          <div key={"user" + u.id} className={style.cardUser}>
            <div>
              <h3>{u.name}</h3>
              <div className={style.userInfo}>
                <div className={style.img}>
                  <UserAvatar
                    src={u?.avatar}
                    alt={u?.name}
                    className={style.imgUser}
                  />
                </div>
                <div>
                  <p>{u.email}</p>
                  <p>{u.password}</p>
                  <p>{u.role}</p>
                  <Link to={`/users/${u.id}`}>To the {u.name}</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
