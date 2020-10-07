import React, { Component } from 'react';
import './PetForm.css';
import camera from './camera.png'

class NewPhoto extends Component {
    state = {
        file: "",
        previewURL: ""
    }

    handleFileChange = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: file,
                previewURL: reader.result
            });
        }
        reader.readAsDataURL(file);
    }

    render() {
        const {handleFileChange} = this;
        let profile_preview = null;
        if(this.state.file !== "") {
            profile_preview = <img className="profile_preview" src={this.state.previewURL} alt="preview" width="135" height="135"/>
        } else {
            profile_preview = <img src={camera} width="50" alt='camera' id="camera" />
        }
        
        const numbers = ["boardImage1", "boardImage2", "boardImage3", "boardImage4"]
        const list = numbers.map((num) => {
            return <div>
                        <input type="file"
                            name={num} 
                            id={num} 
                            accept="image/jpg,impge/png,image/jpeg,image/gif" 
                            onChange={handleFileChange} required multiple
                        />
                        <label for={num} style={{marginRight: "24px"}}>{profile_preview}</label>
                    </div>
        });

        return (
        <div className="photo-file" style={{display: "inline-flex"}}>{list}</div>
        );
    }
}

export default NewPhoto;