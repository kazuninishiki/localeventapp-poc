import { EventDetail } from "../types/events";

export const mockEvents: EventDetail[] = [
    {
        id: "evt_001",
        title: "Microsoft Canada - Meet and Greet",
        description: "Join Microsoft Canada for an engaging evening of networking and knowledge-sharing. Connect with fellow tech enthusiasts, learn about the latest innovations, and get insights directly from our team members. This event is perfect for professionals looking to expand their network in the tech industry.",
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
        description: "Experience the thrill of innovation at Subaru Canada Willowdale's New Car Showcase. Discover the latest models, test their cutting-edge features, and meet our team for an in-depth walkthrough. Car enthusiasts and potential buyers alike will enjoy this hands-on, interactive experience.",
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
        description: "Dive into a night of strategy, imagination, and camaraderie at our virtual Table Top Games Round Table. Whether you're a seasoned gamer or new to the scene, join us on Discord for collaborative gameplay, discussions on game design, and fun competitions. A perfect escape into the world of tabletop adventures.",
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
        description: "Explore the world of e-commerce and digital innovation at Shopify Toronto's Open House. Meet Shopify experts, discover new tools to enhance your online business, and engage with fellow entrepreneurs and tech professionals. This is an ideal event for networking and gaining insider knowledge in a relaxed, welcoming environment.",
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
        description: "Start your morning with wellness and connection at Lululemon's Yoga & Networking session. Enjoy a rejuvenating yoga class designed for all skill levels, followed by a networking brunch where you can meet like-minded individuals passionate about health, mindfulness, and professional growth.",
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
        description: "Join Toronto's vibrant indie game development community for an exhilarating Game Jam. Collaborate with designers, programmers, and artists to create new games in a high-energy, creative environment. Perfect for networking, learning new skills, and experiencing the thrill of rapid game development.",
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
        description: "Explore the intersection of finance and technology at the BMO Financial Tech Meetup. Engage with professionals from the banking and fintech sectors, learn about emerging trends, and share insights on innovative solutions shaping the financial landscape. A must-attend for anyone interested in finance, tech, or networking opportunities.",
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
        description: "Savor the flavors of Toronto at the Food Truck Festival, where culinary creativity meets street food culture. Explore a variety of gourmet food trucks, enjoy live entertainment, and experience a vibrant community atmosphere. Perfect for food lovers, families, and anyone looking for a deliciously fun day out.",
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
    }
]