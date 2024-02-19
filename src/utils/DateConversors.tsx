import { format, formatDistance, subDays } from 'date-fns';
import { es } from 'date-fns/locale';

export const dateConversor = (date: string) => {
    return formatDistance(subDays(new Date(), 3), new Date(date), { addSuffix: false, locale: es });
};

export const formatConversor = (date: string, type:string) => {
    return format(new Date(date), type);
};