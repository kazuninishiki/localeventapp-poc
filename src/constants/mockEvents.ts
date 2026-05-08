// mock data, easier to prove poc and mvp

import { EventDetail } from "../types/events"

export const mockEvents: EventDetail[] = [
    {
        id: "evt_001",
        title: "Microsoft Canada - Meet and Greet",
        description: "Microsoft Canada - Meet and Greet",
        category: "Tech Mingle",
        organizer: "Staff A from MS",
        time: {
            startTime: "2026-05-03T18:00:00Z",
            endTime: "2026-05-03T21:00:00Z"
        },
        location: {
            latitude: 43.6458279,
            longitude: -79.3814457,
            venueName: "Microsoft Canada office",
            venueAddress: "Dominion Centre, 222 Bay St. #1201, Toronto, ON M5K 1E7"

        },
        imageUrl: "https://picsum.photos/seed/evt001/400/200"
    },
    {
        id: "evt_002",
        title: "Subaru Canada Willowdale - New Car Showcase",
        description: "Subaru Canada Willowdale - New Car Showcase",
        category: "Car Mingle",
        organizer: "Staff A from Subaru Canada Willowdale",
        time: {
            startTime: "2026-05-04T12:00:00Z",
            endTime: "2026-05-04T14:30:00Z"
        },
        location: {
            latitude: 43.8395351,
            longitude: -79.4656874,
            venueName: "Subaru Willowdale Sales Office",
            venueAddress: "5868 Yonge St, North York, ON M2M 3T3"

        },
        imageUrl: "https://picsum.photos/seed/evt002/400/200"
    },
        {
        id: "evt_003",
        title: "Table Top Games Round Table 2",
        description: "Table Top Games Round Table 2",
        category: "Table Top Gaming",
        organizer: "Staff A from HT",
        time: {
            startTime: "2026-05-30T00:30:00Z",
            endTime: "2026-05-03T08:30:00Z"
        },
        location: {
            latitude: 0,
            longitude: 0,
            venueName: "Virtual on Discord",
            venueAddress: "https://boardgames.ca/"

        },
        imageUrl: "https://picsum.photos/seed/evt003/400/200"
    },
    {
        id: "evt_004",
        title: "Shopify Toronto - Open House & Networking",
        description: "Shopify Toronto - Open House & Networking",
        category: "Tech Mingle",
        organizer: "Staff A from Shopify",
        time: {
            startTime: "2026-05-10T17:00:00Z",
            endTime: "2026-05-10T20:00:00Z"
        },
        location: {
            latitude: 43.6475,
            longitude: -79.3920,
            venueName: "Shopify Flagship Office",
            venueAddress: "130 King St W, Toronto, ON M5X 1E2"
        },
        imageUrl: "https://picsum.photos/seed/evt004/400/200"
    },
    {
        id: "evt_005",
        title: "Lululemon Yoga & Networking Morning",
        description: "Lululemon Yoga & Networking Morning",
        category: "Wellness Mingle",
        organizer: "Staff A from Lululemon",
        time: {
            startTime: "2026-05-12T09:00:00Z",
            endTime: "2026-05-12T11:00:00Z"
        },
        location: {
            latitude: 43.6705,
            longitude: -79.3862,
            venueName: "Lululemon Flagstore",
            venueAddress: "83 Yorkville Ave, Toronto, ON M4W 3H2"
        },
        imageUrl: "https://picsum.photos/seed/evt005/400/200"
    },
    {
        id: "evt_006",
        title: "Toronto Indie Game Jam",
        description: "Toronto Indie Game Jam",
        category: "Table Top Gaming",
        organizer: "Staff A from Toronto Game Devs",
        time: {
            startTime: "2026-05-18T18:00:00Z",
            endTime: "2026-05-19T02:00:00Z"
        },
        location: {
            latitude: 43.6385,
            longitude: -79.4190,
            venueName: "The Hive Coworking",
            venueAddress: "221 Colony St, Toronto, ON M8K 4E9"
        },
        imageUrl: "https://picsum.photos/seed/evt006/400/200"
    },
    {
        id: "evt_007",
        title: "BMO Financial Tech Meetup",
        description: "BMO Financial Tech Meetup",
        category: "Corporate Mixer",
        organizer: "Staff A from BMO",
        time: {
            startTime: "2026-05-22T17:30:00Z",
            endTime: "2026-05-22T20:30:00Z"
        },
        location: {
            latitude: 43.6478,
            longitude: -79.3810,
            venueName: "BMO Centre",
            venueAddress: "123 Bay St, Toronto, ON M5R 2Y8"
        },
        imageUrl: "https://picsum.photos/seed/evt007/400/200"
    },
    {
        id: "evt_008",
        title: "Toronto Food Truck Festival",
        description: "Toronto Food Truck Festival",
        category: "Community Social",
        organizer: "Staff A from Toronto Events Co.",
        time: {
            startTime: "2026-05-25T11:00:00Z",
            endTime: "2026-05-25T19:00:00Z"
        },
        location: {
            latitude: 43.6506,
            longitude: -79.3599,
            venueName: "Distillery District",
            venueAddress: "51 Trinity St, Toronto, ON M5A 3C4"
        },
        imageUrl: "https://picsum.photos/seed/evt008/400/200"
    },
    
]

