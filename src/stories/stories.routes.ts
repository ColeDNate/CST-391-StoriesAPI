import { Router } from 'express';
import * as StoriesController from './stories.controller';

const router = Router();

router
    .route('/stories')
    .get(StoriesController.readStories);

router
    .route('/stories/author/:author')
    .get(StoriesController.readStoriesByAuthor);

router
    .route('/stories/search/author/:search')
    .get(StoriesController.readStoriesbyAuthorSearch);
    
router
    .route('/stories/title/:title')
    .get(StoriesController.readStoriesByTitle);

router
    .route('/stories/search/title/:search')
    .get(StoriesController.readStoriesByTitleSearch);
    
router
    .route('/stories/create')
    .post(StoriesController.createStory);

router
    .route('/stories/update/:storyId')
    .patch(StoriesController.updateStory);

router
    .route('/stories/delete/:storyId')
    .delete(StoriesController.deleteStory);

export default router;