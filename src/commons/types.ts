export type PostType = {
  id: string,
  title: string,
  date: string,
  subtitle: string,
  keywords: string
}

export type WorksType = {
  id: string
  title: string
  date: number
  text: string
  src: string
  keyword: string
  page?: string
}

export type UserRegistrationType = {
  email: string
  password: string
  confirmPassword: string
}


export type UserLoginType = {
  email: string
  password: string
}