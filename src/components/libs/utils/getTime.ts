export const getMinutes = (createdDate: string) => {
    return Math.floor((Date.now() - new Date(createdDate).getTime()) / 3600000)
}

export const getHours = (createdDate: string) => {
    return Math.floor((Date.now() - new Date(createdDate).getTime()) / 3600000 / 60)
}

export const getDays = (createdDate: string) => {
    return Math.floor((Date.now() - new Date(createdDate).getTime()) / 3600000 / 60 / 24)
}
