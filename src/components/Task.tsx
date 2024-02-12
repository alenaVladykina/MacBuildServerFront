import React, {useContext, useEffect} from 'react';
import {DatePicker, Form, Input, Radio} from "antd";
import {observer} from "mobx-react-lite";
import {useParams} from "react-router-dom";
import {StoreContext} from "../store";

const {TextArea} = Input;

const Task = observer(() => {
  const {tasksStore} = useContext(StoreContext)
  console.log(tasksStore.tasks)
  const params = useParams().id
  useEffect(() => {

  }, [])

  return (
    <>
      <Form
        labelCol={{span: 4}}
        wrapperCol={{span: 14}}
        layout="horizontal"
        disabled={false}
        style={{maxWidth: 600}}
      >
        <Form.Item label="Title">
          <Input/>
        </Form.Item>
        <Form.Item label="Descriptios">
          <TextArea rows={4}/>
        </Form.Item>
        <Form.Item label="DeadLine">
          <DatePicker/>
        </Form.Item>
        <Form.Item label="Status">
          <Radio.Group>
            <Radio value="apple"> Apple </Radio>
            <Radio value="pear"> Pear </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Prority">
          <Radio.Group>
            <Radio value="apple"> Apple </Radio>
            <Radio value="pear"> Pear </Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </>
  );
});

export default Task;