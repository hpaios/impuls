export const convertToPrise = (prize: string) => {
    return new Intl.NumberFormat('en-DE').format(Number(prize))
};
