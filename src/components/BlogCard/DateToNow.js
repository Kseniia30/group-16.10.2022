import { formatDistanceToNow } from 'date-fns'

export const result = date => {
    return formatDistanceToNow(
            new Date(date),
            { addSuffix: true }
        )
}