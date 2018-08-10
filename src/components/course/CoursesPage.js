import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {browserHistory} from 'react-router';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component{
    constructor(props, context){
        super(props, context)
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);  
        this.updateTitle = this.updateTitle.bind(this);  

        
    }
    redirectToAddCoursePage(){
        //browserHistory.push('/course')
        this.context.router.push('/course');

    }
    updateTitle(id){
        let title = prompt("Enter New Title");
        if(title){
            this.props.actions.updateTitle({"id":id,"title":title});
        }
    }
    render(){
        const {courses} = this.props; 
        return(
            <div>
                <h1>Courses Page</h1>
                <input
                type="submit"
                value="Add Course"
                className="btn btn-primary"
                onClick={this.redirectToAddCoursePage}/>
                <CourseList courses={courses} updateTitle={this.updateTitle}/>
            </div>
        );
    }
}
CoursesPage.propTypes ={
    courses: PropTypes.array.isRequired
}
CoursesPage.contextTypes = {
    router:PropTypes.object
}
function mapStateToProps(state, ownProps){
    return {
        courses:state.courses
    };
}
function mapDispatchToProps(dispatch){
    return {
        // actions: courseActions
        actions: bindActionCreators(courseActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);