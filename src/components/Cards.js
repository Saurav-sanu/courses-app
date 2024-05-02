import React from 'react'
import Card from './Card';
import { useState } from 'react';


function Cards(props) {

    let courses=props.courses;
    let category=props.category;


    const [likedCourses,setLikedCourses]=useState([]); 


    function getcourses(){
        if(category==="All"){

            let allcourses=[];

            Object.values(courses).forEach(array=>{
                array.forEach(coursesData=>{
                    allcourses.push(coursesData);
                })
            })
    
            return allcourses;
        }
        else{
            return courses[category];
        }
    }
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4' >
        {

            getcourses().map((course) => {
                return(
                <Card key={courses.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
                )
            })
        }
    </div>
  )
}

export default Cards