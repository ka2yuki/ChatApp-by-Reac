import React from 'react'
import { useParams } from 'react-router-dom'
import { Button, Form, Segment, TextArea } from 'semantic-ui-react'

export default function MessageForm(props: any) {
  const params = useParams();
  return (
    <div>MessageForm :  {params.channelName}<br />
      message: {props.msg}
        <Segment>
            <Form>
                <Form.Field>
                    <TextArea
                      placeholder='white your messages'
                      value={props.msg}
                      onChange={props.handleChange}
                    />
                </Form.Field>
                <Button primary type='submit' >SEND</Button>
            </Form>
        </Segment>
    </div>
  )
}
