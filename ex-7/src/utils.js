export const daysFromNow = (days) => {
    const date = new Date()
    date.setDate(date.getDate() + days)
    return date
}
