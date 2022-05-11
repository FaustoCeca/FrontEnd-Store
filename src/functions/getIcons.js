import { icons } from "../data/icons"

export const getIcons = () => {
    return icons.map(({id, title, description}) => {
        return {
            id, title, description
        }
    })
}