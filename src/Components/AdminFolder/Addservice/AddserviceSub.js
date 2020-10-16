import React, { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';

const AddserviceSub = () => {
    const [info, setInfo] = useState();
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit = e => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('description', info.description);
        fetch('https://agile-ravine-23942.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if(data){
                    alert('New Service successfully added!');
                }
            })
            .catch(err=>{
                console.log(err);
            })
            e.preventDefault();
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Service Title</label>
                    <input onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="Service Title" required/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Description</label>
                    <input onBlur={handleBlur} type="text" class="form-control" name="description" placeholder="Description" required/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Upload image</label>
                    <input onChange={handleFileChange} type="file" class="form-control" name="img" required/>
                </div>
                <input type="submit" value="submit"/>
            </form>
        </div>
    );
};

export default AddserviceSub;