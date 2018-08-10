import React, {Proptypes} from 'react';
import {Link} from 'react-router';
const CourseListRow = ({course, updateTitle}) => {
    return(
        <tr>
            <td><a href={course.watchHref} target="_blank">Watch</a></td>
            <td><Link to={'/course/' + course.id}>{course.title}</Link> <button onClick={() => updateTitle(course.id)}>Update Title</button></td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td>{course.length}</td>

        </tr>
    );
}

CourseListRow.proptypes = {
    //course: Proptypes.object
}
export default CourseListRow;