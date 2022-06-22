import React, { useEffect, useState } from "react";
import userService from "../../Services/user.service";

export const useUsersList = ({limit, offset}) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadUsers();
      }, []);

      const loadUsers = async () => {
        // let params = new FormData();
        // params.append('limit',0);
        // params.append('offset',7);
        setLoading(true);
        let { response, error } = await userService.getUsersList(limit,offset);
        setLoading(false);
        // console.log("----- useUsersList loadUsers response 200 ------");
        // console.log(response);
        setUsers(response)
      };


  return [users, loading]
}
