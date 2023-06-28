import { Request, RequestHandler, Response } from "express";
import { Story } from './stories.model';
import * as StoryDao from './stories.dao';
import {OkPacket } from 'mysql';


export const readStories: RequestHandler = async (req: Request, res: Response) =>{
  try{
    let stories;
    let storyId = parseInt(req.query.storyId as string);

    console.log('storyId', storyId);
    if(Number.isNaN(storyId)){
      stories = await StoryDao.readStories();
    } else{
      stories = await StoryDao.readStoriesByStoryId(storyId);
    }

    res.status(200).json(
      stories
    );
  } catch (error){
    console.error('[stories.controller][readStories][Error] ', error);
    res.status(500).json({
      message: 'There was an error when fetching stories'
    });
  }
};

export const readStoriesByAuthor: RequestHandler = async (req: Request, res: Response) =>{
  try{
    const stories = await StoryDao.readStoriesByAuthor(req.params.author);
  
    res.status(200).json(
      stories 
    );
  } catch(error){
    console.error('[stories.controller][readStories][Error] ', error);
    res.status(500).json({
      message: 'There was an error when fetching stories'
    });
  }
};

export const readStoriesbyAuthorSearch: RequestHandler = async (req: Request, res: Response) =>{
  try{
    console.log('search', req.params.search);
    const stories = await StoryDao.readStoriesByAuthorSearch('%' + req.params.search + '%');

    res.status(200).json(
      stories
    );
  } catch (error){
    console.error('[stories.controller][readStories][Error] ', error);
    res.status(500).json({
      message: 'There was an error when fetching stories'
    });
  }
};

export const readStoriesByTitle: RequestHandler = async (req: Request, res: Response) =>{
  try{
    const stories = await StoryDao.readStoriesByTitle(req.params.title);
  
    res.status(200).json(
      stories 
    );
  } catch(error){
    console.error('[stories.controller][readStories][Error] ', error);
    res.status(500).json({
      message: 'There was an error when fetching stories'
    });
  }
};

export const readStoriesByTitleSearch: RequestHandler = async (req: Request, res: Response) =>{
  try{
    console.log('search', req.params.search);
    const stories = await StoryDao.readStoriesByTitleSearch('%' + req.params.search + '%');

    res.status(200).json(
      stories
    );
  } catch (error){
    console.error('[stories.controller][readStories][Error] ', error);
    res.status(500).json({
      message: 'There was an error when fetching stories'
    });
  }
};

export const createStory: RequestHandler = async (req: Request, res: Response) => {
  try{
    const okPacket: OkPacket = await StoryDao.createStory(req.body);

    console.log('req.body', req.body);

    console.log('story', okPacket);

    res.status(200).json(
      okPacket
    );
  } catch (error){
    console.error('[stories.controller][createStory][Error] ', error);
    res.status(500).json({
      message: 'There was an error when writing stories'
    });
  }
};

/* export const updateStory: RequestHandler = async (req: Request, res: Response) => {
  try{
    const okPacket: OkPacket = await StoryDao.updateStory(req.body);

    console.log('req.body', req.body);

    console.log('story', okPacket);

    res.status(200).json(
      okPacket
    );
  } catch (error){
    console.error('[stories.controller][updateStory][Error] ', error);
    res.status(500).json({
      message: 'There was an error when updating stories'
    });
  }
}; */
export const updateStory: RequestHandler = async (req: Request, res: Response) => {
  try {
    const storyId = req.params.storyId; // Extract the storyId from request parameters
    const updatedStory: Story = req.body; // Get the updated story details from the request body
    updatedStory.storyId = parseInt(storyId, 10); // Set the storyId in the updatedStory object

    const okPacket: OkPacket = await StoryDao.updateStory(updatedStory);

    console.log('req.body', req.body);
    console.log('story', okPacket);

    res.status(200).json(okPacket);
  } catch (error) {
    console.error('[stories.controller][updateStory][Error]', error);
    res.status(500).json({
      message: 'There was an error when updating the story',
    });
  }
};



export const deleteStory: RequestHandler = async (req: Request, res: Response) =>{
  try{
    let storyId = parseInt(req.params.storyId as string);

    console.log('storyId', storyId);
    if(!Number.isNaN(storyId)){
      const response = await StoryDao.deleteStory(storyId);

      res.status(200).json(
        response
      );
    } else{
      throw new Error("Integer expected for storyId");
    }

  } catch(error) {
    console.error('[stories.controller][deleteStory][Error] ', error);
    res.status(500).json({
      message: 'There was an error when deleting stories'
    });
  }
};

/* const ALBUMS = [
    {id:1, name: 'Please Please Me (1963)', band: 'The Beatles'},
    {id:2, name: 'With The Beatles (1963)', band: 'The Beatles'},
    {id:3, name: 'A Hard Day\'s Night (1964)anchester United', band: 'The Beatles'},
    {id:4, name: 'Beatles For Sale (1964)', band: 'The Beatles'},
    {id:5, name: 'Help (1965)', band: 'The Beatles'},
    {id:6, name: 'Rubber Soul (1965)', band: 'The Beatles'},
    {id:7, name: 'Please Please Me (1967)', band: 'The Beatles'},
    {id:8, name: 'Most of these records are not very good', band: 'The Beatles'},
  ];

export const readAlbums = (req: Request, res: Response) => {
    res.send(ALBUMS);
}; */