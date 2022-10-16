import { format } from 'date-fns'

export const result = date => {
    return format(new Date(date), 'Pp', { addSuffix: true }
    )}