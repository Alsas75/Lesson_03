import { useEffect, useState } from "react";
import type { User } from "../components/types";

export default function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errMsg, setErrorMessage] = useState("");

  async function fetchUsers() {
    setLoading(true);
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/users");
      if (!res.ok) {
        throw new Error("Failed to fetch users. Status: " + res.status);
      }
      const usersRes = await res.json();
      setUsers(usersRes);
    } catch (err) {
      if (err instanceof Error) setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);
  return { users, loading, error: errMsg };
}
