import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursesPage from './components/course/ManageCoursePage';
export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="courses" component={CoursesPage} />
        <Route path="course" component={ManageCoursesPage} />
        <Route path="course/:id" component={ManageCoursesPage} />
        <Route path="about" component={AboutPage} />
        
    </Route>
);