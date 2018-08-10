import * as types from './actionTypes'
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusAction';
export function loadCoursesSuccess(courses){
    return{type:types.LOAD_COURSES_SUCCESS, courses};
}
export function updateCourseSuccess(course){
    return{type:types.UPDATE_COURSE_SUCCESS, course};
}
export function createCourseSuccess(course){
    return{type:types.CREATE_COURSE_SUCCESS, course};
}
export function updateTitle(updateTitleObj){
    return{type:types.UPDATE_TITLE_SUCCESS, updateTitleObj};
}

export function loadCourses(){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        })
    }
}
// export function updateTitle(obj){
//     return function(dispatch){
//         dispatch(updateTitle1(obj));
//     }
// }

export function saveCourse(course){
    return function(dispatch,getState){
        dispatch(beginAjaxCall());
        return courseApi.saveCourse(course).then(savedCourse => {
            course.id ? dispatch(updateCourseSuccess(savedCourse)) : 
            dispatch(createCourseSuccess(savedCourse));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        })
    }
}

