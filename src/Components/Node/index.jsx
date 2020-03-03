import React, { Component } from 'react';
import { connect } from 'react-redux';

import directory from '../../Assets/directory.svg';
import './index.css';

class Node extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <dl>
                <dt><p>{`${this.props.folderName}/`}</p></dt>
                <dd>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="row">
                            <div className="column column-60">
                                <div className='row'>
                                    <div className="column column-10">
                                        <img src={directory} alt="directory" width="20px" className="directory-img" />
                                    </div>
                                    <div className="column column-50">
                                        <input type="text" placeholder="New Folder Name" className="node-input" />                        
                                    </div>
                                    <div className="column column-40">
                                        <label className="node-add">
                                            <button className="button button-outline">Add</button>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="column column-40"/>
                        </div>
                    </form>
                </dd>
                {this.props.children}
            </dl>
        );
    }
}

export default connect()(Node);