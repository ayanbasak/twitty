package com.twitty.backend.repository;

import com.twitty.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
    User findByEmail(String email);

    @Query(nativeQuery = true, value =  "SELECT * FROM user order by id desc limit :limit,:offset ")
    List<User> findAllUsers(int limit, int offset);
}
