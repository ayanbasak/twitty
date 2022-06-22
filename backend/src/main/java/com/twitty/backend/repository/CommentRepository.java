package com.twitty.backend.repository;

import com.twitty.backend.dto.CommentDTO;
import com.twitty.backend.entity.Comment;
import com.twitty.backend.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    @Query(nativeQuery = true, value = "  SELECT c.id as commentId, c.created_at as commentCreatedAt, c.created_by as createdByUserId, " +
            "    c.from_comment_id as fromCommentId, c.from_post_id as fromPostId, c.image as commentImage, c.text as commentText, " +
            "    c.updated_at as commentUpdatedAt, u.username, ui.profile_picture as userProfilePicture, ui.user_tag as userTag " +
            "  FROM comment c " +
            "  join user u on u.id = c.created_by " +
            "  join user_information ui on ui.id=u.user_information_id" +
            "     where c.from_post_id=:postId")
    List<CommentDTO> findCommentByPostId(Long postId);
}
