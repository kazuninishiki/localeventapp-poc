import { useQuery } from "@tanstack/react-query";
import { fetchEvents, fetchEventById } from "./eventsService";

export const useEvents = () => {
    return useQuery ({
        queryKey: ['events'],
        queryFn: fetchEvents,
    })
}

export const useEventById = (id: string) => {
    return useQuery ({
        queryKey: ['events', id],
        queryFn: () => fetchEventById(id),
        enabled: !!id
    })
}