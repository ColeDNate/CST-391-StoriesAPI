export const storyQueries = {
    readStories: `
        SELECT
            id AS storyId, author AS author, title AS title, chapter AS chapter,
            content AS content, publishDate AS publishDate
        FROM stories.stories
        `,
    readStoriesByAuthor: `
        SELECT 
            id AS storyId, author AS author, title AS title, chapter AS chapter,
            content AS content, publishDate AS publishDate
        FROM stories.stories
        WHERE stories.stories.author = ?
        `,
    readStoriesByAuthorSearch: `
        SELECT 
            id AS storyId, author AS author, title AS title, chapter AS chapter,
            content AS content, publishDate AS publishDate
        FROM stories.stories
        WHERE stories.stories.author LIKE ?
        `,
    readStoriesByTitle: `
        SELECT 
            id AS storyId, author AS author, title AS title, chapter AS chapter,
            content AS content, publishDate AS publishDate
        FROM stories.stories
        WHERE stories.stories.title = ?
        `,
    readStoriesByTitleSearch: `
        SELECT 
            id AS storyId, author AS author, title AS title, chapter AS chapter,
            content AS content, publishDate AS publishDate
        FROM stories.stories
        WHERE stories.stories.title LIKE ?
        `,
    readStoriesByStoryId: `
        SELECT 
            id AS storyId, author AS author, title AS title, chapter AS chapter,
            content AS content, publishDate AS publishDate
        FROM stories.stories
        WHERE stories.stories.id = ?
        `,
    createStory: `
        INSERT INTO stories (author, title, chapter, content, publishDate) VALUES (?,?,?,?,?)
        `,
    updateStory: `
        UPDATE stories.stories
        SET author = ?, title = ?, chapter = ?, content = ?, publishDate = ?
        WHERE id = ?
        `,
    deleteStory: `
        DELETE FROM stories.stories
        WHERE id = ?
        `,
}