type TableHead = ('date' | 'name' | 'version' | 'description' | 'hasNote') []

interface TableData {
  date: string
  name: string
  version: string
  description: string
  hasNote?: boolean
  use_related?: string
  peculiarity?: string
  tags?: string
}

export type {
  TableHead,
  TableData,
}
