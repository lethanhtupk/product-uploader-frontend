const enum STATUS {
  DRAFT = 'draft',
  PENDING = 'pending',
  PRIVATE = 'private',
  PUBLISH = 'publish',
}

const enum CATALOG_VISIBILITY {
  VISIBLE = 'visible',
  CATALOG = 'catalog',
  SEARCH = 'search',
  HIDDEN = 'hidden',
}

const enum TAX_STATUS {
  TAXABLE = 'taxable',
  SHIPPING = 'shipping',
  NONE = 'none',
}

const enum TYPE {
  SIMPLE = 'simple',
  GROUPED = 'grouped',
  EXTERNAL = 'external',
  VARIABLE = 'variable',
}

export interface ITemplate {
  name?: string
  product_title?: string
  featured?: boolean
  description?: string
  short_description?: string
  date_on_sale_from?: Date
  date_on_sale_to?: Date
  stock_quantity?: number
  sold_individually?: boolean
  tax_class?: string
  reviews_allowed?: boolean
  position?: number
  status?: STATUS
  catalog_visibility?: CATALOG_VISIBILITY
  tax_status?: TAX_STATUS
  type?: TYPE
  created_at?: Date
  updated_at?: Date
}

export interface TemplateInstance extends ITemplate {
  id: string
}
