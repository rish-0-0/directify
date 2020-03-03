import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeNewDirectory } from '../../Redux/DirectoryTree/Actions/makeNewDirectory';

import down from '../../Assets/caret.svg';
import directory from '../../Assets/directory.svg';
import './index.css';


class Node extends Component {
    state = {
        show: true,
        newFolder: null,
    };
    render() {
        if (!this.state.show) {
            return (
                <dl>
                    <dt>
                        <div className="row">
                            <div className="column column-10" onClick={() => {
                                this.setState({
                                    show: true,
                                });
                            }} >
                                <img src={down} style={{
                                    transform: 'rotate(-90deg)',
                                    transition: '0.2s',
                                }} width="8px" alt="caret-down" />
                            </div>
                            <div className="column column-90">
                                <p>{`${this.props.node.value}/`}</p>
                            </div>
                        </div>
                    </dt>
                </dl>
            );
        }
        return (
            <dl>
                <dt>
                    <div className="row">
                        <div className="column column-10" onClick={() => {
                                this.setState({
                                    show: false,
                                });
                            }} >
                            <img src={down} style={{transition: '0.2s'}} width="8px" alt="caret-down" />
                        </div>
                        <div className="column column-90">
                            <p>{`${this.props.node.value}/`}</p>
                        </div>
                    </div>
                </dt>
                <dd>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="row">
                            <div className="column column-60">
                                <div className='row'>
                                    <div className="column column-10">
                                        <img src={directory} alt="directory" width="20px" className="directory-img" />
                                    </div>
                                    <div className="column column-50">
                                        <input onChange={(e) => {
                                            this.setState({
                                                newFolder: e.target.value,
                                            });
                                        }} value={!this.state.newFolder ? '' : this.state.newFolder} type="text" placeholder="New Folder Name" className="node-input" />                        
                                    </div>
                                    <div className="column column-40">
                                        <label className="node-add">
                                            <button className="button button-outline" onClick={() => {
                                                if (!this.state.newFolder) {
                                                    return;
                                                }
                                                this.props.makeNewDirectory(this.state.newFolder, this.props.node.value);
                                                this.setState({
                                                    newFolder: null,
                                                });
                                            }}>Add</button>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="column column-40"/>
                        </div>
                    </form>
                </dd>
                {
                    this.props.subDirectories.map((node) => {
                        return <Node tree={this.props.tree} node={node} subDirectories={node.children} makeNewDirectory={this.props.makeNewDirectory} />;
                    })
                }
            </dl>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        makeNewDirectory: (name, parentName) => dispatch(makeNewDirectory(name, parentName)),
    };
};

export default connect(null, mapDispatchToProps)(Node);