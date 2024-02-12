import React, {ChangeEvent, useContext, useEffect, useState} from 'react';
import {Button, DatePicker, Form, Input, Radio, RadioChangeEvent} from "antd";
import {observer} from "mobx-react-lite";
import {useParams} from "react-router-dom";
import {StoreContext} from "../store";
import {PriorityTaskType, StatusTaskType} from "../types";
import {ITask} from "../store/taskStore";

const {TextArea} = Input;

const Task = observer(() => {
  const {taskStore} = useContext(StoreContext)
  const taskKey = useParams().id

  const [task, setTask] = useState<ITask>({
    key: taskStore.key,
    create: taskStore.create,
    update: taskStore.update,
    deadline: taskStore.deadline,
    title: taskStore.title,
    description: taskStore.description,
    status: taskStore.status,
    priority: taskStore.priority
  })

  useEffect(() => {
    taskStore.fetch(taskKey)
  }, [])

  useEffect(() => {
    setTask(taskStore)
  }, [taskStore])


  const statusOptions = ['In Progress', 'Done', 'Planned']
  const priorityOptions = ['High', 'Low', 'Middle']

  const onSubmit = () => {
    taskStore.edit(task)
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
          <DatePicker/>
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