import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses, updateTitle}) => {
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Length</th>
                </tr>
            </thead>
            <tbody>
                {courses.map(course => 
                    <CourseListRow key={course.id} course={course} updateTitle={updateTitle}/>
                )}
            </tbody>
        </table>
    );
}

CourseList.proptypes = {
    courses: PropTypes.array.isRequired
}
export default CourseList;