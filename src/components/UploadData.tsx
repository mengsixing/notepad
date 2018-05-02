import * as localforage from 'localforage';
import * as React from 'react';
import { AppContext } from '../context/index';
import './UploadData.css';

class UploadData extends React.Component {
    constructor(props) {
        super(props);
        this.upload = this.upload.bind(this);
    }
    public upload(event: any) {
        const self = this;
        const files = event.target.files;
        const reader = new FileReader();
        if (files[0] && files[0].name.indexOf('notepad') !== -1) {
            reader.onload =  (ev: any) => {
                localforage.setItem('todolist_state', JSON.parse(ev.target.result));
            };
            reader.readAsText(files[0]);
        } else {
            alert('上传失败');
        }
    }
    public render() {
        return (
            <AppContext.Consumer>
                {({ toggleContent }) => {
                    return (
                        <div className="upload-container">
                            <input type="file" onChange={this.upload.bind(this)} />
                        </div>
                    );
                }
                }
            </AppContext.Consumer>
        );
    }
}

export default UploadData;
