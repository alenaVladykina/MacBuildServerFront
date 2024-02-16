import React from "react";
import type {IStore} from "../store/store"

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
  create: string,
  update: string,
  deadline: string,
  title: string,
  status: StatusTaskType,
  description: string,
  priority: PriorityTaskType,
  userId: string,
  _id: string,
  children: ResFetchTask[]
}

export interface ITask {
  key: string
  create: string
  update: string
  deadline: string
  title: string
  description: string
  status: StatusTaskType
  priority: PriorityTaskType
  children?:ResFetchTask[]
}

export interface IUserType extends IStore {
  id: string
  email: string
  isLogin: boolean
  error:string|null
}

export type  ReqUpdateTask = {
  deadline: string,
  title: string
  description: string
  status: string
  priority: string
}

export interface AppStoreType {
  errorMessage: string | null,
  payloadMessage: string | null,
}

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  description: string;
}


