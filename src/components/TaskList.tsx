import React, {useContext, useEffect} from 'react';
import {Content} from "antd/es/layout/layout";
import {Button, Flex, Input, Space, Table, Tag, Typography} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {StoreContext} from "../store";
import {toJS} from "mobx";
import {correctDate} from "../commons/utils";
import {v1} from "uuid";
import {ITask, IUserType} from "../commons/types";

const {Text} = Typography;


const TaskList = observer(() => {
    const navigate = useNavigate();
    const {tasksStore} = useContext(StoreContext);

    useEffect(() => {
      tasksStore.fetch();
    }, [])

    const columns: any = [
      {
        title: 'Name / Description',
        dataIndex: v1(),
        column: 204,
        width: '30%',
        align: 'left',
        render: (_: any, record: any) => {
          const key = record.key;
          return key ? <Text>{record.title}</Text> : <Text>{record.description}</Text>
        },
      },
      {
        title: 'Deadline',
        align: 'center',
        dataIndex: v1(),
        render: (_: any, record: any) => {
          const data: Date | null = record.deadline ? new Date(record.deadline) : null

          const stringDate = data ?
            <>
              <span>{correctDate(data.getDate())}</span>.
              <span>{correctDate(data.getMonth() + 1)}</span>.
              <span>{correctDate(data.getFullYear())}</span>
            </> : '-'
          return (<span>{stringDate}</span>)
        }
      },
      {
        title: 'Status',
        dataIndex: v1(),
        align: 'center',
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
        filters: [{
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
        onFilter: (value: string, record: any) => record.status.indexOf(value) === 0
      },
      {
        title: 'Priority',
        dataIndex: v1(),
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
        dataIndex: v1(),
        render: (_: any, record: any) => {

          if (!record.key) {
            return null
          }

          const onClick = () => {
            navigate(`/task/${record.key}`)
          }

          return (
            <Space size={30}>
              <Button
                type="link"
                onClick={onClick}
              >
                Edit...
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
      {
        title: 'Update',
        dataIndex: v1(),
        render: (_: any, record: any) => {
          const data: Date = new Date(record.update)

          const stringDate =
            <>
              <span>{correctDate(data.getDate())}</span>.
              <span>{correctDate(data.getMonth() + 1)}</span>.
              <span>{correctDate(data.getFullYear())} </span>
              <span> {correctDate(data.getHours())}</span>:
              <span>{correctDate(data.getMinutes())}</span>
            </>

          return (<p>{stringDate}</p>)
        }
      },
    ]
    const tasks: ITask[] = tasksStore.tasks

    return (
      <Content>
        <Flex justify='end' style={{marginTop: '30px', marginBottom: '30px', marginRight: '30px'}}>
          <Button
            onClick={() => navigate('/add')}
            type="primary"
            size='middle'
          >
            Add Task
          </Button>
        </Flex>
        <Table columns={columns}
               pagination={false}
               dataSource={toJS(tasksStore.tasks)}
               rowKey={(record) => record.create}
        />
      </Content>
    );
  })
;

export default TaskList;