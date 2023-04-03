import { useState } from 'react';

import { format, formatDistanceToNowStrict } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

const comments = [
    1,
];

export function Post({ author, content, publishedAt }) {
    const [comments, setComments] = useState([
        1,
        2
    ])

    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR
    });

    const publishedDateRelativeToNow = formatDistanceToNowStrict(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    function handleCreateNewComment() {
        event.preventDefault();
        setComments([...comments, comments.length + 1]);
        console.log(comments)
    }

    return <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar src={author.avatarUrl}/>

                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>

            <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
        </header>

        <div className={styles.content}>
            {content && (
                content.map(item => {
                    if (item.type === 'paragraph') {
                        return <p>{item.content}</p>
                    } else if (item.type === 'link') {
                        return <p><a href="#">#{item.content}</a></p>
                    }
                })
            )}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>
            <textarea placeholder='Deixe um comentário'></textarea>
            <footer>
                <button type="submit">Publicar</button>
            </footer>
        </form>

        <div className={styles.commentList}>
            {comments && (
                comments.map(comment => (
                    <Comment 
                        key={comment}
                    />
                ))
            )}
        </div>
    </article>
}