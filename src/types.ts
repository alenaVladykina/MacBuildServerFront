import React from "react";
import {TableProps} from "antd";

export type MenuType = ItemMenu[]

export type ItemMenu = {
  key: string
  label: React.ReactNode
}

export type StatusTaskType = 'In Progress' | 'Done' | 'Planned'
export type PriorityTaskType = 'High' | 'Low' | 'Middle'

export type  TaskType = {
  key: string
  create: Date
  update: Date
  deadline: Date
  title: string
  description: string
  status: StatusTaskType
  priority: PriorityTaskType
}

export type TableColumnsType = {
  title: string,
  dataIndex: string,
  key: string,
}

