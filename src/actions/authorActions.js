import * as types from './actionTypes'
import AuthorApi from '../api/mockAuthorApi';
import {beginAjaxCall} from './ajaxStatusAction';

export function loadAuthorsSuccess(authors){
    return{type:types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors(){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return AuthorApi.getAllAuthors().then(Authors => {
            dispatch(loadAuthorsSuccess(Authors));
        }).catch(error => {
            throw(error);
        })
    }
}