package com.twitty.backend.repository;

import com.twitty.backend.dto.PostDTO;
import com.twitty.backend.dto.PostResponseDTO;
import com.twitty.backend.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface PostRepository extends JpaRepository<Post, Long> {

    @Query(nativeQuery = true, value =  "SELECT p.id as postId, p.created_at as createdAt, p.created_by as createdByUserId, p.image as postImage, " +
            "        p.is_hash_tagged_post as isHashTagged, p.type as postType, p.updated_at as postUpdatedAt,  p.no_of_comments as noOfComments, " +
            "        p.text as postText, u.username, ui.profile_picture as userProfilePicture, ui.user_tag as userTag  " +
            " FROM post p " +
            "    join user u on u.id = p.created_by " +
            "    join user_information ui on ui.id=u.user_information_id " +
            "    order by p.updated_at desc limit :limit,:offset ")
    List<PostDTO> getPostsByPagination(int limit, int offset);


    @Query(nativeQuery = true, value = "SELECT p.id as postId, p.created_at as createdAt, p.created_by as createdByUserId, p.image as postImage, " +
            "                    p.is_hash_tagged_post as isHashTagged, p.type as postType, p.updated_at as postUpdatedAt,  p.no_of_comments as noOfComments, " +
            "                    p.text as postText, u.username, ui.profile_picture as userProfilePicture, ui.user_tag as userTag  " +
            "             FROM post p " +
            "                join user u on u.id = p.created_by " +
            "                join user_information ui on ui.id=u.user_information_id " +
            "                where p.id = :postId ")
    Optional<PostDTO> findPost(Long postId);
}
