import React from 'react';
import { BiSolidUserCircle } from 'react-icons/bi';


const commentsData = [
    {
      "name": "User1",
      "comment": "Great video! Really enjoyed it.",
      "reply_to": null,
      "comments": [
        {
          "name": "User2",
          "comment": "Thanks! Glad you liked it.",
          "reply_to": "User1",
          "comments": []
        },
        {
          "name": "User3",
          "comment": "Awesome content. Keep it up!",
          "reply_to": "User1",
          "comments": [
            {
              "name": "User1",
              "comment": "Thank you so much!",
              "reply_to": "User3",
              "comments": []
            }
          ]
        }
      ]
    },
    {
      "name": "User4",
      "comment": "This video helped me a lot. Thank you!",
      "reply_to": null,
      "comments": [
        {
          "name": "User1",
          "comment": "You're welcome!",
          "reply_to": "User4",
          "comments": []
        }
      ]
    }
  ];
  const Comment = ({prop}) => {
  const {name, comment} =prop
    return <>
        <div className='border flex bg-gray-200 p-2 m-2 rounded-xl'>
            <div ><BiSolidUserCircle className='w-12 h-12'/></div>
            <div className=''>
                <p className='font-semibold'>{name}</p>
                <p>{comment}</p>
            </div>
        </div>
    </>
  }

  

const CommentContainer = () => {

 

  return (
    <div className='w-full p-1 h-48 border m-2'>
         <div  className='font-semibold text-xl'>Comments :</div>
         <div >{commentsData.map((item =><Comment prop={item}/> ))}</div>
    </div>
  )
}

export default CommentContainer