import React, {useState, useContext, useEffect} from 'react';
import {Content} from "antd/es/layout/layout";
import {Button, Input, Space, Table, Tag, Typography} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {StoreContext} from "../store";
import {toJS} from "mobx";


const {Text} = Typography;


const TaskList = observer(() => {
  const navigate = useNavigate();
  const [value, setValue] = useState();
  const {tasksStore} = useContext(StoreContext);

  useEffect(() => {
    tasksStore.fetch()
  }, [])

  const columns: any = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (_: any, record: any) => {

        return (
          <Text>{record.title}</Text>
        )
      },

    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (_: any, record: any) => {
        let textType;
        if (record.status === 'In Progress') {
          textType = 'warning'
        } else if (record.status === 'Done') {
          textType = 'success';
        } else {
          textType = 'default'
        }

        return (
          <Tag color={textType}>{record.status}</Tag>
        )
      },
      filters: [
        {
          text: 'In Progress',
          value: 'In Progress',
        },
        {
          text: 'Done',
          value: 'Done',
        },
        {
          text: 'Planned',
          value: 'Planned',
        },
      ],
      onFilter: (value: string, record: any) => record.status.indexOf(value) === 0,
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
      render: (_: any, record: any) =>
        (
          <Text type={record.priority === 'High' ? 'danger' : 'secondary'}>
            {record.priority}
          </Text>
        ),

      filters: [
        {
          text: 'High',
          value: 'High',
        },
        {
          text: 'Low',
          value: 'Low',
        },
        {
          text: 'Middle',
          value: 'Middle',
        },
      ],
      onFilter: (value: string, record: any) => record.priority.indexOf(value) === 0,
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (_: any, record: any) => {
        const onClick = () => {
          navigate(`/task/${record.key}`)
        }
        return (
          <Space size={20}>
            <Button
              type="link"
              onClick={onClick}>
              Detalis...
            </Button>
            <Button
              type="primary"
              danger={true}
              icon={<DeleteOutlined/>}
              onClick={() => tasksStore.remove(record.key)}/>
          </Space>
        )
      },
    },
  ]

  const onChange = (e: any) => {
    setValue(e.target.value)
  }
  const click = () => {
    tasksStore.addTask(value)
  }

  return (
    <Content>
      <Space.Compact style={{width: '100%'}}>
        <Input type='text'
               value={value}
               onChange={onChange}
               defaultValue=""/>
        <Button type="primary" onClick={click}>Submit</Button>
      </Space.Compact>

      <Table columns={columns}
             pagination={false}
             dataSource={toJS(tasksStore.tasks)}
      />
    </Content>
  );
});

export default TaskList;