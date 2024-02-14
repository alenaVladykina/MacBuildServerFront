import React, {ChangeEvent, useContext, useEffect, useState} from 'react';
import {Button, DatePicker, Flex, Form, Input, Radio, RadioChangeEvent} from "antd";
import {observer} from "mobx-react-lite";
import {useNavigate, useParams} from "react-router-dom";
import {StoreContext} from "../store";
import {priorityOptions, statusOptions} from "../commons/data";
import {ITask, ReqUpdateTask} from "../commons/types";

const {TextArea} = Input;


const Task = observer(() => {
  const {taskStore, tasksStore} = useContext(StoreContext)
  const taskKey = useParams().id
  const navigate = useNavigate()
  const [task, setTask] = useState<ITask>(taskStore)
  console.log(taskStore)

  useEffect(() => {
    taskStore.fetch(taskKey)
  }, [])


  useEffect(() => {
    setTask(taskStore)
  }, [taskStore])

  const onSubmit = () => {
    taskKey ? taskStore.edit(task) : tasksStore.addTask({
      deadline: task.deadline,
      title: task.title,
      description: task.description,
      status: task.status,
      priority: task.priority
    });
    navigate('/')
  }
  const onChangeStatus = (e: RadioChangeEvent) => {
    setTask({...task, status: e.target.value})
  }
  const onChangePriority = (e: RadioChangeEvent) => {
    setTask({...task, priority: e.target.value})
  }
  const onChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTask({...task, description: e.target.value})
  }
  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTask({...task, title: e.target.value})
  }
  const onChangeDeadline = (date: Date) => {
    setTask({...task, deadline: date.toString()})
  }

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
          <Input value={task.title} onChange={onChangeTitle} maxLength={40}/>
        </Form.Item>
        <Form.Item label="Descriptios">
          <TextArea rows={4} value={task.description} onChange={onChangeDescription}/>
        </Form.Item>
        <Form.Item label="DeadLine">
          <DatePicker onChange={onChangeDeadline}/>
        </Form.Item>
        <Form.Item label="Status">
          <Radio.Group options={statusOptions}
                       value={task.status}
                       onChange={onChangeStatus}
          />
        </Form.Item>
        <Form.Item label="Priority">
          <Radio.Group options={priorityOptions}
                       value={task.priority}
                       onChange={onChangePriority}
          />
        </Form.Item>
        <Form.Item wrapperCol={{offset: 8, span: 16}}>
          <Button type="primary" htmlType="submit" onClick={onSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
});

export default Task;