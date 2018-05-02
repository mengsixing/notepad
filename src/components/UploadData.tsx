import * as localforage from 'localforage';
import * as React from 'react';
import { AppContext } from '../context/index';

class UploadData extends React.Component {
    constructor(props) {
        super(props);
    }
    public render() {
        return (
            <AppContext.Consumer>
                {({ toggleContent }) => {
                    return (
                      <div>
                        <input type="file"/>
                      </div>
                    );
                }
                }
            </AppContext.Consumer>
        );
    }
}

export default UploadData;
