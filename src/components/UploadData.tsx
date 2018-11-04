import { Col, message, Row } from 'antd';
import * as localforage from 'localforage';
import * as React from 'react';
import { AppContext } from '../context/index';
import './UploadData.css';

class UploadData extends React.Component {
    constructor(props: any) {
        super(props);
        this.upload = this.upload.bind(this);
    }
    public upload(event: Event): void {
        const self = this;
        const files = (event.target as HTMLInputElement).files;
        const reader = new FileReader();
        if (files[0] && files[0].name.indexOf('notepad') !== -1) {
            reader.onload = (ev: Event) => {
                localforage.setItem(
                    'todolist_state',
                    JSON.parse( (ev.target as any).result),
                );
                message.success('上传成功');
            };
            reader.readAsText(files[0]);
        } else {
            message.error('上传失败');
        }
    }
    public render() {
        return (
            <AppContext.Consumer>
                {({ toggleContent }) => {
                    return (
                        <div className="upload-container">
                            <Row>
                                <Col span={12} offset={6}>
                                    <input
                                        id="file"
                                        type="file"
                                        onChange={this.upload.bind(this)}
                                    />
                                </Col>
                            </Row>
                        </div>
                    );
                }}
            </AppContext.Consumer>
        );
    }
}

export default UploadData;
