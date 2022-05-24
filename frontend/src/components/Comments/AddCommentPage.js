import React from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import useAuth from '../../hooks/useAuth'
import useCustomForm from '../../hooks/useCustomForm'

let initialValues = {
    user: "",
    text: "",

};

const AddCommentPage = () => {
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues)


    async function postNewComment(newComment){
        try {
            let response = await axios.post("http://127.0.0.1:8000/api/comments/", formData, newComment, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            
        } catch (error) {
          console.log(error.message);

        }
    }



    return ( 
        <div className="container">
            <form className='form' onSubmit={handleSubmit}>
                <label>
                    User: {" "}
                    <input type="text" name="user" value={formData.user} onChange={handleInputChange} />

                </label>
                <label>
                    Text: {" "}
                    <input type="text" name="text" value={formData.text} onChange={handleInputChange} />

                </label>
                <button>Add Comment!</button>
            </form>
        </div>
     );
}
 
export default AddCommentPage;