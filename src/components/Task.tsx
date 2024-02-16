import React, {ChangeEvent, useContext, useEffect, useState} from 'react';
import {Button, DatePicker, Form, Input, Radio, Layout, RadioChangeEvent, Row, Col} from "antd";
import {observer} from "mobx-react-lite";
import {useNavigate, useParams} from "react-router-dom";
import {StoreContext} from "../store";
import {priorityOptions, statusOptions} from "../commons/data";
import {ArrowLeftOutlined} from "@ant-design/icons";

const {TextArea} = Input;
const {Content} = Layout;


const Task = observer(() => {
  const {taskStore, tasksStore} = useContext(StoreContext);
  const taskKey = useParams().id;
  const navigate = useNavigate();
  const [task, setTask] = useState<any>(taskStore);


  useEffect(() => {
    taskStore.fetch(taskKey);
  }, []);


  useEffect(() => {
    setTask(taskStore);
  }, [taskStore]);

  const onClickNavigateToTasks = () => {
    navigate("/");
  };

  const onSubmit = () => {
    taskKey ? taskStore.edit(task) : tasksStore.addTask({
      deadline: task.deadline,
      title: task.title,
      description: task.description,
      status: task.status,
      priority: task.priority
    });
    navigate('/');
  };
  const onChangeStatus = (e: RadioChangeEvent) => {
    setTask({...task, status: e.target.value});
  }
  const onChangePriority = (e: RadioChangeEvent) => {
    setTask({...task, priority: e.target.value});
  }
  const onChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTask({...task, description: e.target.value});
  }
  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTask({...task, title: e.target.value});
  }
  const onChangeDeadline = (date: Date) => {
    setTask({...task, deadline: date.toString()});
  }

  return (
    <Content style={{marginTop: "50px"}}>
      <Button type="link"
              onClick={onClickNavigateToTasks}
              icon={<ArrowLeftOutlined/>}>
        Back to Task List
      </Button>
      <Row justify={'center'}>
        <Col xxl={{span: 8, offset: 0}}
             xl={{span: 10, offset: 0}}
             lg={{span: 16, offset: 0}}
             md={{span: 16, offset: 0}}
             sm={{span: 24, offset: 0}}>
          <h2 style={{textAlign: "center"}}>{taskKey ? 'Update Task' : 'Add task'}</h2>
          <Form
            labelCol={{span: 6}}
            wrapperCol={{span: 16, offset: 2}}
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
            <Form.Item
              label="DeadLine">
              <DatePicker onChange={onChangeDeadline}/>
            </Form.Item>
            <Form.Item
              label="Status">
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
            <Form.Item wrapperCol={{span: 24, offset: 10}}>
              <Button type="primary"
                      htmlType="submit" onClick={onSubmit}>
                Submit
              </Button>

            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Content>
  );
});

export default Task;