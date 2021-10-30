import { TemplateInstance } from '~/models/template'

export interface IAttribute {
  name: string
  is_primary?: boolean
  template?: TemplateInstance
  created_at?: Date
  updated_at?: Date
}

export interface AttributeInstance extends IAttribute {
  id: string
}
