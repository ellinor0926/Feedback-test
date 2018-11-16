import React, {Component, Fragment as F} from 'react';
import Attachments from '../attachments';
import Conversation from '../conversation';
import MessageHeader from '../messageHeader';
import Reply from '../reply';

import './detailed-feedback.css';

class ShowFeedback extends Component {

    state = {
        feedback: this.props.feedback
    }

    render() {

        const {feedback} = this.props;

        return (
            <div className='detailed-fb'>

                {/* Header with information about the sender and product information */}
                <div className='detailed-fb-header'>
                    <div className='detailed-fb-productInfo'>
                        #{feedback.itemNumber}, {feedback.itemName}
                    </div>
                    <div className='detailed-fb-btn-container'>
                        <button className='btn detailed-fb-dwpbtn'>DWP</button>
                    </div>
                </div>

                <MessageHeader sender={feedback.sender} date={feedback.date}/> {/* Meta and feedback content */}
                <div className='detailed-fb-meta'>
                    <table>
                        <tbody>
                            <tr>
                                <th>Type of input:</th>
                                <th>Supplier Number:</th>
                                <th>Production Week:</th>
                            </tr>
                            <tr>
                                <td>{feedback.inputType}</td>
                                <td>{feedback.supplier}</td>
                                <td>{feedback.productionWeek}</td>
                            </tr>
                            {feedback.interval && (
                                <F>
                                    <tr>
                                        <td>{feedback.interval}</td>
                                        <td colSpan='2' rowSpan='2'>{feedback.attachemnts && <Attachments list={feedback.attachemnts}/>}</td>
                                    </tr>
                                    <tr>
                                        <td>{feedback.handled}</td>
                                    </tr>
                                </F>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className='detailed-fb-content'>
                    <p>{feedback.comment}</p>
                    <div className='translate-button'>
                        <button className='btn'>Translate</button>
                    </div>
                </div>

                {feedback.conversation.length > 0 && <Conversation conversation={feedback.conversation}/>}
                
                {/* TODO!! Fixa så reply renderar om när man väljer ny feedback */}
                <Reply />
            </div>
        )
    }
}

export default ShowFeedback;