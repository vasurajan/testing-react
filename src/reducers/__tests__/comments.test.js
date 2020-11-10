import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles action creator of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: "New Comment"
    };

    const newState = commentsReducer([], action);
    expect(newState).toEqual(['New Comment'])
})

it('handles action creator of unknown type', () => {
    const action = {
        type: {}
    };

    const newState = commentsReducer([], action);
    expect(newState).toEqual([])
})