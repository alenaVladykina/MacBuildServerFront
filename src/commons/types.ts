import React from "react";

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

export type ResFetchTask = {
  "create": string,
  "update": string,
  "deadline": string,
  "title": string,
  "status": StatusTaskType,
  "description": string,
  "priority": PriorityTaskType,
  "userId": string,
  "_id": string
}

export interface ITask {
  key: string
  create: Date
  update: Date
  deadline: string
  title: string
  description: string
  status: StatusTaskType
  priority: PriorityTaskType
}

export interface IUserType {
  id: string
  name: string
  email: string
  isLogin: boolean
}

export type  ReqUpdateTask = {
  deadline: string,
  title: string
  description: string
  status: string
  priority: string
}
