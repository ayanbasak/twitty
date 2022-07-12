package com.twitty.backend.repository;

import com.twitty.backend.entity.Role;
import com.twitty.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findByName(String name);
}