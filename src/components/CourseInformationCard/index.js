import React from 'react';
import styled from "styled-components";

const StyledCourseInformationCard = styled.div`

    .course-information-card{
        background-color: white;
        margin: 4%;
        padding: 4%;
        border-radius: 10px;
    }
    
    h1{
        color: var(--soft-orange);
        padding-bottom: 16px;
        font-weight: 500;
    }
    p{
        line-height: 1.7em;
    }
`;

const CourseInformationCard = (props) =>{

    return(
        <StyledCourseInformationCard>
        <div>
            <div className="course-information-card">
                <h1>{props.header}</h1>
                <p>{props.paragraph}</p>
            </div>
        </div>
        </StyledCourseInformationCard>
    );

};

export default CourseInformationCard;