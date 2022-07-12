import React, { useEffect, useMemo, useState } from "react";
import userService from "../services/user.service";

export const useUsersList = ({limit, offset}) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = useMemo(async () => {
    setLoading(true);
    let { response, error } = await userService.getUsersList(limit, offset);
    setLoading(false);
    setUsers(response);
  }, [limit, offset])

  return [users, loading]
}
