import React, {Component} from 'react';
import {Form, RadioGroup, Radio, TextArea} from 'informed';

import './reply.css';

class Reply extends Component {

    render() {
        return (
            <Form id="radio-form">
            <h3>Reply</h3>
                <RadioGroup field="quick-reply">
                <div>
                    <Radio value="opt1" id="radio-opt1"/>
                    <label htmlFor="radio-opt1">Thank you for your feedback, we will look into it</label>
                </div>
                <div>
                    <Radio value="opt2" id="radio-opt2"/>
                    <label htmlFor="radio-opt2">Thank you for your feedback, we've already
                        registered an update on this product, you can read about it in "Updates"</label>
                </div>
                </RadioGroup>

                <TextArea rows='10' cols='200' field="custom-reply" id="textarea-custom-reply" placeholder='Custom reply' />
                <div>
                    <button className='btn' type="submit">Submit</button>
                </div>
            </Form>
        )
    }
}

export default Reply;