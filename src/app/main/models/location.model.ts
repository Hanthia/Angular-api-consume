import { ResourceBase } from '@models/common.model'

export interface Location extends ResourceBase {
  type: string
  dimension: string
  residents: string[]
}
