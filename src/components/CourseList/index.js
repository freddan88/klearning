import React from 'react'
import CourseListItem from '../CourseListItem'
import styled from 'styled-components'



const StyledCourseList = styled.div`
  width: ${props => (props.courseWidth ? props.courseWidth : "100%")};
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center; 
  /* padding: 10% 0; */
 
`;

const CourseList = (props) => {
    //   const [isClicked, setClicked] = useState(false)

    return (
        <StyledCourseList {...props}>
            <CourseListItem 
            courseImg='images/rectangle2.png'
            courseLength='4h' 
            courseTitle='dans dans dans'
            courseTimeLeft='3min'

             />
        </StyledCourseList>
    )
       
}

export default CourseList
