import { OkPacket  } from "mysql";
import { execute } from "../services/mysql.connector";
import { Story } from "./stories.model";
import { storyQueries } from './stories.queries';

export const readStories = async () =>{
    return execute<Story[]>(storyQueries.readStories, []);
};

export const readStoriesByAuthor = async (author: string) =>{
    return execute<Story[]>(storyQueries.readStoriesByAuthor, [author]);
};

export const readStoriesByAuthorSearch = async (search: string) => {
    console.log('search param', search);
    return execute<Story[]>(storyQueries.readStoriesByAuthorSearch, [search]);
};

export const readStoriesByTitle = async (title: string) =>{
    return execute<Story[]>(storyQueries.readStoriesByTitle, [title]);
};

export const readStoriesByTitleSearch = async (search: string) => {
    console.log('search param', search);
    return execute<Story[]>(storyQueries.readStoriesByTitleSearch, [search]);
};

export const readStoriesByStoryId = async (storyId: number) =>{
    return execute<Story[]>(storyQueries.readStoriesByStoryId, [storyId]);
};

export const createStory = async (story: Story) => {
    console.log('attempting to create story');
    return execute<OkPacket>(storyQueries.createStory,
        [story.author, story.title, story.chapter, story.content, story.publishDate]);
};

export const updateStory = async (story: Story) => {
    return execute<OkPacket>(storyQueries.updateStory,
        [story.author, story.title, story.chapter, story.content, story.publishDate, story.storyId]);
};

export const deleteStory = async (storyId: number) =>{
    return execute<OkPacket>(storyQueries.deleteStory, [storyId]);
};