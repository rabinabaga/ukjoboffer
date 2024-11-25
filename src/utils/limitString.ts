export function limitDescription(description: string, maxLength: number): string {
    if (description && description.length > maxLength) {
        return description.slice(0, maxLength) + '...';
    }
    return description;
}

export function removeWordCharacter(word: string): string {
    if (word && word == 'approved') return word.endsWith('d') ? word.slice(0, -1) : word;
    else if (word && word == 'rejected') return word.endsWith('ed') ? word.slice(0, -2) : word;
    else return '';
}

export const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }).format(date);
};

export function capitalizeFirstLetter(string: any) {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const toISOString = (isoString: any) => {
    return (isoString ?  new Date(isoString).toISOString().slice(0, 10) : '');
};

export const toLocaleDateString = (isoString: any) => {
    return new Date(isoString).toLocaleDateString('en-CA');
};
